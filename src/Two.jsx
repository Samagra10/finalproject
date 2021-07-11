import React from 'react';
import {NavLink} from 'react-router-dom';

const Two = () =>
{
    return(
        <>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark" id="two">
  <NavLink className="navbar-brand" to="/A">DR.PROFILES</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/B">PROFESSIONALS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/C">GALLERIES</NavLink>
      </li>
    </ul>
  </div>
  </nav>
        </>
);
};

export default Two;
