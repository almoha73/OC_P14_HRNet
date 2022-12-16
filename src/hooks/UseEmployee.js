import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const UseEmployee = () => {
	const [employeeData, setEmployeeData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getEmployee = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "employees"));
				let array = [];
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					const data = doc.data();
					array.push(data);
					setEmployeeData(array);
					setIsLoading(false);
				});
			} catch (error) {
				setError(error);
			}
		};
		const timestamp = 529110000;
		const timestamp2 = new Date(timestamp * 1000);
		console.log(timestamp2.toLocaleDateString("fr"));
		getEmployee();
	}, []);

	return {
		employeeData,
		isLoading,
		error,
	};
};

export default UseEmployee;
