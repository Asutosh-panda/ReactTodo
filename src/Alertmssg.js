import React,{useState} from 'react'
import {Alert,Button} from "react-bootstrap"
import { Redirect } from 'react-router';

const Alertmssg=({mssg})=>{
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="warning" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>WARNING !!!</Alert.Heading>
          <h4>{mssg}</h4>
        </Alert>
      );
    }
    else{
    return (<Redirect to="/register" />)
  }
}

export default Alertmssg