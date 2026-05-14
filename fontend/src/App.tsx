import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminAttendance from './pages/AdminAttendance';
import AdminClasses from './pages/AdminClasses';
import AdminDashboard from './pages/AdminDashboard';
import AdminDepartments from './pages/AdminDepartments';
import AdminGrades from './pages/AdminGrades';
import AdminRooms from './pages/AdminRooms';
import AdminSchedule from './pages/AdminSchedule';
import AdminSettings from './pages/AdminSettings';
import AdminStudents from './pages/AdminStudents';
import AdminSubjects from './pages/AdminSubjects';
import AdminTeachers from './pages/AdminTeachers';
import AdminUsers from './pages/AdminUsers';
import DangKY from './pages/DangKY';
import GiangvienDiemdanh from './pages/GiangvienDiemdanh';
import GiangvienLichday from './pages/GiangvienLichday';
import Giangvien from './pages/Giangvien';
import GiangvienQuanlydiem from './pages/GiangvienQuanlydiem';
import GiangvienQuanlylop from './pages/GiangvienQuanlylop';
import Home from './pages/Home';
import Htmltemplate from './pages/Htmltemplate';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import StudentBangdiem from './pages/StudentBangdiem';
import StudentDangkyhocphan from './pages/StudentDangkyhocphan';
import StudentDiemdanh from './pages/StudentDiemdanh';
import StudentLichhoc from './pages/StudentLichhoc';
import Student from './pages/Student';
import AdminLayout from './layouts/AdminLayout';
import GiangVienLayout from './layouts/GiangVienLayout';
import StudentLayout from './layouts/StudentLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/attendance" element={<AdminAttendance />} />
          <Route path="/admin/classes" element={<AdminClasses />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/departments" element={<AdminDepartments />} />
          <Route path="/admin/grades" element={<AdminGrades />} />
          <Route path="/admin/rooms" element={<AdminRooms />} />
          <Route path="/admin/schedule" element={<AdminSchedule />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/admin/subjects" element={<AdminSubjects />} />
          <Route path="/admin/teachers" element={<AdminTeachers />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Route>

        {/* Giang Vien Routes */}
        <Route element={<GiangVienLayout />}>
          <Route path="/giangvien/diem-danh" element={<GiangvienDiemdanh />} />
          <Route path="/giangvien/lich-day" element={<GiangvienLichday />} />
          <Route path="/giangvien" element={<Giangvien />} />
          <Route path="/giangvien/quan-ly-diem" element={<GiangvienQuanlydiem />} />
          <Route path="/giangvien/quan-ly-lop" element={<GiangvienQuanlylop />} />
        </Route>

        {/* Student Routes */}
        <Route element={<StudentLayout />}>
          <Route path="/student/bang-diem" element={<StudentBangdiem />} />
          <Route path="/student/dang-ky-hoc-phan" element={<StudentDangkyhocphan />} />
          <Route path="/student/diem-danh" element={<StudentDiemdanh />} />
          <Route path="/student/lich-hoc" element={<StudentLichhoc />} />
          <Route path="/student" element={<Student />} />
        </Route>

        {/* Public / Unprotected Routes */}
        <Route path="/DangKY" element={<DangKY />} />
        <Route path="/home" element={<Home />} />
        <Route path="/htmltemplate" element={<Htmltemplate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
