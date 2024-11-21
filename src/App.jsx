import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Index from "./pages/index/Index";
import DoctorsTeam from "./pages/doctor/DoctorsTeam";
import DoctorDashBoard from "./pages/dashboard/DoctorDashBoard";
import DoctorSchedule from "./pages/dashboard/DoctorSchedule";
import Invoices from "./pages/dashboard/Invoices";
import DoctorMessages from "./pages/dashboard/DoctorMessages";
import DoctorProfileSetting from "./pages/dashboard/DoctorProfileSetting";
import PatientList from "./pages/dashboard/PatientList";
import DoctorAppointment from "./pages/dashboard/DoctorAppointment";
import PatientReview from "./pages/dashboard/PatientReview";
import DoctorChat from "./pages/dashboard/DoctorChat";
import DoctorProfile from "./pages/dashboard/DoctorProfile";
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookingAppointment from "./pages/patient/BookingAppointment";
import PatientInvoice from "./pages/patient/PatientInvoice";
import PatientAilments from "./pages/patient/PatientAilments";
import PatientProfile from "./pages/patient/PatientProfile";
import Login from "./pages/Login/Login";

import ForgotPassword from "./pages/ForgetPassword";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faqs from "./pages/Faqs";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import DoctorLogin from "./pages/Login/DoctorLogin";
import EmployeeLogin from "./pages/Login/EmployeeLogin";
import AdminLogin from "./pages/Login/AdminLogin";
import Register from "./pages/Register/Register";
import DiagnosisPatient from "./pages/patient/DiagnosisPatient";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar
        navDark={true}
        manuClass="navigation-menu nav-left"
        containerClass="container"
      />
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor-team" element={<DoctorsTeam />} />
          <Route path="/doctor-dashboard" element={<DoctorDashBoard />} />
          <Route path="/doctor-messages" element={<DoctorMessages />} />
          <Route path="/doctor-appointment" element={<DoctorAppointment />} />
          <Route path="/doctor-profile-setting" element={<DoctorProfileSetting />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/doctor-schedule" element={<DoctorSchedule />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/patient-list" element={<PatientList />} />
          <Route path="/patient-invoice" element={<PatientInvoice />} />
          <Route path="/patient-review" element={<PatientReview />} />
          <Route path="/patient-ailments" element={<PatientAilments />} />
          <Route path="/patient-diagnosis" element={<DiagnosisPatient />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/booking-appointment" element={<BookingAppointment />} />
          <Route path="/doctor-chat" element={<DoctorChat />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/error" element={<Error />} />
          <Route path = "*" element = {< Error />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
