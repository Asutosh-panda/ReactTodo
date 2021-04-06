import React from "react";
import "./todo.css"
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { Button } from "@material-ui/core";
import axios from "axios"
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
            url: `http://127.0.0.1:8000/indexput/${value.id}`,
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
        todos=todos.filter(e=>e.id!=value.id)
        setTodos(todos)
        var token=localStorage.getItem("key")
        var data=''
        var config = {
            method: 'delete',
            url: `http://127.0.0.1:8000/indexdelete/${value.id}`,
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
    return <>
       <div className="Todobox" >
           <div className="taskcontainer">
               <div className= {`task${value.status ? "completed":""}`}>
                     {text}
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