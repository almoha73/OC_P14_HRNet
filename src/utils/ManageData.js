import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const timestampToDate = (seconds) => {
	return new Date(seconds * 1000);
};

export const getEmployee = async () => {
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
			const birth = timestampToDate(data.birthDate.seconds).toLocaleDateString(
				"fr"
			);
			const street = data.street;
			const city = data.city;
			const state = data.state.abbreviation;
			const zip = data.zip;
			const obj = [
				firstname,
				lastname,
				startdate,
				department,
				birth,
				street,
				city,
				state,
				zip,
			];
			array.push(obj);
		});
		console.log(array);
		return array;
	} catch (error) {
		console.log(error);
	}
};
