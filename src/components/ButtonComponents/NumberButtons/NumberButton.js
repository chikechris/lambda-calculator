import React from "react";

const NumberButton = ({ number }) => {
  // small check to see if number is sent through props.
  // console.log(number);
  return (
    <button className="number-button" id={number}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};

export default NumberButton;
