import React from "react";
import { Routes, Route } from "react-router";
import CreateEmployee from "./pages/Private/CreateEmployee";
import EmployeeList from "./pages/Private/EmployeeList";
import Home from "./pages/Private/Home";
import Login from "./pages/Login";
import Private from "./pages/Private/Private";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<Private />}>
          <Route path="/private/home" element={<Home />}></Route>
          <Route
            path="/private/create-employee"
            element={<CreateEmployee />}
          ></Route>

          <Route
            path="/private/employee-list"
            element={<EmployeeList />}
          ></Route>
        </Route>
        {/* <Route path="/modal" element={<Modal />}></Route> */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
