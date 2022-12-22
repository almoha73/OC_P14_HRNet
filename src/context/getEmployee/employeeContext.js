import React, { createContext, useReducer } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { employeeReducer, INITIAL_STATE } from "./EmpoyeeReducer";

export const EmployeeContext = createContext();

export function EmployeeContextProvider({ children }) {
	const timestampToDate = (seconds) => {
		return new Date(seconds * 1000);
	};

	const getEmployee = () => {
		try {
			let array = [];
			getDocs(collection(db, "employees")).then((querySnapshot) =>
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					const firstname = data.firstname;
					const lastname = data.lastname;
					const startdate = timestampToDate(
						data.startDate.seconds
					).toLocaleDateString("fr");
					const department = data.department.name;
					const birth = timestampToDate(
						data.birthDate.seconds
					).toLocaleDateString("fr");
					const street = data.street;
					const city = data.city;
					const state = data.state.abbreviation;
					const zip = data.zip;
					const obj = [
						firstname.toLowerCase(),
						lastname.toLowerCase(),
						startdate,
						department.toLowerCase(),
						birth,
						street.toLowerCase(),
						city.toLowerCase(),
						state,
						zip,
					];
					array.push(obj);
					array.sort((a, b) => a[1].localeCompare(b[1]));
				})
			);
			return array;
		} catch (error) {
			console.log(error);
		}
	};

	const [tableState, dispatch] = useReducer(employeeReducer, {
		searchSort: "",
		toggleSort: ""
	});

	const value = {
		getEmployee,
		tableState,
		dispatch,
	};
	return (
		<EmployeeContext.Provider value={value}>
			{children}
		</EmployeeContext.Provider>
	);
}
