import { useRef, useState } from "react";
import { useScrollLock } from "../../../../packages/hooks-react-using/src";

function Modal() {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>();

  // 使用 useScrollLock 钩子来防止在打开模态框时页面滚动
  const { isLocked, toggleLock } = useScrollLock(modalRef);

  return (
    <>
      <button
        className="close-button"
        onClick={() => {
          setIsOpen(true);
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
