import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'
import { SpinnerDotted } from 'spinners-react';
const Loading =()=>{
    return <div className="loading">
  <SpinnerDotted size={90} thickness={101} speed={155} color="rgba(57, 133, 172, 1)" />
    </div>
}

export default Loading;