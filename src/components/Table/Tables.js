/**
 * @fileoverview This file implements a Table component using antd library in React.
 * @module Tables
 */
import React from "react";
import { Table } from "antd";
import "antd/dist/antd";
import columns from "../../utils/Columns";

/**
 * A functional component that renders a table with data passed as a prop.
 * @param {Object} props - The properties for the component.
 * @param {Array} props.data - An array of objects that represents the data for the table.
 */
const Tables = ({ data }) => {
  return (
    <>
      <Table
        dataSource={data}
        columns={columns}    
        rowKey={(data) => data.key}
        scroll={{ x: "max-content", y: "500" }}
        pagination={{
          style: {
            width: "100%",
            marginBottom: "50px",
            backgroundColor: "#BBF7D0",
            borderRadius: "8px",
            padding: "10px",
            paddingLeft: "20px",
          },
          defaultPageSize: 10,
          pageSizeOptions: ["10", "25", "50", "100"],

          defaultCurrent: 1,
          showSizeChanger: true,
          position: ["topLeft"],
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
        }}
      />
    </>
  );
};

export default Tables;
