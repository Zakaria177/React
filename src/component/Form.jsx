import React from "react";

const Form = () => {
  const SubmitForm = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>
      <br />
      <form onSubmit={SubmitForm}>
        <input type="text" placeholder="Submit Form" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
