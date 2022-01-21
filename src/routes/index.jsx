import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import AdminDashboard from "../screens/admin/AdminDashboard";
import AdminLogin from "../screens/admin/AdminLogin";
import CreateDoctor from "../screens/doctor/CreateDoctor";
import DoctorLogin from "../screens/doctor/DoctorLogin";
import Login from "../screens/PatientLogin";
import PatientDetails from "../screens/PatientDetails";
import PatientsList from "../screens/PatientsList";
import RegisterPatient from "../screens/RegisterPatient";
import SinglePatient from "../screens/SinglePatient";
import CreatePatient from "../screens/patient/CreatePatient";
import DoctorPatients from "../screens/doctor/DoctorPatients";
import DoctorList from "../screens/doctor/DoctorList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/patientLogin" element={<Login />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/createDoctor" element={<CreateDoctor />} />
      <Route path="/doctorLogin" element={<DoctorLogin />} />
      <Route path="doctorsLists" element={<DoctorList />} />
      <Route path="/createPatient/:id" element={<CreatePatient />} />
      <Route path="/register/:id" element={<RegisterPatient />} />
      <Route path="/patientDetails/:id" element={<PatientDetails />} />
      <Route path="/doctorPatients/:id" element={<DoctorPatients />} />
      <Route path="lists" element={<PatientsList />} />
      <Route path="search" element={<SinglePatient />} />
    </Routes>
  );
};

export default MainRoutes;
