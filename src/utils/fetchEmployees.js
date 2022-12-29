import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getEmployees = async () => {
	try {
		return await getDocs(collection(db, "employees"));
	} catch (error) {
		console.log(error);
	}
};
