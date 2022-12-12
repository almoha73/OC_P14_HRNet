import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { states } from "../utils/States";
import { department } from "../utils/Department";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const CreateEmployee = () => {
	const [selected, setSelected] = useState(states[0]);
	const [selectedDpt, setSelectedDpt] = useState(department[3]);

	return (
		<>
			<div className="title flex items-center justify-between  w-1/2 mx-auto mt-12 ">
				<img className="w-40" src={logo} alt="" />
				<h1 className="text-center text-7xl text-green-700">HRNet</h1>
				<Link
					to="/employee-list"
					className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
				>
					View Current Employees
				</Link>
			</div>
			<h2 className="text-center text-5xl text-green-700 mt-12">
				Create Employee
			</h2>

			<form className="w-3/5 sm:w-2/5 mx-auto mt-8">
				<div>
					<label
						htmlFor="firstname"
						className="block text-sm font-medium text-gray-700"
					>
						Firstname
					</label>

					<input
						type="text"
						name="firstname"
						id="firstname"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
						placeholder="Firstname"
					/>
				</div>
				<div className="mt-8">
					<label
						htmlFor="lastname"
						className="block text-sm font-medium text-gray-700"
					>
						Lastname
					</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
						placeholder="Lastname"
					/>
				</div>
				<div className="mt-8">
					<label
						htmlFor="birthDate"
						className="block text-sm font-medium text-gray-700"
					>
						Date of Birth
					</label>

					<input
						type="date"
						name="birthDate"
						id="birthDate"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
						placeholder="birthDate"
					/>
				</div>
				<div className="mt-8">
					<label
						htmlFor="startdate"
						className="block text-sm font-medium text-gray-700"
					>
						Start Date
					</label>

					<input
						type="date"
						name="startdate"
						id="startdate"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
						placeholder="startdate"
					/>
				</div>
				<div className="adress border mt-8 bg-green-200">
					<h1 className="text-green-600 text-center mt-8">Address</h1>
					<div className="mt-8 w-1/2 mx-auto">
						<label
							htmlFor="street"
							className="block text-sm font-medium text-gray-700"
						>
							Street
						</label>

						<input
							type="text"
							name="street"
							id="street"
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
							placeholder="street"
						/>
					</div>
					<div className="mt-8 w-1/2 mx-auto">
						<label
							htmlFor="city"
							className="block text-sm font-medium text-gray-700"
						>
							City
						</label>

						<input
							type="text"
							name="city"
							id="city"
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
							placeholder="city"
						/>
					</div>
					<Listbox value={selected} onChange={setSelected}>
						{({ open }) => (
							<div className="w-1/2 mx-auto">
								<Listbox.Label className="block text-sm font-medium text-gray-700 mt-8">
									State
								</Listbox.Label>
								<div className="relative mt-1">
									<Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm">
										{states && (
											<span className="block truncate">{selected.name}</span>
										)}

										<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
											<ChevronUpDownIcon
												className="h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</span>
									</Listbox.Button>

									<Transition
										show={open}
										as={Fragment}
										leave="transition ease-in duration-100"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
											{states.map((state) => (
												<Listbox.Option
													key={state.id}
													className={({ active }) =>
														classNames(
															active
																? "text-white bg-green-600"
																: "text-gray-900",
															"relative cursor-default select-none py-2 pl-8 pr-4"
														)
													}
													value={state}
												>
													{({ selected, active }) => (
														<>
															<span
																className={classNames(
																	selected ? "font-semibold" : "font-normal",
																	"block truncate"
																)}
															>
																{state.name}
															</span>

															{selected ? (
																<span
																	className={classNames(
																		active ? "text-white" : "text-green-600",
																		"absolute inset-y-0 left-0 flex items-center pl-1.5"
																	)}
																>
																	<CheckIcon
																		className="h-5 w-5"
																		aria-hidden="true"
																	/>
																</span>
															) : null}
														</>
													)}
												</Listbox.Option>
											))}
										</Listbox.Options>
									</Transition>
								</div>
							</div>
						)}
					</Listbox>
					<div className="mt-8 w-1/2 mx-auto mb-8">
						<label
							htmlFor="zip"
							className="block text-sm font-medium text-gray-700"
						>
							Zip Code
						</label>

						<input
							type="number"
							name="zip"
							id="zip"
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
							placeholder="zip"
						/>
					</div>
				</div>
				<Listbox value={selectedDpt} onChange={setSelectedDpt}>
					{({ open }) => (
						<div className="w-full mt-8">
							<Listbox.Label className="block text-sm font-medium text-gray-700">
								Department
							</Listbox.Label>
							<div className="relative mt-1">
								<Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm">
									{department && (
										<span className="block truncate">{selectedDpt.name}</span>
									)}

									<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
										<ChevronUpDownIcon
											className="h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
									</span>
								</Listbox.Button>

								<Transition
									show={open}
									as={Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
										{department.map((elt) => (
											<Listbox.Option
												key={elt.id}
												className={({ active }) =>
													classNames(
														active
															? "text-white bg-green-600"
															: "text-gray-900",
														"relative cursor-default select-none py-2 pl-3 pr-9"
													)
												}
												value={elt}
											>
												{({ selectedDpt, active }) => (
													<>
														<span
															className={classNames(
																selectedDpt ? "font-semibold" : "font-normal",
																"block truncate"
															)}
														>
															{elt.name}
														</span>

														{selectedDpt ? (
															<span
																className={classNames(
																	active ? "text-white" : "text-green-600",
																	"absolute inset-y-0 right-0 flex items-center pr-4"
																)}
															>
																<CheckIcon
																	className="h-5 w-5"
																	aria-hidden="true"
																/>
															</span>
														) : null}
													</>
												)}
											</Listbox.Option>
										))}
									</Listbox.Options>
								</Transition>
							</div>
						</div>
					)}
				</Listbox>
				<div className="w-full flex justify-center mt-8 mb-8">
					<button
						type="button"
						className="inline-flex items-center rounded-md border border-transparent bg-green-100 px-6 py-3 text-base font-medium text-green-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Save
					</button>
				</div>
			</form>
		</>
	);
};

export default CreateEmployee;
