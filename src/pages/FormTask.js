import React, { useState, useEffect } from "react";
import NavBar from '../compontens/NavBar';
import './style.css';

const FormTask = () =>{

  return (
    <>
      <div className="container" >
      <NavBar></NavBar>
        <h3>New Tasks</h3>
      </div>
    </>
  )
};

export default FormTask;