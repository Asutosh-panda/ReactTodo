import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css'
import Loader from "react-loader-spinner";
const Loading =()=>{
   console.log("laoding from ..")
    return <div className="loadingpage">
      <div className="loading">
<Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
</div>
 </div>
}

export default Loading;