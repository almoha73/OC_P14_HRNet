import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import logo from "../../assets/logo.jpg";
import Navigation from "../../components/Navigation";
import { states } from "../../utils/States";
import { department } from "../../utils/Department";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Modal from "../../components/Modal";
import InputDate from "../../components/Form/utils/InputDate";
import SelectList from "../../components/Form/utils/SelectList";
import SelectOptions from "../../components/Form/utils/SelectOptions";



const CreateEmployee = () => {
  const [selected, setSelected] = useState(states[0]);
  const [selectedDpt, setSelectedDpt] = useState(department[0]);
  const { control, register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const docRef = await addDoc(collection(db, "employees"), data);
      console.log("Document written with ID: ", docRef.id);
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  };

  if (modal) {
    return <Modal />;
  } else {
    return (
      <>
        <Navigation />

        <div className="title sm:flex flex flex-col items-center justify-center  w-full mx-auto mt-12 ">
          <img className="w-40" src={logo} alt="" />
          <h1 className="text-center text-7xl text-green-700">HRNet</h1>
        </div>
        <h2 className="text-center text-2xl sm:text-5xl text-green-700 mt-12">
          Create Employee
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 sm:w-2/5 mx-auto mt-8"
        >
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              Firstname
            </label>

            <input
              {...register("firstname")}
              type="text"
              name="firstname"
              id="firstname"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              placeholder="Firstname"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Lastname
            </label>
            <input
              {...register("lastname")}
              type="text"
              name="lastname"
              id="lastname"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              placeholder="Lastname"
            />
          </div>
          <div className="mt-8">
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <>
                  <InputDate
                    text="Select the date of birth"
                    value={field.value}
                    fn={(date) => field.onChange(date)}
                  />
                </>
              )}
            />
          </div>
          <div className="mt-8 ">
            <label
              htmlFor="startdate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>

            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <>
                  <InputDate
                    text="Select the start date"
                    value={field.value}
                    fn={(date) => field.onChange(date)}
                  />
                </>
              )}
            />
          </div>
          <div className="adress border mt-8 bg-green-200">
            <h1 className="text-green-600 text-center mt-8">Address</h1>
            <div className="mt-8 w-11/12 sm:w-1/2 mx-auto">
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Street
              </label>

              <input
                {...register("street")}
                type="text"
                name="street"
                id="street"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                placeholder="street"
              />
            </div>
            <div className="mt-8 w-11/12 sm:w-1/2 mx-auto">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>

              <input
                {...register("city")}
                type="text"
                name="city"
                id="city"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                placeholder="city"
              />
            </div>
            <Controller
              name="state"
              control={control}
              defaultValue={selected.name}
              render={({ field: { onChange } }) => (
                <Listbox
                  value={selected.name}
                  onChange={(e) => {
                    onChange(e);
                    setSelected(e);
                  }}
                >
                  {({ open }) => (
                    <div className="w-11/12 sm:w-1/2 mx-auto">
                      <Listbox.Label className="block text-sm font-medium text-gray-700 mt-8">
                        State
                      </Listbox.Label>
                      <div className="relative mt-1">
                        <SelectList
                          options={
                            <>
                              {states && (
                                <span className="block truncate">
                                  {selected.name}
                                </span>
                              )}
                            </>
                          }
                        />

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {states.map((elt) => (
                              <SelectOptions elt={elt}/>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </div>
                  )}
                </Listbox>
              )}
            />
            <div className="mt-8 w-11/12 sm:w-1/2 mx-auto mb-8">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>

              <input
                {...register("zip")}
                type="number"
                name="zip"
                id="zip"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                placeholder="zip"
              />
            </div>
          </div>
          <Controller
            name="department"
            control={control}
            defaultValue={selectedDpt.name}
            render={({ field: { onChange } }) => (
              <Listbox
                value={selectedDpt}
                onChange={(e) => {
                  onChange(e);
                  setSelectedDpt(e);
                }}
              >
                {({ open }) => (
                  <div className="w-full mt-8">
                    <Listbox.Label className="block text-sm font-medium text-gray-700">
                      Department
                    </Listbox.Label>
                    <div className="relative mt-1">
                      <SelectList
                        options={
                          <>
                            {department && (
                              <span className="block truncate">
                                {selectedDpt.name}
                              </span>
                            )}
                          </>
                        }
                      />

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {department.map((elt) => (
                            <SelectOptions elt={elt}/>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </div>
                )}
              </Listbox>
            )}
          />
          <div className="w-full flex justify-center mt-8 mb-8">
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-green-700 px-6 py-3 text-base font-medium text-green-200 hover:bg-green-200 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </>
    );
  }
};

export default CreateEmployee;
