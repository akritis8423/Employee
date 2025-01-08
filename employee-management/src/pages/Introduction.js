import React from "react";

const Introduction = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Employee Management App</h1>
      <p className="mt-3">
        The Employee Management App is designed to help you efficiently manage employee records. 
        With this app, you can:
      </p>
      <ul>
        <li>Add new employees to the system.</li>
        <li>View a list of all employees.</li>
        <li>Edit employee details when needed.</li>
        <li>Delete employees who are no longer part of the organization.</li>
      </ul>
      <p>
        This app is simple, user-friendly, and ensures all your employee data is organized in one place.
        Get started by navigating to the <strong>Employee List</strong> page!
      </p>
    </div>
  );
};

export default Introduction;
