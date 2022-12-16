import React from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const SelectOptions = (props) => {
	const { option } = props;

	return (
		<>
			{option.map((elt) => (
				<Listbox.Option
					key={elt.id}
					className={({ active }) =>
						classNames(
							active ? "text-white bg-green-600" : "text-gray-900",
							"relative cursor-default select-none py-2 pl-3 pr-9"
						)
					}
					value={elt}
				>
					{({ selectedDpt, active }) => (
						<>
							<span
								className={classNames(
									selectedDpt ? "font-semibold" : "font-normal",
									"block truncate"
								)}
							>
								{elt.name}
							</span>

							{selectedDpt ? (
								<span
									className={classNames(
										active ? "text-white" : "text-green-600",
										"absolute inset-y-0 right-0 flex items-center pr-4"
									)}
								>
									<CheckIcon className="h-5 w-5" aria-hidden="true" />
								</span>
							) : null}
						</>
					)}
				</Listbox.Option>
			))}
		</>
	);
};

export default SelectOptions;
