import React, { useRef } from "react";
import Responding_to_Events from "./Responding_to_Events";

const UserefHook = () => {
  let newMsg = useRef();
  let placeHolderImg = useRef();

  const ChangeImageState = () => {
    placeHolderImg.current.src = "https://placehold.co/800@3x.png";
    placeHolderImg.current.setAttribute("height", "150px");
    placeHolderImg.current.setAttribute("width", "300px");
  };

  const Change = () => {
    newMsg.current.innerHTML = "<p> THis a useRef() hook example </p>";
  };

  let fName = useRef();
  let lName = useRef();

  const PickNameValue = () => {
    let firstName = fName.current.value;
    let lastName = lName.current.value;

    alert("First Name: " + firstName + "Last Name :" + lastName);
  };

  let myHeadline = useRef();
  const ChangeClassAttribute = () => {
    myHeadline.current.classList.remove("text-success");
    myHeadline.current.classList.add("text-danger");
  };

  //working with immutable data
  let number = useRef(0);
  const Increment = () => {
    number.current++;
    console.log(number.current);
  };

  //   caching Api data using useRef()
  let ApiData = useRef();
  let myPtag = useRef();

  const FetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    ApiData.current = await response.json();
  };

  const ShowData = () => {
    myPtag.current.innerText = JSON.stringify(ApiData.current);
  };

  return (
    <>
      <div ref={newMsg}>Useref() Hook </div>
      {/* <div ref={(div) => (newMsg = div)}>Useref() Hook </div> if we dont want to use the current property then we have to write this way  */}
      <button onClick={Change}>Details</button>
      <br />
      <img
        ref={placeHolderImg}
        src="https://placehold.co/600x400"
        alt="placeholder_img"
      />
      <button onClick={ChangeImageState}>Change</button>
      <br />

      <input ref={fName} type="text" placeholder="First Name" />
      <input ref={lName} type="text" placeholder="Last Name" />

      <button onClick={PickNameValue}>Get Value</button>
      <br />

      <h1 className="text-success " ref={myHeadline}>
        This is a Headline
      </h1>
      <button onClick={ChangeClassAttribute}>Change</button>
      <br />
      <button onClick={Increment}>Increment Counter</button>
      <br />
      <br />
      <p ref={myPtag}></p>
      <button onClick={FetchData}> Call API</button>
      <button onClick={ShowData}> Show Data</button>
    </>
  );
};

export default UserefHook;
