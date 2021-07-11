import React from 'react';
import {NavLink} from 'react-router-dom';
import One from "./One";


const Navbar = () =>
{
    return(
        <>
        <One/>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
    <li className="nav-item">
        <NavLink className="nav-link" to="/B">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/B">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/C">About</NavLink>
      </li>
    </ul>
  </div>
  </nav>
        </>
);
};

export default Navbar;
