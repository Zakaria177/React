import React from "react";

const Props_example = (props) => {
  return (
    <div>
      {/* passing object as props */}
      <ul>
        <li>Name : {props.item["Name"]}</li>
        <li>Age : {props.item["Age"]}</li>
        <li>Location : {props.item["location"]}</li>
      </ul>
      <button onClick={props.onbtnClick}>Submit</button>
    </div>
  );
};

export default Props_example;
