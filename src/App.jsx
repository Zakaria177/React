import Form from "./component/Form";
import Immediately_Invoke_Function from "./component/Immediately-Invoke-Function";
import LogintStatus from "./component/LogintStatus";
import Map from "./component/Map";
import Props_example from "./component/Props_example";
import Responding_to_Events from "./component/Responding_to_Events";
import Shorthand_if_else from "./component/Shorthand_if_else";
import UseEffectHook from "./component/UseEffectHook";
import UserefHook from "./component/UserefHook";
import UseStateHook from "./component/UseStateHook";

const App = () => {
  const studentInfo = {
    Name: "zakaria",
    Age: 25,
    location: "Dhaka ",
  };

  const BtnClick = () => {
    alert("say Hello");
  };

  return (
    <>
      {/* <Immediately_Invoke_Function /> */}
      {/* <Map /> looping throug in jsx  */}
      {/* <LogintStatus /> // conditional rendering with if else  */}
      {/* <Shorthand_if_else /> */}
      {/* // conditional rendering with shorthand if else  */}
      {/* <Props_example item={studentInfo} onbtnClick={BtnClick} /> */}
      {/* <Responding_to_Events /> */}
      {/* <Form /> */}
      {/* react Hook Section */}
      {/* <UserefHook /> */}
      {/* <UseStateHook /> */}
      <UseEffectHook />
    </>
  );
};

export default App;
