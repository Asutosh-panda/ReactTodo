import React, { useEffect, useState } from "react";
import axios from 'axios';
import Formsubmit from "./Form"
import { Redirect } from "react-router-dom"
import Notevector from './Note'
import Loginvector from './Loginvector'
import './login.css'
import Loading from './Loading'

const Login=()=>{
    const [name,setName]=useState('');
    const [userid,setUserid]=useState('') ;
    const [password,setPassword]=useState('');
    const [token,setToken]=useState('')
    const [loading,setLoading]=useState(false);
    
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
    setLoading(true)
    axios.post("https://restbackendtodo.herokuapp.com/api/token/",{
        "username":name,
        "password":password,

    })
    .then(res=>{
   
        setToken(res.data.access)
        localStorage.setItem("key",res.data.access)
       setLoading(false)
       
    })
    .catch(err=>console.log(e))
   
  
  }

  if(loading)
  {
    return <Loading/>
  }

    if(token)
    {
    
      return <Redirect to="/formsubmit" />
      

    }

    return <div className="loginbox" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
     <form style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onSubmit={submitHandler}>
         <input type ="text" onChange={nameHandler} style={{margin:"2px"}} value={name} placeholder="name"></input>
         <input type ="password" onChange ={ passwordHandler} style={{margin:"2px"}} placeholder="password"></input>
         <button type="submit" style={{margin:"2px"}} >submit</button>
     </form>
   
     <Loginvector/>
    
 

     </div>

}


export default Login;