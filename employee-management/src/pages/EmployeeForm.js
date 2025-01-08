import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEmployee, getEmployeeById, updateEmployee } from "../services/employeeService";

const EmployeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", position: "" });
  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      const fetchEmployee = async () => {
        const employee = await getEmployeeById(id);
        setForm(employee);
      };
      fetchEmployee();
    }
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateEmployee(id, form);
    } else {
      await createEmployee(form);
    }
    navigate("/employees");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="container mt-4">
      <h1>{isEditing ? "Edit Employee" : "Add Employee"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position
          </label>
          <input
            type="text"
            className="form-control"
            id="position"
            name="position"
            value={form.position}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          {isEditing ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
