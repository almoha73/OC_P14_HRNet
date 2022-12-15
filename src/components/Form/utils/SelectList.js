import React from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'


const SelectList = (props) => {
    const{options} = props
  return (
    <>
    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm">
													{options}

													<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
														<ChevronUpDownIcon
															className="h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
													</span>
												</Listbox.Button>
    </>
  )
}

export default SelectList