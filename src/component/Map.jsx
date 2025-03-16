import React from "react";
const city = ["Dhaka", "chittagong", "rajshahi", "delli "];

const Map = () => {
  return (
    <>
      {/* looping throug in jsx  */}
      <ul>
        {city.map((item, i) => (
          <li key={i.toString()}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Map;
