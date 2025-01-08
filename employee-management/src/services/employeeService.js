let employees = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", position: "Manager" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", position: "Developer" },
  ];
  
  export const getAllEmployees = async () => employees;
  
  export const getEmployeeById = async (id) =>
    employees.find((employee) => employee.id === parseInt(id, 10));
  
  export const createEmployee = async (employeeData) => {
    const newEmployee = { id: employees.length + 1, ...employeeData };
    employees.push(newEmployee);
    return newEmployee;
  };
  
  export const updateEmployee = async (id, updatedData) => {
    const index = employees.findIndex((employee) => employee.id === parseInt(id, 10));
    employees[index] = { ...employees[index], ...updatedData };
    return employees[index];
  };
  
  export const deleteEmployee = async (id) => {
    employees = employees.filter((employee) => employee.id !== parseInt(id, 10));
    return employees;
  };
  