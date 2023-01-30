/**
@file Error component to display an error message.
@author Your name
@module Error
*/

import React from "react";

/**
Error component to display an error message and provide a link to go back to the homepage.
@function
@returns {JSX.Element} - Rendered error component.
*/
const Error = () => {
	return (
		<main className="flex flex-col justify-center items-center h-screen gap-12 bg-green-500">
			<div className="rounded-full w-80 h-80 border border-8 border-white flex flex-col justify-evenly">
				<div className="flex justify-between w-48 mx-auto">
					<div className="font-bold text-white text-6xl">x</div>
					<div className="font-bold text-white text-6xl">x</div>
				</div>
				<div className="w-36 h-4 bg-white mx-auto"></div>
			</div>
			<p className="text-white text-xl sm:text-2xl lg:text-5xl font-bold">
				Oops! Something went wrong!
			</p>
			<a
				href="/"
				className="border border-white border-2 rounded-lg p-4 text-white hover:bg-white hover:text-green-700 "
			>
				Back to homepage
			</a>
		</main>
	);
};

export default Error;
