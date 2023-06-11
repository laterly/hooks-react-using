import { useToggle } from "../../../../packages/hooks-react-using/src";

function Example() {
  const [value, toggle] = useToggle(false);

  return (
    <div>
      <p>Value: {value ? "On" : "Off"}</p>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
}

function Example2() {
  const [value, toggle] = useToggle(true, {
    true: "Yes",
    false: "No",
  });

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
}

function Example3() {
  const [value, toggle] = useToggle("off");

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => toggle("on")}>Turn On</button>
      <button onClick={() => toggle("off")}>Turn Off</button>
    </div>
  );
}

function Example4() {
  const [value, toggle] = useToggle(true, {
    true: "Yes",
    false: "No",
  });

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => toggle(false)}>No</button>
      <button onClick={() => toggle(true)}>Yes</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Example />
      <Example2 />
      <Example3 />
      <Example4 />
    </>
  );
}

export default App;
