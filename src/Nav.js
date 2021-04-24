import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import "./Nav.css"



const Nav = ()=>{
  const [open,setOpen] = useState(false)
  const clickhh=()=>{
      setOpen(!open)
      console.log(open)
      if(open)
      {
        document.getElementById("navbarSupportedContent").style.display="flex"
         document.getElementById("ham").classList.add("change")
      }
      else{
        document.getElementById("navbarSupportedContent").style.display="none"
        document.getElementById("ham").classList.remove("change")
             
  }
}
  return <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4 mb-3 pd-4" style={{textDecoration:"none"}} >
              <NavLink to ="/login" id="home">Login</NavLink>
              </li>
              <li className="nav-item mx-4 mb-3 pd-4">
                <NavLink to ="/formsubmit" id ="home">TODO</NavLink>
              </li>
              <li className="nav-item mx-4 mb-3 pd-4">
                <NavLink to ="/register" id ="home">Register</NavLink>
              </li>
            </ul>
            
          </div>
          <div className="ham" id="ham"  onClick={clickhh}>
         <div className="lines" id="line1"></div>
         <div className="lines" id="line2"></div>
         <div className="lines" id="line3"></div>
       </div>
        </div>
     
      
      </nav>

      </>
}

export default Nav;
