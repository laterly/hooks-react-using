import { useRef } from "react";
import { useScroll } from "../../../../packages/hooks-react-using/src";

export default function Demo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollState = useScroll(scrollRef);

  return (
    <div
      ref={scrollRef}
      style={{
        height: "200px",
        width: "300px",
        overflow: "auto",
      }}
    >
      <div>
        <div
          style={{
            height: "300px",
            width: "400px",
          }}
        >   
        </div>
        <div>滚动位置：{scrollState.x}, {scrollState.y}</div>
        <div>是否正在滚动：{scrollState.isScrolling ? "是" : "否"}</div>
        <div>是否到达左边：{scrollState.arrivedState.left ? "是" : "否"}</div>
        <div>是否到达右边：{scrollState.arrivedState.right ? "是" : "否"}</div>
        <div>是否到达顶部：{scrollState.arrivedState.top ? "是" : "否"}</div>
        <div>是否到达底部：{scrollState.arrivedState.bottom ? "是" : "否"}</div>
        {scrollState.directions.left && <div>向左滚动</div>}
        {scrollState.directions.right && <div>向右滚动</div>}
        {scrollState.directions.top && <div>向上滚动</div>}
        {scrollState.directions.bottom && <div>向下滚动</div>}
      </div>
    </div>
  );
}
