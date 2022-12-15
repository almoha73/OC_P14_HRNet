import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../../assets/logo.jpg";
import Navigation from "../../components/Navigation";
import Modal from "../../components/Modal";
import Form from "../../components/Form/Form"


const CreateEmployee = () => {
  
  const [modal, setModal] = useState(false);

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

        <Form />

      </>
    );
  }
};

export default CreateEmployee;
