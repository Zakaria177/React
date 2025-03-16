import React from "react";

let marks = 85;
const Immediately_Invoke_Function = () => {
  return (
    <>
      {
        (() => {
          if (marks > 80 && marks < 100) {
            return <h1>A+</h1>;
          } else if (marks > 70 && marks < 80) {
            return <h1>A-</h1>;
          } else {
            return <h1>F</h1>;
          }
        })() // Immediately Invoked Function Expression (IIFE)
      }
    </>
  );
};

export default Immediately_Invoke_Function;
