import React from "react";
import NavBar from '../../compontens/NavBar';
import '../style.css';

const FormTask = () =>{

  return (
    <>
      <div className="container" >
      <NavBar></NavBar>
        <h3>New Tasks</h3>
        <form >
          <label>title: </label>
          <input type="text" value="title" />
          <input className="btn" type="submit" value="criar" />
        </form>
      </div>
    </>
  )
};

export default FormTask;