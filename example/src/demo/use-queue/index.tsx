import { useQueue } from "../../../../packages/hooks-react-using/src";

function App() {
  const { queue, enqueue, dequeue, peek, size, isEmpty, first, last } = useQueue([
    "apple",
    "banana",
  ]);

  return (
    <div>
      <h1>Queue Example</h1>

      <p>Queue: {JSON.stringify(queue)}</p>

      <button onClick={() => enqueue(Date.now()?.toString())}>Enqueue</button>
      <button onClick={dequeue}>Dequeue</button>
      <button onClick={() => console.log(peek())}>Peek</button>

      <p>Size: {size}</p>
      <p>Is Empty? {JSON.stringify(isEmpty)}</p>
      <p>First: {JSON.stringify(first)}</p>
      <p>Last: {JSON.stringify(last)}</p>
    </div>
  );
}
export default App;