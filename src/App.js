import React from "react";
import Formsubmit from "./Form"
import "./App.css";
import {Switch,Route} from 'react-router-dom';
import Nav from "./Nav"
import Login from "./login"
import Register from "./Register"
import Loginvector from "./Loginvector"
 import Todostart from "./Todostart"
import Alertmssg from "./Alertmssg";
const App=()=>{
  return <>
  <Nav/>
  <div className="Appcontainer">
   <h1 id="heading" > NANI's TODO App </h1>
   <hr style={{color:"aqua"}}></hr>
 
   <Switch>
     <Route path ="/login"><Login/></Route>
   <Route  path="/formsubmit" ><Formsubmit/></Route>
   <Route path="/register" ><Register/></Route>
   <Route path ="/" ><Todostart/></Route>
   <Route path="/vector"><Alertmssg/></Route>
   </Switch>
  </div>
  </>
}

export default App;