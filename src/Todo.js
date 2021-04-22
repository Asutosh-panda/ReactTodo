import React from "react";
import "./todo.css"
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { Button } from "@material-ui/core";
import axios from "axios"
import Note from './Note'
const Todo=({setTodos,todos,text,id,setStatus,value})=>{


    const completeClick=()=>{
      
     const newtodo= (todos.map(element=>{
        if(element.id===value.id)
            return{...element,status:!element.status}
        else return element
        
        }))
        setTodos(newtodo)
        var token= localStorage.getItem("key")
        var data = {
            "title": text,
            "status": !value.status,
            "date": "2021-02-07"
          };
          console.log("value id =",value.id)
          var config = {
            method: 'patch',
            url: `https://restbackendtodo.herokuapp.com/indexput/${value.id}`,
            headers: { 
              'Authorization': `Bearer ${token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    

        
     
    

    
    }
    const deleteClick=()=>{
        let dd=todos.filter(e=>e.id==value.id)
        console.log("deleted is -> ",dd)
        let d=document.getElementById(`${value.id}`)
        let d1=document.getElementsByClassName(`${value.id}`)[0].style.opacity=0
        d.classList.add("animate")
       
      
        setTimeout(()=>{
           d.classList.remove("animate")
           let d1=document.getElementsByClassName(`${value.id}`)[0].style.opacity=1
        },2300)
        setTimeout(()=>{
          todos=todos.filter(e=>e.id!=value.id)
          setTodos(todos)
          var token=localStorage.getItem("key")
          var data=''
          var config = {
              method: 'delete',
              url: `https://restbackendtodo.herokuapp.com/indexdelete/${value.id}`,
              headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
           
        },2300)
      

    }
    return <>
       <div className="Todobox" >
           <div className="taskcontainer">
               <div className= 'task'>
               <Note value={value}/>
                     </div>

                     <div className="icons">
                        <Button  onClick={completeClick} >
                     <PlaylistAddCheckIcon  style={{color:"gray",padding:"0px 0px"}}/></Button>
                     <Button  onClick={deleteClick}><DeleteForeverTwoToneIcon style={{color:"red",padding:"0px 0px"}}/></Button>
                     
                    
                     </div>
               </div>
       </div>
    </>
}

export default Todo;