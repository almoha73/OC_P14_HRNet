/**
@file InputDate component
This component represents a date picker input with custom styles and calendar icon.
@param {Object} props - the component's props
@param {string} props.text - the placeholder text for the date picker input
@param {Date} props.value - the selected date for the date picker input
@param {function} props.fn - the onChange callback for the date picker input
@returns {React.Component} the InputDate component
*/

import React from "react";
import DatePicker from "react-datepicker";
import { CalendarIcon } from "@heroicons/react/20/solid";

const InputDate = (props) => {
	const { text, value, fn } = props;

	return (
		<>
			<DatePicker
				placeholderText={text}
				selected={value}
				onChange={fn}
				dateFormat="dd/MM/yyyy"
				peekNextMonth
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
				popperClassName="some-custom-class"
				popperPlacement="bottom-start"
				popperModifiers={[
					{
						name: "offset",
						options: {
							offset: [5, 10],
						},
					},
					{
						name: "preventOverflow",
						options: {
							rootBoundary: "viewport",
							tether: false,
							altAxis: true,
						},
					},
				]}
				className=" mt-1 w-full rounded border-gray-300 focus:border-green-500 focus:ring-green-500 placeholder:text-xs sm:placeholder:text-sm"
			/>
			<CalendarIcon className="w-5 relative left-[90%] bottom-8" />
		</>
	);
};

export default InputDate;
