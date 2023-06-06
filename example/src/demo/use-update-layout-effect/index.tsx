import React, { useState, useEffect } from "react";
import { useUpdateLayoutEffect } from "../../../../packages/hooks-react-using/src";
const UseUpdateEffectDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData(["1", "2", "3"]);
    }, 1000);
  }, []);

  useUpdateLayoutEffect(() => {
    setIsLoading(false);
  }, [data]);

  return <div>{isLoading ? <p>Loading...</p> : <p>Loaded!</p>}</div>;
};
export default UseUpdateEffectDemo;
