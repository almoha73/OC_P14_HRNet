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

// const timestampToDate = (seconds) => {
// 	return new Date(seconds * 1000);
// };

// export const getEmployee = async () => {
// 	try {
// 		const querySnapshot = await getDocs(collection(db, "employees"));
// 		let array = [];
// 		querySnapshot.forEach((doc) => {
// 			const data = doc.data();
// 			const firstname = data.firstname;
// 			const lastname = data.lastname;
// 			const startdate = timestampToDate(
// 				data.startDate.seconds
// 			).toLocaleDateString("fr");
// 			const department = data.department.name;
// 			const birth = timestampToDate(data.birthDate.seconds).toLocaleDateString(
// 				"fr"
// 			);
// 			const street = data.street;
// 			const city = data.city;
// 			const state = data.state.abbreviation;
// 			const zip = data.zip;
// 			const obj = [
// 				firstname,
// 				lastname,
// 				startdate,
// 				department,
// 				birth,
// 				street,
// 				city,
// 				state,
// 				zip,
// 			];
// 			array.push(obj);
// 		});
// 		console.log(array);
// 		return array;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const handleChange = (val) => {
// 	let data = [];
// 	if (val.length > 2) {
// 		const filterData = employees?.map((employee) => {
// 			return employee.filter((elt) => {
// 				if (elt?.includes(val?.toLowerCase())) {
// 					console.log(employee);
// 					data.push(employee);
// 					setEmployees([...new Set(data)]);
// 				}
// 				return employees;
// 			});
// 		});
// 		console.log(filterData);
// 	} else {
// 		setEmployees(getEmployee());
// 	}
// };
