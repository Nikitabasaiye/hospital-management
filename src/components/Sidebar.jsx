import React from "react";
import { Link, useLocation } from "react-router-dom";

import bg1 from "../assets/media/profile-bg.jpg";
import dr1 from "../assets/images/doctors/01.jpg";


import { RiAirplayLine ,RiCalendarCheckLine,RiTimerLine,RiPagesLine ,RiMailUnreadLine, RiUser2Line,
  RiUserSettingsLine,
  RiEmpathizeLine,
  RiChat1Line,
  RiChatVoiceLine,
  RiLoginCircleLine,
  RiDeviceRecoverLine,  } from "react-icons/ri";

export default function Sidebar({ colClass }) {
  let location = useLocation();

  return (
    <>
      <div className={colClass}>
        <div className="rounded shadow overflow-hidden sticky-bar">
          <div className="card border-0">
            <img src={bg1} className="img-fluid" alt="" />
            <img src='' className="img-fluid" alt="" />
          </div>
          <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
            <img
              src={dr1}
              className="rounded-circle shadow-md avatar avatar-md-md"
              alt=""
            />
            <h5 className="mt-3 mb-1"> Dr.Calvin Carlo </h5>{" "}
            <p className="text-muted mb-0"> Orthopedic </p>{" "}
          </div>
          <ul className="list-unstyled sidebar-nav mb-0">
            <li
              className={`${
                location.pathname === "/doctor-dashboard" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/doctor-dashboard" className="navbar-link">
                {" "}
                <RiAirplayLine className="align-middle navbar-icon" /> Dashboard{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/doctor-appointment" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/doctor-appointment" className="navbar-link">
                {" "}
                <RiCalendarCheckLine className="align-middle navbar-icon" />{" "}
                Appointment{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/doctor-schedule" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/doctor-schedule" className="navbar-link">
                {" "}
                <RiTimerLine className="align-middle navbar-icon" /> Schedule
                Timing{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/invoices" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/invoices" className="navbar-link">
                {" "}
                <RiPagesLine className="align-middle navbar-icon" /> Invoices{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/doctor-messages" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/doctor-messages" className="navbar-link">
                {" "}
                <RiMailUnreadLine className="align-middle navbar-icon" />{" "}
                Messages{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/doctor-profile" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/doctor-profile" className="navbar-link">
                {" "}
                <RiUser2Line className="align-middle navbar-icon" /> Profile{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/doctor-profile-setting" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/doctor-profile-setting" className="navbar-link">
                {" "}
                <RiUserSettingsLine className="align-middle navbar-icon" />{" "}
                Profile Settings{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/patient-list" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/patient-list" className="navbar-link">
                {" "}
                <RiEmpathizeLine className="align-middle navbar-icon" />{" "}
                Patients{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/patient-review" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/patient-review" className="navbar-link">
                {" "}
                <RiChat1Line className="align-middle navbar-icon" /> Patients
                Review{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/doctor-chat" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/doctor-chat" className="navbar-link">
                {" "}
                <RiChatVoiceLine className="align-middle navbar-icon" /> Chat{" "}
              </Link>
            </li>
            <li
              className={`${
                location.pathname === "/login" ? "active" : ""
              } navbar-item mb-2`}
            >
              {" "}
              <Link to="/login" className="navbar-link">
                {" "}
                <RiLoginCircleLine className="align-middle navbar-icon" /> Login{" "}
              </Link>
            </li>
            <li className="navbar-item">
              {" "}
              <Link to="/forgot-password" className="navbar-link">
                {" "}
                <RiDeviceRecoverLine className="align-middle navbar-icon" />{" "}
                Forgot Password{" "}
              </Link>
            </li>
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
