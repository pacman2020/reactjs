import React from "react";
import '../style.css';

const FormTask = () =>{

  return (
    <>
        <form >
          <input type="text" name="title"  placeholder="title task"  />
          <input className="btn" value="criar" type="submit"/>
        </form>
    </>
  )
};

export default FormTask;