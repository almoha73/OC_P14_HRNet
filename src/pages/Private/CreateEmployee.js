/**
@file CreateEmployee component for HRNet
@author almoha
@copyright 2023 almoha
@description This component renders the create employee form and header section with logo and title.
@requires react, "react-datepicker/dist/react-datepicker.css", logo, Navigation, Form
@exports CreateEmployee
*/

import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../../assets/logo.jpg";
import Navigation from "../../components/Navigation";
import Form from "../../components/Form/Form";

/**
CreateEmployee Component
@function
@returns {JSX} Render of Create Employee form and header
*/
const CreateEmployee = () => {
	
	return (
		<>
			<Navigation />

			<div className="title sm:flex flex flex-col items-center justify-center  w-full mx-auto mt-12 ">
				<img className="w-40" src={logo} alt="" />
				<h1 className="text-center text-7xl text-green-700">HRNet</h1>
			</div>
			<h2 className="text-center text-2xl sm:text-5xl text-green-700 mt-12">
				Create Employee
			</h2>

			<Form />
		</>
	);
};


export default CreateEmployee;
