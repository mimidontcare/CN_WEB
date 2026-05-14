import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Users,
  BookOpen,
  Calendar,
  CheckCircle,
  UserPlus,
  FileText,
  Edit,
} from "lucide-react";
import { getAllSinhvien } from "@/ApiCall/SinhvienApi";
import { getAllGiangvien } from "@/ApiCall/GiangvienApi";

export default function AdminDashboard() {
  const [totalSV, setTotalSV] = useState(0);
  const [totalGV, setTotalGV] = useState(0);

  useEffect(() => {
    // Lấy dữ liệu thực từ API
    getAllSinhvien()
      .then((data) => {
        if (Array.isArray(data)) setTotalSV(data.length);
      })
      .catch(() => setTotalSV(0));

    getAllGiangvien()
      .then((data) => {
        if (Array.isArray(data)) setTotalGV(data.length);
      })
      .catch(() => setTotalGV(0));
  }, []);

  return (
    <div className="relative p-6 w-full h-full bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 rounded-2xl flex flex-col overflow-hidden shadow-sm">
      {/* HEADER */}
      <div className="mb-6 flex-shrink-0">
        <h1 className="text-3xl font-bold text-black tracking-tight">
          Tổng quan hệ thống
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          Chào mừng quay trở lại. Theo dõi hoạt động đào tạo và hiệu suất của
          trường đại học.
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-auto">
        {/* CARD STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 w-full">
          {/* Tổng sinh viên - dữ liệu thực */}
          <Link to="/admin/students" className="bg-white/70 backdrop-blur-xl p-5 border border-slate-100 rounded-2xl shadow flex justify-between items-center w-full hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div>
              <p className="text-slate-500 text-sm font-medium">Tổng sinh viên</p>
              <h2 className="text-2xl font-bold text-slate-800">{totalSV.toLocaleString()}</h2>
              <p className="text-blue-500 text-sm font-medium mt-1">Dữ liệu thực</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center border border-white shadow-sm">
              <Users className="text-blue-600 flex-shrink-0" size={24} />
            </div>
          </Link>

          {/* Tổng giảng viên - dữ liệu thực */}
          <Link to="/admin/teachers" className="bg-white/70 backdrop-blur-xl p-5 border border-slate-100 rounded-2xl shadow flex justify-between items-center w-full hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div>
              <p className="text-slate-500 text-sm font-medium">Tổng giảng viên</p>
              <h2 className="text-2xl font-bold text-slate-800">{totalGV.toLocaleString()}</h2>
              <p className="text-blue-500 text-sm font-medium mt-1">Dữ liệu thực</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center border border-white shadow-sm">
              <BookOpen className="text-indigo-600 flex-shrink-0" size={24} />
            </div>
          </Link>

          <Link to="/admin/schedule" className="bg-white/70 backdrop-blur-xl p-5 border border-slate-100 rounded-2xl shadow flex justify-between items-center w-full hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div>
              <p className="text-slate-500 text-sm font-medium">Lịch học & Thi</p>
              <h2 className="text-2xl font-bold text-slate-800">Xem</h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Quản lý lịch trình</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex items-center justify-center border border-white shadow-sm">
              <Calendar className="text-blue-600 flex-shrink-0" size={24} />
            </div>
          </Link>

          <Link to="/admin/attendance" className="bg-white/70 backdrop-blur-xl p-5 border border-slate-100 rounded-2xl shadow flex justify-between items-center w-full hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div>
              <p className="text-slate-500 text-sm font-medium">Điểm danh</p>
              <h2 className="text-2xl font-bold text-slate-800">Xem</h2>
              <p className="text-slate-400 text-sm font-medium mt-1">Quản lý chuyên cần</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-100 to-teal-100 flex items-center justify-center border border-white shadow-sm">
              <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
            </div>
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full">
          {/* QUICK ACTION */}
          <div className="xl:col-span-2 bg-white/50 backdrop-blur-md p-6 border border-slate-100 rounded-2xl shadow-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-slate-800">
              Thao tác nhanh
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/admin/students"
                className="flex items-center gap-4 p-4 shadow-sm border border-slate-100 bg-white rounded-xl hover:bg-slate-50 transition-colors w-full group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UserPlus className="text-blue-500 flex-shrink-0" size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Thêm sinh viên mới</p>
                  <p className="text-sm text-slate-500 font-medium pt-0.5">
                    Đăng ký hồ sơ sinh viên mới
                  </p>
                </div>
              </Link>

              <Link
                to="/admin/classes"
                className="flex items-center gap-4 p-4 shadow-sm border border-slate-100 bg-white rounded-xl hover:bg-slate-50 transition-colors w-full group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="text-indigo-500 flex-shrink-0" size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Tạo học phần mới</p>
                  <p className="text-sm text-slate-500 font-medium pt-0.5">
                    Thiết lập chương trình học
                  </p>
                </div>
              </Link>

              <Link
                to="/admin/grades"
                className="flex items-center gap-4 p-4 shadow-sm border border-slate-100 bg-white rounded-xl hover:bg-slate-50 transition-colors w-full group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="text-emerald-500 flex-shrink-0" size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Bảng điểm</p>
                  <p className="text-sm text-slate-500 font-medium pt-0.5">
                    Quản lý bảng điểm sinh viên
                  </p>
                </div>
              </Link>

              <Link
                to="/admin/schedule"
                className="flex items-center gap-4 p-4 shadow-sm border border-slate-100 bg-white rounded-xl hover:bg-slate-50 transition-colors w-full group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Edit className="text-amber-500 flex-shrink-0" size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Chỉnh sửa lịch</p>
                  <p className="text-sm text-slate-500 font-medium pt-0.5">
                    Thay đổi thời gian lớp học
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* THỐNG KÊ NHANH */}
          <div className="bg-white/70 backdrop-blur-xl p-6 border border-slate-100 rounded-2xl shadow w-full">
            <h2 className="text-xl font-bold mb-4 text-slate-800">Thống kê nhanh</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-blue-600" />
                  <span className="font-semibold text-slate-700">Sinh viên</span>
                </div>
                <span className="text-blue-600 font-bold text-lg">{totalSV}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-indigo-50/50 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-3">
                  <BookOpen size={20} className="text-indigo-600" />
                  <span className="font-semibold text-slate-700">Giảng viên</span>
                </div>
                <span className="text-indigo-600 font-bold text-lg">{totalGV}</span>
              </div>

              <Link 
                to="/admin/departments"
                className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 hover:bg-emerald-100/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-emerald-600" />
                  <span className="font-semibold text-slate-700">Khoa & Ngành</span>
                </div>
                <span className="text-emerald-600 font-bold text-sm">Xem chi tiết →</span>
              </Link>

              <Link 
                to="/admin/grades"
                className="mt-5 w-full font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-xl py-2.5 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                Xem bảng điểm →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
