import React, { useState } from "react";

const MyComponent = () => {
  const [state, setState] = useState({
    count: 0,
    message: "",
  });

  const stateProxy = new Proxy(state, {
    set: (target, key, value) => {
      console.log(`Setting ${key} to ${value}`);
      target[key] = value;
      setState({ ...state, [key]: value });
      return true;
    }
  });

  const handleCountClick = () => {
    stateProxy.count += 1;
  };

  const handleMessageChange = (event) => {
    stateProxy.message = event.target.value;
  };

  return (
    <div>
      <h1>My Component</h1>
      <p>Count: {stateProxy.count}</p>
      <button onClick={handleCountClick}>Increment Count</button>
      <p>Message: {stateProxy.message}</p>
      <input type="text" onChange={handleMessageChange} />
    </div>
  );
};

export default MyComponent;