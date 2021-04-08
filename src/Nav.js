import React from 'react';
import {NavLink} from 'react-router-dom'
import "./Nav.css"

const Nav = ()=>{
    return <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4 pd-4" style={{textDecoration:"none"}} >
              <NavLink to ="/login" id="home">Login</NavLink>
              </li>
              <li className="nav-item mx-4 pd-4">
                <NavLink to ="/formsubmit" id ="home">TODO</NavLink>
              </li>
              <li className="nav-item mx-4 pd-4">
                <NavLink to ="/register" id ="home">Resgister</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
}

export default Nav;
