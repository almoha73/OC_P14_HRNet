import React, { createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const EmployeeContext = createContext();

export function EmployeeContextProvider({ children }) {
	const timestampToDate = (seconds) => {
		return new Date(seconds * 1000);
	};

	const getEmployee = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, "employees"));
			let array = [];
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
				console.log(array);
			});
			console.log(array);

			return array;
		} catch (error) {
			console.log(error);
		}
	};

	const value = {
		getEmployee,
	};
	return (
		<EmployeeContext.Provider value={value}>
			{children}
		</EmployeeContext.Provider>
	);
}
