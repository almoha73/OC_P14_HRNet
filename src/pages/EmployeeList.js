/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.jpg";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Navigation from "../components/Navigation";
import { v4 as uuidv4 } from "uuid";

const people = [
	{
		Firstname: "Agnès",
		Lastname: "Beaumatin",
		StartDate: "10/18/2021",
		Department: "Dev Web",
		BirthDate: "10/18/1973",
		Street: "38 rue Commandant Hautreux",
		City: "Bordeaux",
		State: "AZ",
		Zipcode: "33300",
	},
	// More people...
];

const EmployeeList = () => {
	return (
		<>
			<Navigation />
			<img className="mx-auto mt-8" src={logo} alt="logo" />
			<h1 className="text-center text-2xl sm:text-5xl sm:mt-8 sm:mb-16 text-green-700 font-bold">
				Current Employees
			</h1>
			<div className="px-4 sm:px-6 lg:px-8 ">
				<div className="sm:flex sm:items-center sm:mb-12 ">
					<div className="sm:flex sm:flex-col sm:w-1/4 mb-4">
						<h1 className="mt-4 text-xl font-semibold text-gray-900">
							Employees
						</h1>
						<p className="mt-2 text-sm text-gray-700">
							A list of all the HRnet employees !
						</p>
					</div>
					<div className="flex sm:w-1/4 sm:justify-center">
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
								type="text"
								name="firstname"
								id="firstname"
								className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
								placeholder="Search an employee"
							/>
						</div>
					</div>
				</div>
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle">
							<div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													Firstname
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													Lastname
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className="px-1  py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													Start Date
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													Department
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													Date of Birth
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													Street
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													City
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													State
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												<a
													href="#"
													className="text-xs sm:text-sm group inline-flex"
												>
													Zip Code
													<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
														<ChevronUpDownIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</span>
												</a>
											</th>
											<th
												scope="col"
												className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
											>
												<span className="sr-only">Edit</span>
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{people.map((person) => (
											<tr key={uuidv4()}>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
													{person.Firstname}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{person.Lastname}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{person.StartDate}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{person.Department}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{person.BirthDate}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{person.Street}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{person.City}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{person.State}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{person.Zipcode}
												</td>
												<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
													<a
														href="#"
														className="text-green-600 hover:text-green-900"
													>
														Edit<span className="sr-only">, {person.name}</span>
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="text-green-700 flex justify-between w-10/12 items-center mx-auto mt-8">
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
			</div>
		</>
	);
};

export default EmployeeList;
