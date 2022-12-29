/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import Navigation from "../../components/Navigation";
import Tables from "../../components/Table/Tables";
import { getEmployees } from "../../utils/fetchEmployees";
import ManageDataEmployees from "../../utils/ManageDataEmployees";
import TextData from "../../utils/TextData";

const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const result = [];
			const data = await getEmployees();
			console.log(data);
			await data.forEach((query) =>
				result.push({ key: query.id, employees: query.data() })
			);
			const resultData = result.map((doc) => new ManageDataEmployees(doc));
			setEmployees(resultData);
		};
		loadData();
	}, [employees.length]);

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
		console.log(textArray);
		return textArray;
	}

	/**
	 * global search  ===> recherche dans le champ de reccherche
	 */
	const [search, setSearch] = useState([]);
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
			<img className="mx-auto mt-8" src={logo} alt="logo" />
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
					{/* <div className="flex sm:w-1/4 sm:justify-center">
						<label
							htmlFor="numb"
							className="block text-sm font-medium text-gray-700 mt-3"
						>
							Show
						</label>
						<select
							id="numb"
							name="numb"
							className="mx-2 mt-1 block w-20 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
							defaultValue="10"
							ref={mySelect}
							onChange={(e) => handleSelect(e.current.value)}
						>
							<option>10</option>
							<option>25</option>
							<option>50</option>
							<option>100</option>
						</select>
						<label
							htmlFor="location"
							className="block text-sm font-medium text-gray-700 mt-3"
						>
							Entries
						</label>
					</div> */}
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

				{/* <div className="text-green-700 bg-green-50 sm:flex-row sm:items-center sm:justify-center sm:gap-20 gap-4 flex flex-col justify-between items-center mx-auto mt-8 mb-12 p-2 border-t border-green-300	">
					<p>
						Showing <span>1 </span>to <span>5</span> of <span>5 </span>entries
					</p>
					<div>
						<button className="">Previous</button>
						<button className="p-2 border border-green-700 rounded mx-2">
							1
						</button>
						<button>Next</button>
					</div>
				</div> */}
			</div>
		</>
	);
};

export default EmployeeList;
