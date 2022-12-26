export default class ManageDataEmployees {
	constructor(data) {
		this.key = data.key;
		this.firstname = data.employees.firstname;
		this.lastname = data.employees.lastname;
		this.startdate = this.dateFormat(data.employees.startDate.seconds);
		this.department = data.employees.department.name;
		this.birthdate = this.dateFormat(data.employees.birthDate.seconds);
		this.street = data.employees.street;
		this.city = data.employees.city;
		this.state = data.employees.state.abbreviation;
		this.zip = data.employees.zip;
	}

	dateFormat(seconds) {
		return new Date(seconds * 1000).toLocaleDateString("fr");
	}
}

export class textData {
	constructor(key, text, employee) {
		this.key = key;
		this.text = this.removeNumberUndefined(text);
		this.employee = employee;
	}

	removeNumberUndefined(words) {
		return words
			.replace("undefined", " ")
			.replace(/[^a-zA-Zéèâëäê]/g, ", ")
			.toLowerCase();
	}
}
