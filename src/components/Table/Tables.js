import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd";
import columns from "../../utils/Columns";
import ManageDataEmployees from "../../utils/ManageDataEmployees";
import { getEmployees } from "../../utils/fetchEmployees";

const Tables = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const data = getEmployees();
		console.log(data);
		//setTimeOut pour que le management des datas ne commencent pas avant que la récupération des données soient faites
		setTimeout(() => {
			const d = data?.map((elt) => new ManageDataEmployees(elt));
			console.log(d);
			setEmployees(d);
		}, 400);
	}, []);

	console.log(employees);

	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return (
		<div>
			<Table
				dataSource={employees}
				columns={columns}
				onChange={onChange}
				rowKey={(employees) => employees.id}
				scroll={{ x: 1500, y: 500 }}
			/>
		</div>
	);
};

export default Tables;
