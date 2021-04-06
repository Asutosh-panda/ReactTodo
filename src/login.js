import React, { useEffect, useState } from "react";
import axios from 'axios';
import Formsubmit from "./Form"
import { Redirect } from "react-router-dom"

const Login=()=>{
    const [name,setName]=useState('');
    const [userid,setUserid]=useState('') ;
    const [password,setPassword]=useState('');
    const [token,setToken]=useState('')
    
    let flag = false
    function nameHandler(e){
        setName(e.target.value)
      }
      function passwordHandler(e){
        setPassword(e.target.value)
      }


    function submitHandler(e)
    {
    e.preventDefault()
    axios.post("http://127.0.0.1:8000/api/token/",{
        "username":name,
        "password":password,

    })
    .then(res=>{
   
        setToken(res.data.access)
        localStorage.setItem("key",res.data.access)
    })
    .catch(err=>console.log(e))
   
  
  }

    if(token)
    {
    
      return <Redirect to="/formsubmit" />
      

    }

    return <div className="loginbox" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
     <form style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onSubmit={submitHandler}>
         <input type ="text" onChange={nameHandler} style={{margin:"2px"}} value={name} placeholder="enter the name"></input>
         <input type ="password" onChange ={ passwordHandler} style={{margin:"2px"}} placeholder="enter the password"></input>
         <button type="submit" style={{margin:"2px"}} >submit</button>
     </form>
     </div>

}


export default Login;