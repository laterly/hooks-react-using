import { useArray } from "../../../../packages/hooks-react-using/dist";

function MyComponent() {
  const [array, { push, pop, unshift, shift, splice, concat, reverse, sort }] =
    useArray<Array<string | number>>([1, 2, 3]);

  return (
    <div>
      <div>当前数组:</div>
      <div>
        {array?.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <button onClick={() => push(Date.now())}>push（往最后面添加元素）</button>
      <br />
      <button
        onClick={() => {
          pop();
        }}
      >
        pop（删除最后一个元素）
      </button>
      <br />
      <button
        onClick={() => {
          unshift(Date.now());
        }}
      >
        unshift（最前面添加元素）
      </button>
      <br />
      <button
        onClick={() => {
          shift(Date.now());
        }}
      >
        unshift（最前面删除元素）
      </button>
      <br />
      <button
        onClick={() => {
          splice(2, 3);
        }}
      >
        splice（修改数组的内容，添加或删除元素）
      </button>
      <br />
      <button
        onClick={() => {
          concat([1, 2, 3]);
        }}
      >
        concat（合并数组）
      </button>
      <button
        onClick={() => {
          reverse();
        }}
      >
        reverse（反转数组）
      </button>
      <button
        onClick={() => {
          sort();
        }}
      >
        sort（排序）
      </button>
    </div>
  );
}
export default MyComponent;
