import React, { useState } from "react";

import ObjectUseStateHook from "../Hooks/ObjectUseStateHook";
import ManagingNumberUseStateHook from "../Hooks/ManagingNumberUseStateHook";
import TodoApp from "../Hooks/TodoAppUsesStateHook";
import FormUseStateHook from "../Hooks/FormUseStateHook";

const UseStateHook = () => {
  return (
    <>
      <ManagingNumberUseStateHook />
      <ObjectUseStateHook />
      <TodoApp />
      <FormUseStateHook />
    </>
  );
};

export default UseStateHook;
