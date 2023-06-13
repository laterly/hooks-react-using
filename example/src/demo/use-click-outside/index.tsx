import { useState, useRef } from "react";
import { useClickOutside } from "../../../../packages/hooks-react-using/src";

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  const ref = useRef<null>(null);

  useClickOutside(() => {
    close();
  }, ref);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isOpen && (
        <button ref={ref}>
          <p>Click outside to close.</p>
        </button>
      )}
    </div>
  );
}

function Example2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  useClickOutside(
    () => {
      close();
    },
    () => document.querySelector("#use-click-outside")
  );

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isOpen && (
        <button id="use-click-outside1">
          <p>Click outside to close.</p>
        </button>
      )}
    </div>
  );
}

function Example3() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  useClickOutside(() => {
    close();
  }, [
    document.querySelector("#use-click-outside2"),
    document.querySelector("#use-click-outside3"),
  ]);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <button id="use-click-outside3">click 不被关闭</button>
      {isOpen && (
        <button id="use-click-outside2">
          <p>Click outside to close.</p>
        </button>
      )}
    </div>
  );
}

function Example4() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  useClickOutside(
    () => {
      close();
    },
    [
      document.querySelector("#use-click-outside4"),
      document.querySelector("#use-click-outside5"),
    ],
    ["dblclick"]
  );

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <button id="use-click-outside4">click 不被关闭</button>
      {isOpen && (
        <button id="use-click-outside5">
          <p>Click outside to close.</p>
        </button>
      )}
    </div>
  );
}
const App = () => {
  return (
    <>
      <Example />
      <Example2 />
      <Example3 />
      <Example4 />
    </>
  );
};
export default App;
