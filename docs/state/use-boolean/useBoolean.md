# useBoolean

useBoolean 管理一个布尔类型的状态值

### 基础用法

```tsx
import { useState } from "react";
import { useBoolean } from "hooks-react-using";

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

```

## API

```typescript
const [state, setTrue, setFalse] = useBoolean(
  defaultValue?: boolean,
);
```

## 参数


