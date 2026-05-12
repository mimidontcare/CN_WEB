import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/layout";
import DashboardPage from "./admin/dashboard/page";
import AttendancePage from "./admin/attendance/page";
import ClassesPage from "./admin/classes/page";
import DepartmentsPage from "./admin/departments/page";
import GradesPage from "./admin/grades/page";
import SchedulePage from "./admin/schedule/page";
import SettingsPage from "./admin/settings/page";
import StudentsPage from "./admin/students/page";
import TeachersPage from "./admin/teachers/page";
import UsersPage from "./admin/users/page";

import LoginPage from "./login/page";
import RegisterPage from "./DangKY/page";
import HomePage from "./home/page";
import HtmlTemplatePage from "./htmltemplate/page";
import RootPage from "./page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/DangKY" element={<RegisterPage />} />
        <Route path="/htmltemplate" element={<HtmlTemplatePage />} />

        {/* Admin Routes wrapped with AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="classes" element={<ClassesPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="grades" element={<GradesPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
