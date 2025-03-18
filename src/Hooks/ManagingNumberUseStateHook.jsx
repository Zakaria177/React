import React from "react";
import { useState } from "react";

const ManagingNumberUseStateHook = () => {
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>Number : {number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>Count</button> */}
      <button onClick={changeNumber}>Count</button>
    </div>
  );
};

export default ManagingNumberUseStateHook;
