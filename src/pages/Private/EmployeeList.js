/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import Navigation from "../../components/Navigation";
import Tables from "../../components/Table/Tables";
import { getEmployees } from "../../utils/fetchEmployees";
import ManageDataEmployees from "../../utils/ManageDataEmployees";
import TextData from "../../utils/TextData";

/**
EmployeeList - displays list of employees and implements search functionality
@function
@returns {JSX.Element} - rendered component
*/
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    /**
     * Loads employee data from database
     * @function
     * @async
     */
    const loadData = async () => {
      const result = [];
      const data = await getEmployees();
      //console.log(data);
      await data.forEach((query) =>
        result.push({ key: query.id, employees: query.data() })
      );
      const resultData = result.map((doc) => new ManageDataEmployees(doc));
      setEmployees(resultData);
    };
    loadData();
  }, [employees.length]);

  /**
Creates array of TextData objects
@function
@returns {Array.<TextData>} - array of TextData objects
*/
  /// Fonction qui créée un tableau [{id: string , text: string, employee:{} }, {id: , text: , employee: } ....]
  function makeText() {
    let textArray = [];
    employees?.forEach((employee) => {
      const { key, firstname, lastname, department, street, city, state } =
        employee;

      textArray?.push(
        new TextData(
          key,
          firstname
            .concat(",")
            .concat(lastname)
            .concat(",")
            .concat(department)
            .concat(",")
            .concat(street)
            .concat(",")
            .concat(city)
            .concat(",")
            .concat(state),
          employee
        )
      );
    });
    //console.log(textArray);
    return textArray;
  }

  /**
State for search results
@type {Array.<ManageDataEmployees>}
*/
  const [search, setSearch] = useState([]);

  /**
Handles search input
@function
@param {string} val - search input value
*/
  const handleSearch = (val) => {
    let f = [];
    const data = makeText();
    console.log(data);
    const e = data.filter((word) => word.text.includes(val.toLowerCase()));
    for (let elt of e) {
      f.push(elt.employee);
    }
    console.log(f);
    setSearch(f);
  };

  return (
    <>
      <Navigation />
      <img className="mx-auto mt-8 w-auto h-auto" src={logo} alt="logo" />
      <h1 className="text-center text-2xl sm:text-5xl sm:mt-8 sm:mb-16 text-green-700 font-bold">
        Current Employees
      </h1>
      <div className="mx-auto w-11/12">
        <div className="sm:flex sm:items-center sm:justify-center sm:mb-12 ">
          <div className="sm:flex sm:flex-col sm:w-1/4 mb-4">
            <h1 className="mt-4 text-xl font-semibold text-gray-900">
              Employees
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the HRnet employees !
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex h-auto sm:w-1/4">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700 sm:mt-3 sm:mr-4"
            >
              Search
            </label>
            <div className="mt-1">
              <input
                onChange={(e) => handleSearch(e.target.value)}
                type="text"
                name="firstname"
                id="firstname"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                placeholder="Search an employee"
              />
            </div>
          </div>
        </div>

        <div className="mb-20 w-full">
          {search.length > 0 ? (
            <Tables data={search} />
          ) : (
            <Tables data={employees} />
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
