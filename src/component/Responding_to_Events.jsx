import React from "react";

const AlertMsg = () => {
  alert("Hello");
};

const Responding_to_Events = () => {
  return (
    <div>
      <p> Responding_to_Events Example </p>
      <button
        onClick={() => {
          alert("Hello");
        }}
      >
        Submit
      </button>
      <br />
      {/* handle click event using function */}
      <button onClick={AlertMsg}>Submit</button>
    </div>
  );
};

export default Responding_to_Events;
