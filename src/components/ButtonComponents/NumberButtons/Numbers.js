import React from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // Small check to see if numbers is imported into Numbers.js

  // STEP 2 - add the imported data to state
  return (
    <div className="number-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map(number => (
        <NumberButton number={number} />
      ))}
    </div>
  );
};

export default Numbers;
