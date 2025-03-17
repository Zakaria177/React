import React, { useState } from "react";

const UseStateHook = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Number : {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Count</button>
    </div>
  );
};

export default UseStateHook;
