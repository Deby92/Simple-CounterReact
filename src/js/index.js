//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
function SimpleCounter(props){
    return (<div classsName="big counter"></div>
        <div classsName="big counter"></div>
        <div classsName="big counter"></div>
        <div classsName="big counter"></div>
        <div classsName="big counter"></div>
        <div classsName="big counter"></div>
        <div classsName="big counter"></div>
        )
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
