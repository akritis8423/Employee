import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../services/employeeService";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(id);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h1>{employee.name}</h1>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
    </div>
  );
};

export default EmployeeDetails;
