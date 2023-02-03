import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    const value = event.target.value;
    setEmployee({ ...employee, [event.target.name]: value });
  };

  const resetInput = (event) => {
    event.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };

  const saveDataEmployee = (event) => {
    event.preventDefault(); //research preventDefault tat tinh nang lam moi trang
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1 className="">Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-5">
          <label className="block text-gray-500 text-sm font-normal">
            FirstName:
          </label>
          <input
            className="h10 w-96 border mt-2 px-2 py-2"
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(event) => handleChangeInput(event)}
            placeholder="First Name"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-5">
          <label className="block text-gray-500 text-sm font-normal">
            LastName:
          </label>
          <input
            className="h10 w-96 border mt-2 px-2 py-2"
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(event) => handleChangeInput(event)}
            placeholder="Last Name"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-5">
          <label className="block text-gray-500 text-sm font-normal">
            Email:
          </label>
          <input
            className="h10 w-96 border mt-2 px-2 py-2"
            type="text"
            name="emailId"
            value={employee.emailId}
            onChange={(event) => handleChangeInput(event)}
            placeholder="Email"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-5 space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-green-700 py-2 px-6  hover:bg-green-400 hover:text-black"
            onClick={(event) => saveDataEmployee(event)}
          >
            Save
          </button>
          <button
            className="rounded text-white font-semibold bg-red-700 py-2 px-6  hover:bg-red-400 hover:text-black"
            onClick={(event) => resetInput(event)}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
