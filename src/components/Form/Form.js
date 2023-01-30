/**
@file Form component for employee information
@author almoha
@module Form
*/

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import InputDate from "./utils/InputDate";
import { states } from "../../utils/States";
import { department } from "../../utils/Department";
import Modal from "modalagnes73";
import InputList from "./utils/InputList";

/**
Renders a form to collect employee information and submits to Firebase Firestore.
Displays a modal component upon successful submission.
@returns {JSX.Element} Form component
*/
const Form = () => {
  /** 
React Hook for form management
@type {Object}
*/
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /**
State hook to manage modal component open/close
@type {Boolean}
*/
  const [isOpen, setIsOpen] = useState(false);

  /**
State hook to manage selected state value
@type {String}
*/
  const [selected, setSelected] = useState(states[0]);

  /**
State hook to manage selected department value
@type {String}
*/
  const [selectedDpt, setSelectedDpt] = useState(department[0]);

  /**
Handles form submission
Adds employee data to Firebase Firestore
Resets form, closes modal, and resets selected state and department values
@param {Object} data - Employee form data
*/
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const docRef = await addDoc(collection(db, "employees"), data);
      console.log("Document written with ID: ", docRef.id);
      window.scrollTo(0, 0);
      setIsOpen(true);
      reset();
      setSelected(states[0]);
      setSelectedDpt(department[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} overlayColor="green-500" />}
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
            {...register("firstname", { required: true })}
            type="text"
            name="firstname"
            id="firstname"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Firstname"
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
        </div>
        <div className="mt-8">
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            Lastname
          </label>
          <input
            {...register("lastname", { required: true })}
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
        <div className="adress border mt-8 bg-green-200 mb-8">
          <h1 className="text-green-600 text-center mt-8">Address</h1>
          <div className="mt-8 w-11/12 sm:w-1/2 mx-auto">
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-700"
            >
              Street
            </label>

            <input
              {...register("street", { required: true })}
              type="text"
              name="street"
              id="street"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              placeholder="street"
            />
          </div>
          <div className="mt-8 w-11/12 sm:w-1/2 mx-auto mb-8">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>

            <input
              {...register("city", { required: true })}
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
            defaultValue={states[0]}
            render={({ field: { onChange } }) => (
              <InputList
                array={states}
                value={selected}
                onChange={(e) => {
                  onChange(e);
                  setSelected(e);
                }}
              />
            )}
          ></Controller>
          <div className="mt-8 w-11/12 sm:w-1/2 mx-auto mb-8">
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>

            <input
              {...register("zip", { required: true })}
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
          defaultValue={department[0]}
          render={({ field: { onChange } }) => (
            <InputList
              array={department}
              value={selectedDpt}
              onChange={(e) => {
                onChange(e);
                setSelectedDpt(e);
              }}
            />
          )}
        ></Controller>
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
};

export default Form;
