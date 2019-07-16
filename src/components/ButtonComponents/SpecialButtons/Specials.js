//import React from "react";
//import { specials } from "/Users/cchik/lambdaSchool/lambda-calculator/src/data";
//import any components needed

//Import your array data to from the provided data file

import React, { useState } from "react";
import { specials as specialsArr } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = props => {
  // STEP 2 - add the imported data to state
  let [specials] = useState(specialsArr);

  return (
    <div className="specials-container">
      {specials.map((special, i) => {
        return (
          <SpecialButton
            key={i}
            value={special}
            onClickHandler={props.onClickHandler}
          />
        );
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
