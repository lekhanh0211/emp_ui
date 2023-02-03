import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const handleChangeInput = (event) => {
    const value = event.target.value;
    setEmployee({ ...employee, [event.target.name]: value });
  };
  const navigate = useNavigate();
  const cancelUpdate = () => {
    navigate("/employeeList");
  };
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id, //khac vơi addemployee là đã có id
    firstName: "",
    lastName: "",
    emailId: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await EmployeeService.getEmployeeById(id);
        setEmployee(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateDataEmployee = (event) => {
    event.preventDefault(); //ngăn chặn hành vi tự load lại trang
    EmployeeService.updateEmployee(employee,id)
    .then((response)=>{
        navigate("/employeeList")
    })
    .catch((e)=>{
        console.log(e);
    })

  };
  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1 className="">Update Employee</h1>
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
            onClick={(event) => updateDataEmployee(event)}
          >
            Update
          </button>
          <button
            // onClick={()=>navigate("/employeeList")}
            onClick={cancelUpdate}
            className="rounded text-white font-semibold bg-red-700 py-2 px-6  hover:bg-red-400 hover:text-black"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
