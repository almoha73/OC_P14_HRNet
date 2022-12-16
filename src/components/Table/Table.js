/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { v4 as uuidv4 } from "uuid";
import { columnName } from "./ColumnName";
import { getEmployee } from "../../utils/ManageData";

const Table = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const employees = async () => {
			const d = await getEmployee();
			setData(d);
		};
		employees();
	}, []);
	const employees = data;

	return (
		<div>
			<table className=" divide-y divide-green-300">
				<thead className="bg-green-50">
					<tr>
						{columnName.map((elt) => (
							<th
								key={uuidv4()}
								scope="col"
								className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
							>
								<a
									href="#"
									className="min-w-[120px] text-xs sm:text-sm group inline-flex"
								>
									{elt}
									<span className=" ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
										<ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
									</span>
								</a>
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 bg-white">
					{employees.map((el) => (
						<tr key={uuidv4()}>
							{el.map((elt) => (
								<td
									key={uuidv4()}
									className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-900 sm:pl-6 lg:pl-8"
								>
									{elt}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
