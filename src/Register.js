import  React from 'react';
import {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Loading from './Loading';
import Registervector from './Registervector';
import {Alert} from "react-bootstrap"
import Alertmssg from './Alertmssg';


const Register =()=>{
    const [name,setName]=useState('');
    const [move,setMove]=useState(false) ;
    const [password1,setPassword1]=useState('');
    const [password2,setPassword2]=useState('');
    const [alerting,setAlerting]=useState(false)
    const [loading,setLoading] = useState(false)
    const [mmsg,setMssg]=useState("")
    
    function nameHandler(e){
        setName(e.target.value)
      }
      function passwordHandler1(e){
        setPassword1(e.target.value)
      }
      function passwordHandler2(e){
        setPassword2(e.target.value)
      }


    function submitHandler(e)
    {
      setLoading(true)
    e.preventDefault()
    axios.post("https://restbackendtodo.herokuapp.com/registerpage",{
        "username":name,
        "password1":password1,
        "password2":password2,

    })
    .then(res=>{
      let d= res.data
      console.log(d)
      if (Object.keys(d).length==0)
      {
          console.log("redirecting")
          setLoading(false)
          setMove(true) 
        }
      else{
        if(res.data.username)
             setMssg(res.data.username[0])
        if(res.data.password1)
             setMssg(res.data.password1[0])
        if(res.data.password2)
             setMssg(res.data.password2[0])
        setLoading(false)
        setMove(false)
        setAlerting(true)
        
      } 
       
      
        
    })
    .catch(err=>console.log(e))
   
  
  }
  if(loading){
    return <Loading/>
 
  }

  if(move)
  {
    return <Redirect to="/login"/>
  }

else{
    return <>
    {alerting? <Alertmssg mssg={mmsg}/>:console.log("no")}
    <div className="loginbox" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
     <form style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onSubmit={submitHandler}>
         <input type ="text" onChange={nameHandler} style={{margin:"2px"}} value={name} placeholder="enter the name"></input>
        
         <input type ="password" onChange ={ passwordHandler1} style={{margin:"2px"}} placeholder="enter the password"></input>
         <input type ="password" onChange ={ passwordHandler2} style={{margin:"2px"}} placeholder="enter the password again"></input>
         <button type="submit" style={{margin:"2px"}} >submit</button>
     </form>
     <Registervector/>
     </div>
     </>

}
}
export default Register;