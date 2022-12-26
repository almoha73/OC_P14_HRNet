import React from "react";
import { Table } from "antd";
import "antd/dist/antd";
import columns from "../../utils/Columns";

const Tables = ({ data }) => {
	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return (
		<div>
			<Table
				dataSource={data}
				columns={columns}
				onChange={onChange}
				rowKey={(data) => data.key}
				scroll={{ x: 1500, y: 500 }}
			/>
		</div>
	);
};

export default Tables;
