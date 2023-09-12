import { useEffect, useState } from "react";
import { getLoanApplications } from "./api";

const ViewLoanApplication = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    return async () => {
      const response = await getLoanApplications();
      setEmployees(response);
      console.log("This is from useEffect", response);
    };
  }, []);

  return (
    <div className="container">
      <h3 className="text-primary">Employee List</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Date of Joining</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>{employee.email}</td>
              <td>{employee.doj}</td>
              <td>{employee.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
