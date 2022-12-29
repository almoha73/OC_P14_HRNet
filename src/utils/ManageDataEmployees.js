export default class ManageDataEmployees {
  constructor(data) {
    this.key = data.key;
    this.firstname = this.strUcFirst(data.employees.firstname);
    this.lastname = this.strUcFirst(data.employees.lastname);
    this.startdate = data.employees.startDate.seconds;
    this.department = data.employees.department.name;
    this.birthdate = data.employees.birthDate.seconds;
    this.street = this.strUcFirst(data.employees.street);
    this.city = this.strUcFirst(data.employees.city);
    this.state = data.employees.state.abbreviation;
    this.zip = data.employees.zip;
  }

  strUcFirst(a) {
    return (a + "").charAt(0).toUpperCase() + a.substr(1);
  }
}
