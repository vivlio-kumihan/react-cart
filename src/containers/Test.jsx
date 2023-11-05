import { useState } from "react";

const Test = () => {
  const [str, setStr] = useState("");
  const handleValChange = (newVal) => {
    setStr(newVal);
  };

  return (
    <>
      <Child 
        handleValChange={handleValChange}
      />  
      <h1>{str}</h1>
    </>
  );
};

const Child = (props) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    props.handleValChange(value);
  };
  return (
    <>
      <input 
      type="text"
      onChange={handleInputChange}
      />
    </>
  );
};

export default Test;