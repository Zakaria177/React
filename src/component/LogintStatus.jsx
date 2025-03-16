import React from "react";

const LoginStatusBtn = (status) => {
  if (status) {
    return <button>Logout Button</button>;
  } else {
    return <button>Login Button</button>;
  }
};

const LogintStatus = () => {
  return <>{LoginStatusBtn(true)}</>;
};

export default LogintStatus;
