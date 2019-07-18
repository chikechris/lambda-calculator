import React from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  // Checking if specials can be imported into Specials.js
  // console.log(specials); //specials data was imported successfully.

  return (
    <div className="special-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specials.map(special => (
        <SpecialButton special={special} />
      ))}
    </div>
  );
};

export default Specials;
