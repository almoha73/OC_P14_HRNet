/**
 * React component for application routing and lazy loading components
 * @module App
 */

import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Spinner from "./components/Spinner";

/**
 * Lazy loaded component for Home page
 * @constant
 */
const Home = lazy(() => import("./pages/Private/Home"));
/**
 * Lazy loaded component for Login page
 * @constant
 */
const Login = lazy(() => import("./pages/Login"));
/**
 * Lazy loaded component for EmployeeList page
 * @constant
 */
const EmployeeList = lazy(() => import("./pages/Private/EmployeeList"));
/**
 * Lazy loaded component for CreateEmployee page
 * @constant
 */
const CreateEmployee = lazy(() => import("./pages/Private/CreateEmployee"));
/**
 * Lazy loaded component for Private page
 * @constant
 */
const Private = lazy(() => import("./pages/Private/Private"));
/**
 * Lazy loaded component for Error page
 * @constant
 */
const Error = lazy(() => import("./pages/Error"));

/**
 * Application routing and lazy loading component
 * @function
 * @returns {JSX.Element} - Routed components wrapped with Suspense and fallback Spinner component
 */
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
