import { useEffect } from "react";
import { useWeakSet } from "../../../../packages/hooks-react-using/src";

type Item = {
  id: number;
  name: string;
};

const itemList: Item[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

function App() {
  const [_, { add, has, remove }] = useWeakSet<Item>();
  const handleItemClick = (item: Item) => {
    if (has(item)) {
      remove(item);
    } else {
      add(item);
    }
  };

  return (
    <div>
      <h2>Selected Items:</h2>
      <h2>Available Items:</h2>
      <ul>
        {itemList.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            style={{ fontWeight: has(item) ? "bold" : "normal" }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
