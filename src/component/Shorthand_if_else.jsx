import React from "react";
let marks = 75;

let status = true;

const Shorthand_if_else = () => {
  return (
    <>
      {marks >= 80 && marks <= 100 ? (
        <h1>A+</h1>
      ) : marks >= 70 && marks < 80 ? (
        <h1>A-</h1>
      ) : (
        <h1>Grade not determined</h1>
      )}

      {status ? (
        <h1>
          <button>Logout btn</button>
        </h1>
      ) : (
        <h1> Login btn</h1>
      )}
    </>
  );
};

export default Shorthand_if_else;
