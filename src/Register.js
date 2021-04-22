import  React from 'react';
import {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Loading from './Loading';
import Registervector from './Registervector';


const Register =()=>{
    const [name,setName]=useState('');
    const [userid,setUserid]=useState('') ;
    const [password1,setPassword1]=useState('');
    const [password2,setPassword2]=useState('');
    const [token,setToken]=useState(false)
    const [loading,setLoading] = useState(false)

    let flag = false
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
      setLoading(false)
        if(res.data==="error")
           console.log('invalid form')
        else
          setToken(true)
        
    })
    .catch(err=>console.log(e))
   
  
  }
  if(loading){
    return <Loading/>
 
  }
 if(token)
 {
     console.log("flag =",token)
     return <Redirect to="/login"/>
 }
else{
    return <div className="loginbox" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
     <form style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onSubmit={submitHandler}>
         <input type ="text" onChange={nameHandler} style={{margin:"2px"}} value={name} placeholder="enter the name"></input>
         <input type ="password" onChange ={ passwordHandler1} style={{margin:"2px"}} placeholder="enter the password"></input>
         <input type ="password" onChange ={ passwordHandler2} style={{margin:"2px"}} placeholder="enter the password again"></input>
         <button type="submit" style={{margin:"2px"}} >submit</button>
     </form>
     <Registervector/>
     </div>

}
}
export default Register;