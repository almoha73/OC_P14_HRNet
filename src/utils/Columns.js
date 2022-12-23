const columns = [
	{
		key: "firstname",
		title: "Firstname",
		dataIndex: "firstname",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.firstname.localeCompare(b.firstname),
	},
	{
		key: "lastname",
		title: "Lastname",
		dataIndex: "lastname",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.lastname.localeCompare(b.lastname),
	},
	{
		key: "stardate",
		title: "Start Date",
		dataIndex: "startdate",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.startdate - b.startdate,
	},
	{
		key: "department",
		title: "Department",
		dataIndex: "department",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.department.localeCompare(b.department),
	},
	{
		key: "department",
		title: "Date of Birth",
		dataIndex: "Date of birth",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.birthdate - b.birthdate,
	},
	{
		key: "street",
		title: "Street",
		dataIndex: "street",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.street.localeCompare(b.street),
	},
	{
		key: "city",
		title: "City",
		dataIndex: "city",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.city.localeCompare(b.city),
	},
	{
		key: "state",
		title: "State",
		dataIndex: "state",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.state.localeCompare(b.state),
	},
	{
		key: "zip",
		title: "Zip Code",
		dataIndex: "zip",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.zip - b.zip,
	},
];

export default columns;
