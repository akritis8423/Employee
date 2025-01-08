import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeeList from "../pages/EmployeeList";
import EmployeeForm from "../pages/EmployeeForm";
import Introduction from "../pages/Introduction";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Set the default route to the Introduction component */}
      <Route path="/" element={<Introduction />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employees/new" element={<EmployeeForm />} />
      <Route path="/employees/edit/:id" element={<EmployeeForm />} />
    </Routes>
  );
};

export default AppRoutes;
