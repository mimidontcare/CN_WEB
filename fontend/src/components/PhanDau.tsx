import { Search, Bell, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import NovigationChild from "../items_phu/novigationchild";

const PhanDau = ({ className }: { className?: string }) => {
  const [isActive, setIsActive] = useState(false);
  const [userName, setUserName] = useState("Người dùng");
  const [userRole, setUserRole] = useState("Quản trị viên");
  const notifRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Lấy thông tin user từ localStorage
    const role = localStorage.getItem("role");
    if (role === "admin" || role === "1") {
      setUserRole("Quản trị viên");
      setUserName("Admin");
    } else if (role === "giangvien" || role === "2") {
      setUserRole("Giảng viên");
      setUserName("Giảng viên");
    } else if (role === "sinhvien" || role === "3") {
      setUserRole("Sinh viên");
      setUserName("Sinh viên");
    }
  }, []);

  // Đóng dropdown thông báo khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  // Xác định tên trang hiện tại từ URL
  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes("/admin")) return "Quản lý hệ thống";
    if (path.includes("/giangvien")) return "Cổng giảng viên";
    if (path.includes("/sinhvien")) return "Cổng sinh viên";
    return "Quản lý hệ thống";
  };

  return (
    <div className={className}>
      <div className="text-black w-[75%] flex items-center relative">
        <span className="font-bold text-[22px] flex w-47 h-[100%] items-center justify-center ml-10">
          {getPageTitle()}
        </span>

        <div className="flex w-[64%] h-full items-center relative justify-center">
          <div className="w-10 h-10 text-gray-400 absolute left-4 rounded-tl-lg rounded-bl-lg flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>

          <input
            type="text"
            className="bg-[#E2E8F0] h-[70%] w-[95%] rounded-lg pl-12 outline-none shadow"
            placeholder="Tìm kiếm"
          />
        </div>

        <div ref={notifRef} className="flex w-25 h-full items-center justify-between relative">
          <span
            className="relative hover:border-2 border-gray-400 rounded-lg p-1 cursor-pointer"
            onClick={() => setIsActive(!isActive)}
            title="Thông báo"
          >
            <Bell className="w-8 h-8 text-black" />
            <span className="bg-red-500 w-2 h-2 absolute top-1 right-1 rounded-full"></span>
          </span>

          <span
            className="hover:border-2 border-gray-400 rounded-lg p-1 cursor-pointer hover:text-red-500 transition-colors"
            onClick={handleLogout}
            title="Đăng xuất"
          >
            <LogOut className="w-7 h-7" />
          </span>

          {isActive && (
            <NovigationChild className="w-100 h-120 border-2 border-white absolute top-17 left-0 bg-white rounded-lg overflow-hidden shadow-lg z-[9000]" />
          )}
        </div>

        <span className="w-[2px] h-[70%] bg-gray-400 absolute right-0"></span>
      </div>

      <div className="w-[20%] h-full flex items-center justify-center gap-1 mr-5">
        <div className="w-[75%] h-full flex flex-col justify-center items-end p-2">
          <span className="font-bold text-sm">{userName}</span>
          <span className="text-sm text-gray-500">{userRole}</span>
        </div>

        <div className="w-[19%] h-[80%] rounded-full overflow-hidden hover:cursor-pointer bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center">
          <span className="font-bold text-blue-600 text-sm">{userName.charAt(0).toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default PhanDau;
