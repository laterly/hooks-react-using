import React, { useState } from "react";
import { useThrottleEffect } from "../../../../packages/hooks-react-using/src";
const UseThrottleEffectDemo: React.FC = () => {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState<string[]>([]);

  useThrottleEffect(
    () => {
      setRecord([...record, search]);
    },
    [search],
    {
      wait: 3000,
    }
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
        <div>
          {record?.map((item, index) => {
            return <div key={index + "id"}>{item}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default UseThrottleEffectDemo;
