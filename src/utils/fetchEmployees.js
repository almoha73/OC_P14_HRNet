import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getEmployees = () => {
	try {
		let dataEmployees = [];
		getDocs(collection(db, "employees")).then((querySnapshot) =>
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				const key = doc.id;
				//console.log(data);
				const newData = { key: key, employees: data };
				dataEmployees.push(newData);

				//console.log(dataEmployees);
			})
		);

		return dataEmployees;
	} catch (error) {
		console.log(error);
	}
};
