import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Private/Home"));
const Login = lazy(() => import("./pages/Login"));
const EmployeeList = lazy(() => import("./pages/Private/EmployeeList"));
const CreateEmployee = lazy(() => import("./pages/Private/CreateEmployee"));
const Private = lazy(() => import("./pages/Private/Private"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
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
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
