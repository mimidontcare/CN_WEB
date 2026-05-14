import { useState } from "react";
import { Settings, Moon, Sun, Bell, Shield, Save, CheckCircle } from "lucide-react";

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="relative p-6 w-full h-full bg-gradient-to-br from-indigo-50 via-white to-blue-50 border border-indigo-100 rounded-2xl flex flex-col overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black tracking-tight flex items-center gap-3">
            <Settings size={36} className="text-blue-600" />
            Cài Đặt Hệ Thống
          </h1>
          <p className="text-slate-500 mt-2 font-medium">Quản lý tuỳ chọn và cấu hình hệ thống</p>
        </div>
        <button
          onClick={handleSave}
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300"
        >
          {saved ? <CheckCircle size={20} /> : <Save size={20} />}
          {saved ? "Đã lưu!" : "Lưu thay đổi"}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto space-y-6">
        {/* Thông tin chung */}
        <div className="bg-white/70 backdrop-blur-xl border border-slate-100 rounded-2xl shadow p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Shield size={20} className="text-blue-500" />
            Thông tin hệ thống
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Tên trường</label>
              <input
                defaultValue="Trường Đại Học ABC"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Email liên hệ</label>
              <input
                defaultValue="admin@university.edu.vn"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Năm học hiện tại</label>
              <input
                defaultValue="2025-2026"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Học kỳ</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
                <option>Học kỳ 1</option>
                <option>Học kỳ 2</option>
                <option>Học kỳ hè</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cài đặt thông báo */}
        <div className="bg-white/70 backdrop-blur-xl border border-slate-100 rounded-2xl shadow p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Bell size={20} className="text-blue-500" />
            Cài đặt thông báo
          </h3>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="font-medium text-slate-700">Thông báo qua email khi có sinh viên mới</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
            </label>
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="font-medium text-slate-700">Thông báo khi điểm danh bất thường</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
            </label>
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="font-medium text-slate-700">Cập nhật tự động dữ liệu</span>
              <input type="checkbox" className="w-5 h-5 accent-blue-600" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
