import React, { useState } from "react";

const FormUseStateHook = () => {
  let [FormObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const InputOnChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(FormObj));
  };

  return (
    <div className="container">
      <br />
      <form onSubmit={FormSubmit}>
        <input
          onChange={(event) => {
            InputOnChange("fName", event.target.value);
          }}
          value={FormObj.fName}
          placeholder="First Name"
        />{" "}
        <br />
        <input
          onChange={(event) => {
            InputOnChange("lName", event.target.value);
          }}
          value={FormObj.lName}
          placeholder="Last Name"
        />{" "}
        <br />
        <select
          onChange={(event) => {
            InputOnChange("city", event.target.value);
          }}
          value={FormObj.city}
        >
          <option value=""> Choose City </option>
          <option value="Dhaka">Dhaka</option>'
          <option value="Rajshahi">Rajshahi</option>
        </select>
        <br />
        <input
          onChange={(event) => {
            InputOnChange("gender", "Male");
          }}
          checked={FormObj.gender === "Male"}
          type="radio"
          name="Gender"
        />
        Male
        <input
          onChange={(event) => {
            InputOnChange("gender", "Female");
          }}
          checked={FormObj.gender === "Female"}
          type="radio"
          name="Gender"
        />
        Female
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default FormUseStateHook;
