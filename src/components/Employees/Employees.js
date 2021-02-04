import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:8000/employees";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const employeesData = await response.json();
      setEmployees(employeesData);
    } catch (e) {
      console.log(e);
    }
  };

  const renderHeader = () => {
    let headerElement = ["id", "name", "email", ""];
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      employees &&
      employees.map(({ id, first_name, email, phone }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{email}</td>
            <td className="view">
              <Link to={`/employees/${id}`}>
                <svg
                  className="view"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </Link>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <h1 className="heading py-3">Employees List</h1>
      <div className="max-w-8xl mx-auto">
        <table className="employee">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Employees;
