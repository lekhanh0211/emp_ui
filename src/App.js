import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployee from "./components/ListEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<ListEmployee />} />
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employeeList" element={<ListEmployee />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
