const columns = [
	{
		key: "firstname",
		title: "Firstname",
		dataIndex: "firstname",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => a.firstname.localeCompare(b.firstname),
	},
	{
		key: "lastname",
		title: "Lastname",
		dataIndex: "lastname",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => a.lastname.localeCompare(b.lastname),
	},
	{
		key: "stardate",
		title: "Start Date",
		dataIndex: "startdate",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => new Date(a.startdate) - new Date(b.startdate),
		render: ((date) => dateFormat(date)) 
	},
	{
		key: "department",
		title: "Department",
		dataIndex: "department",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => a.department.localeCompare(b.department),

	},
	{
		key: "birthdate",
		title: "Date of Birth",
		dataIndex: "birthdate",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => new Date(a.birthdate) - new Date(b.birthdate),
		render: ((date) => dateFormat(date)) 
	},
	{
		key: "street",
		title: "Street",
		dataIndex: "street",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => a.street.localeCompare(b.street),
	},
	{
		key: "city",
		title: "City",
		dataIndex: "city",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => a.city.localeCompare(b.city),
	},
	{
		key: "state",
		title: "State",
		dataIndex: "state",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => a.state < b.state,
	},
	{
		key: "zip",
		title: "Zip Code",
		dataIndex: "zip",
		defaultSortOrder: "descend",
		sortDirections: ["descend", "ascend"],
		sorter: (a, b) => a.zip - b.zip,
	},
];

function dateFormat(seconds) {
    return new Date(seconds * 1000).toLocaleDateString("fr");
  }

export default columns;


