/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { v4 as uuidv4 } from "uuid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { columnName } from "./ColumnName";

const people = [
	"Agnès",
	"Beaumatin",
	"10/18/2021",
	"Dev Web",
	"10/18/1973",
	"38 rue Commandant Hautreux",
	"Bordeaux",
	"AZ",
	"33300",
];

const Table = () => {
	useEffect(() => {
		const getEmployee = async () => {
			const querySnapshot = await getDocs(collection(db, "employees"));
			let array = [];
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				const data = doc.data();
				array.push(data);
				console.log(array);
			});
		};
		const timestamp = 529110000;
		const timestamp2 = new Date(timestamp * 1000);
		console.log(timestamp2.toLocaleDateString("fr"));
		getEmployee();
	}, []);
	return (
		<div>
			<table className=" divide-y divide-green-300">
				<thead className="bg-green-50">
					<tr>
						{columnName.map((elt) => (
							<th
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
					<tr key={uuidv4()}>
						{people.map((elt) => (
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-900 sm:pl-6 lg:pl-8">
								{elt}
							</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
