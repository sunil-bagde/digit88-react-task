import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../../config";

let ShowEmployeesDetials = () => {
  let { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    try {
      const response = await fetch(config.API_URL + `/${id}`);
      const employeesData = await response.json();
      console.log("employeesData", employeesData);
      setEmployee(employeesData);
    } catch (e) {
      console.log(e);
    }
  };

  if (Object.keys(employee).length === 0) {
    return (
      <h1 className="flex-no-shrink text-90 font-normal text-2xl ">
        No user found
      </h1>
    );
  }
  return (
    <div className="max-w-8xl mx-auto">
      <div className="flex justify-center items-center w-full mt-10">
        <h1 className="flex-no-shrink text-90 font-normal text-2xl">
          User Details
        </h1>
      </div>

      <div className="card mt-6 py-3 px-6">
        <div className="flex border-b border-40">
          <div className="w-1/4 py-4">
            <h4 className="font-normal text-80">ID</h4>
          </div>{" "}
          <div className="w-3/4 py-4 break-words">
            <p className="text-90">{employee.id}</p>
          </div>
        </div>

        <div className="flex border-b border-40">
          <div className="w-1/4 py-4">
            <h4 className="font-normal text-80">Name</h4>
          </div>{" "}
          <div className="w-3/4 py-4 break-words">
            <p className="text-90">{employee.first_name}</p>
          </div>
        </div>

        <div className="flex  border-40">
          <div className="w-1/4 py-4">
            <h4 className="font-normal text-80">Email</h4>
          </div>{" "}
          <div className="w-3/4 py-4 break-words">
            <p className="text-90">{employee.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowEmployeesDetials;
