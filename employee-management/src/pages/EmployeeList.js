import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllEmployees, deleteEmployee } from "../services/employeeService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getAllEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees(await getAllEmployees());
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Employee List</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/employees/new")}
        >
          Add Employee
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => navigate(`/employees/edit/${employee.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
