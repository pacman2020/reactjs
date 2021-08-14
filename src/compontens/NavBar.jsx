import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';


const Menu = () =>{
    return (
      <>
        <nav className="navbar">
          <Link className="urls" to="/">Home</Link>
          <Link className="urls" to="about">About</Link>
        </nav>
      </>
    )
  };
  
  export default Menu;