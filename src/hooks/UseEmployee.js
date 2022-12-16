import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const UseEmployee = () => {
	const [employeeData, setEmployeeData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {}, []);

	return {
		employeeData,
		isLoading,
		error,
	};
};

export default UseEmployee;
