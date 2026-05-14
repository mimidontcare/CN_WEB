import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { School, Mail, Lock, LogIn } from 'lucide-react';
import loginApi from '@/ApiCall/loginApi';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginApi({ email, password });
      
      if (response.token) {
        const role = localStorage.getItem('role');
        if (role === 'admin' || role === '1') {
          navigate('/admin/dashboard');
        } else if (role === 'giangvien' || role === '2') {
          navigate('/giangvien');
        } else if (role === 'sinhvien' || role === '3') {
          navigate('/student');
        } else {
          navigate('/home');
        }
      } else {
        setError(response.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
      }
    } catch (err: any) {
      setError('Có lỗi xảy ra khi kết nối đến máy chủ.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-gray-300 p-4 relative">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100 relative z-10">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-black px-8 pt-10 pb-8 flex flex-col items-center">
          <div className="p-4 bg-white/10 rounded-full mb-5 backdrop-blur-sm">
            <School className="h-14 w-14 text-white" strokeWidth={1.8} />
          </div>

          <h1 className="text-3xl font-bold text-white tracking-tight">
            Đăng Nhập
          </h1>

          <p className="mt-2 text-gray-300 text-sm">
            Cổng thông tin đào tạo Đại học
          </p>
        </div>

        {/* Form */}
        <div className="p-8 pt-10">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl text-center font-medium">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email / Mã đăng nhập
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl
                  text-gray-800 placeholder:text-gray-400
                  focus:border-gray-400 focus:bg-white
                  focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Mật khẩu */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Mật khẩu
                </label>
                <a href="#" className="text-sm font-medium text-gray-900 hover:underline">
                  Quên mật khẩu?
                </a>
              </div>

              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl
                  text-gray-800 placeholder:text-gray-400
                  focus:border-gray-400 focus:bg-white
                  focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gray-900 to-black text-white font-medium rounded-xl
                hover:from-gray-800 hover:to-gray-950
                transition shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-70"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <LogIn size={20} />
                    Đăng nhập
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Register link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Chưa có tài khoản?{" "}
              <Link
                to="/DangKY"
                className="text-gray-900 font-medium hover:underline"
              >
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
