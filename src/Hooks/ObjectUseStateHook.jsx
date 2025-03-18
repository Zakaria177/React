import React, { useState } from "react";

const ObjectUseStateHook = () => {
  const [myObj, setMyObj] = useState({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
  });

  const ChangeObj = () => {
    setMyObj((prevObj) => ({
      ...prevObj,
      key1: "New Value for Key 1 ",
      key2: "New Value for Key 2 ",
    }));
  };

  return (
    <>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>
      <button onClick={ChangeObj}>Change</button>
    </>
  );
};

export default ObjectUseStateHook;
