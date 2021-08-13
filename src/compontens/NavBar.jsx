import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';


const Menu = () =>{
    return (
      <>
        <nav className="navbar">
            <ul className="">
                <li className="">
                <Link className="urls" to="/">Home</Link>
                </li>
                <li className="">
                <Link to="new/">New Task</Link>
                </li>
                <li className="">
                <Link to="about/">About</Link>
                </li>
            </ul>
        </nav>
      </>
    )
  };
  
  export default Menu;