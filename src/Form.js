import React,{useEffect, useState} from "react"
import "./formsubmit.css"
import Button from '@material-ui/core/Button';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import Todo from "./Todo"
import axios from "axios"
import { Redirect } from "react-router";




const Formsubmit =()=>{
   
  const [user,setUser]=useState(1) 
  const [input,setInput]=useState("")
  const [todos,setTodos]=useState([])
  const [id,setId]=useState(0)
  const [staus,setStatus]=useState(false)
  useEffect(()=>{
    
  
    var data=''
    var token= localStorage.getItem("key")
    var config = {
      method: 'get',
      url: 'https://restbackendtodo.herokuapp.com/index',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(res=> {
    console.log(res.data)
    setTodos(res.data)
    })
    .catch(function (error) {
      console.log(error);
    });

    var data=''
    var config = {
      method: 'get',
      url: 'https://restbackendtodo.herokuapp.com/current_user/',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(res=> {
     setUser(res.data)
     console.log("user=",user)
    })
    .catch(function (error) {
      console.log(error);
    });

    
  
 

},[])
 
 



    function inputHandler(e){
      setInput(e.target.value)
    }
    function submitHandler(e){
            e.preventDefault()
            if(input!==""){
              var token= localStorage.getItem("key")
            
              var data = {
                "title": input,
                "status": staus,
                "date": "2021-02-07",
                "user": user
              };
              
              var config = {
                method: 'post',
                url: 'https://restbackendtodo.herokuapp.com/indexpost',
                headers: { 
                  'Authorization': `Bearer ${token}`, 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(res=>{})
              .catch(function (error) {
                console.log(error);
              });
              
              

              var token= localStorage.getItem("key")
              var config = {
                method: 'get',
                url: 'https://restbackendtodo.herokuapp.com/index',
                headers: { 
                  'Authorization': `Bearer ${token}`, 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(res=> {
              console.log(res.data)
              setTodos(res.data)
              })
              .catch(function (error) {
                console.log(error);
              })};
            
            setInput("")
        
    }


    return(<>
    <div className="Formcontainer">
      <form action="/" method="post" onSubmit={submitHandler} >
      <input onChange={inputHandler}  placeholder="enter your task" value={input}></input>
      <Button type="submit" className="button" >
      <AddCircleTwoToneIcon/>
      </Button>
      
      </form>
    
     
    </div>
    
    <div className="todocontainer">
    {todos.map((value,index)=>(
      
      <Todo key={index} setTodos={setTodos} todos ={todos} text={value.title} id={value.id} setStatus={setStatus} value={value}/>
    ))}
    </div>
   
  
 
   </> )
}

export default Formsubmit;



