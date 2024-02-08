
import React from "react";

const ExponentFive = (props) => {
  


  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}⁵</p>
      <p className="exponent-result">
        {props.count} * {props.count} * {props.count} * {props.count} * {props.count} ={" "}
        <span className="total">{props.calculateExponent(props.count, 5)}</span>
      </p>
    </div>
  );
};

export default ExponentFive;



/*import React from "react";


const ExponentFive = (props) => {
  const calculateExponent = (props.count, 5) => {
    return Math.pow(props.count, 5);
  };




  const result = calculateExponent(props.count, 5);

  return ( 
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁵</p>
    <p className="exponent-result"> {props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">  </span></p>
  </div>
)
 


export default ExponentFive; */
