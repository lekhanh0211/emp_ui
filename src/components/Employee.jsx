import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ emp, deleteEmployee }) => {
    const navigate = useNavigate();
    const editEmployee = (event, id) => {
        event.preventDefault();
        navigate(`/editEmployee/${id}`);
    };
  return (
    <tr>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.id}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.firstName}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.lastName}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emp.emailId}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(event, id) => editEmployee(event, emp.id)}
          className="text-amber-500-600 hover:text-amber-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(event, id) => deleteEmployee(event, emp.id)}
          className="text-red-600 hover:text-red-800 px-4 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
