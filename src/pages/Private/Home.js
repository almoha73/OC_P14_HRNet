import React from "react";

import mike from "../../assets/mike-von-2hzL3NMOozs-unsplash2.jpg";
import Navigation from "../../components/Navigation";

const Home = () => {
	return (
		<>
			<div className="w-full h-screen flex flex-col justify-start gap-12 items-center">
				<Navigation />
				<main className="w-11/12 lg:h-[500px] flex-1 gap-4 sm:flex lg:flex-row  flex flex-col  sm:justify-center items-center sm:border sm:border-green-700 sm:rounded-lg ">
					<div className="mx-auto  sm:pt-16 sm:pb-20 text-center lg:py-48 lg:text-left">
						<div className="px-4 sm:px-8 lg:w-11/12 xl:pr-16">
							<h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
								<span className="block xl:inline">
									HRNet the app that manage
								</span>{" "}
								<span className="block text-green-600 xl:inline">
									your employees
								</span>
							</h1>
							<p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
								Join us in creating your employee list
							</p>
							<div className="mt-10 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<a
										href="/private/create-employee"
										className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg"
									>
										Create
									</a>
								</div>
								<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
									<a
										href="/private/employee-list"
										className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-green-600 hover:bg-green-200 md:py-4 md:px-10 md:text-lg"
									>
										View
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className=" h-64 w-full sm:h-72 md:h-96  lg:h-full lg:w-1/2">
						<img className=" h-full w-full object-cover" src={mike} alt="" />
					</div>
				</main>
				<div className="h-12 w-full bg-white"></div>
			</div>
		</>
	);
};

export default Home;
