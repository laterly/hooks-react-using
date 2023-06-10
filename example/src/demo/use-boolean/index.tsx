import { useState } from "react";
import { useBoolean } from "../../../../packages/hooks-react-using/src";

export default function Example() {
  const [text, setText] = useState("");
  const [isOpenModal, setOpenModal, setCloseModal] = useBoolean();

  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleSubmit() {
    setCloseModal();
  }

  return (
    <div>
      <button onClick={setOpenModal}>Open Modal</button>
      {isOpenModal ? (
        <div>
          <input type="text" value={text} onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={setCloseModal}>Close Modal</button>
        </div>
      ) : null}
    </div>
  );
}
