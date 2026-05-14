import {
  LayoutDashboard,
  Building2,
  School,
  Users,
  UserCheck,
  Calendar,
  ClipboardCheck,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export const SIDEBAR_MENU = [
  {
    group: "Chức năng",
    items: [
      {
        name: "Bảng điều khiển",
        path: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      { name: "Khoa & Ngành", path: "/admin/departments", icon: Building2 },
      { name: "Lớp học", path: "/admin/classes", icon: School },
      { name: "Sinh viên", path: "/admin/students", icon: Users },
      { name: "Giảng viên", path: "/admin/teachers", icon: UserCheck },
      { name: "Lịch học & Thi", path: "/admin/schedule", icon: Calendar },
      { name: "Điểm danh", path: "/admin/attendance", icon: ClipboardCheck },
      { name: "Bảng điểm", path: "/admin/grades", icon: BarChart3 },
    ],
  },
  {
    group: "Hệ thống",
    items: [
      { name: "Cài đặt", path: "/settings", icon: Settings },
      { name: "Đăng xuất", path: "/htmltemplate", icon: LogOut },
    ],
  },
] as const;

export const SIDEBAR_MENU_GIANGVIEN = [
  {
    group: "Chức năng",
    items: [
      { name: "Bảng điều khiển", path: "/giangvien", icon: LayoutDashboard },
      { name: "Lịch dạy", path: "/giangvien/schedule", icon: Calendar },
      { name: "Điểm danh", path: "/giangvien/attendance", icon: ClipboardCheck },
      { name: "Nhập điểm", path: "/giangvien/grades", icon: BarChart3 },
    ],
  },
  {
    group: "Hệ thống",
    items: [
      { name: "Cài đặt", path: "/settings", icon: Settings },
      { name: "Đăng xuất", path: "/htmltemplate", icon: LogOut },
    ],
  },
] as const;
