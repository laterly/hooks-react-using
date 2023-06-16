# useScrollLock

useScrollLock 可以用来禁止页面滚动

### 基础用法

```tsx
import { useRef, useState } from "react";
import { useScrollLock } from "hooks-react-using";

function Modal() {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>();

  // 使用 useScrollLock 钩子来防止在打开模态框时页面滚动
  const { isLocked, toggleLock } = useScrollLock(modalRef, false);

  return (
    <>
      <button
        className="close-button"
        onClick={() => {
          setIsOpen((val) => !val);
        }}
      >
        Open Modal
      </button>
      {isOpen && (
        <div
          className="modal"
          ref={modalRef}
          style={{
            height: 300,
            overflow: "auto",
          }}
        >
          <div
            className="modal-content"
            style={{
              height: 600,
            }}
          >
            <p>Modal content goes here.</p>
            <p>Modal content goes here.</p>
            <p>Modal content goes here.</p>
            <p>Modal content goes here.</p>
            <p>Modal content goes here.</p>
            <p>Modal content goes here.</p>
            <p>Modal content goes here.</p>
            <p>Modal content goes here.</p>
            <p>Modal content goes here.</p>
          </div>
        </div>
      )}

      <div>{isLocked ? "锁住了" : "没锁"}</div>
      <button
        onClick={() => {
          toggleLock();
        }}
      >
        切换锁的状态
      </button>
    </>
  );
}
export default Modal;

```

## API

```typescript

const { isLocked, toggleLock } = useScrollLock(target, false)

```

## 参数类型

```typescript
type Target<T> = T | (() => T) | React.MutableRefObject<T> | Window | Document;
type UseScrollLockReturn = {
  isLocked: boolean;
  toggleLock: (isLocked?: boolean) => void;
};

function useScrollLock<T extends Element>(
  target?: Target<T | null>,
  initialState?: boolean, //默认是false,就是不锁住滚动，如果传true则锁住滚动
): UseScrollLockReturn
```