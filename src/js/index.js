//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
/* import  "FaClock" from "react-icons/fa"; */
import "./icons.js"
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { checkPropTypes } from "prop-types";

function SimpleCounter(props){
    return (<div classsName="big counter">
        <div classsName="calendar">
            <FontAwesomeIcon icon="fa-regular fa-clock" />
        </div>
        <div classsName="four">{props.fourthNumber % 10}</div>
        <div classsName="three">{props.thirdNumber % 10}</div>
        <div classsName="two">{props.secondNumber % 10}</div>
        <div classsName="one">{props.firstNumber % 10}</div>
    </div>
        );
}
SimpleCounter.setProptypes = {
    fourthNumber: checkPropTypes.array,
    thirdNumber: checkPropTypes.bool,
    secondthNumber: checkPropTypes.bool,
    firstNumber: checkPropTypes.bool,
}

let counter = 0;
setInterval(function (){
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)
    console.log (four, three, two, one);
    counter++;
    ReactDOM.render(
        <SimpleCounter firstNumber={one} secondNumber={two} thirdNumber={three} fourthNumber={four}/>, 
        document.querySelector("#app")
    );

},1000);
  

