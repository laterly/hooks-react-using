```tsx
//导入模块
import React, { useState } from 'react';
import { Button } from 'antd';
import useWatch from '@/hooks/useWatch';

const Example: React.FC = () => {
  const [prev, setPrev] = useState(0);
  const [count, setCount] = useState(0);
  const stop = useWatch(count, (curVal, oldVal) => {
    console.log('旧值oldVal: ', oldVal);
    console.log('新值curVal: ', curVal);
    setPrev(oldVal!);
  });
  const add = () => setCount(prevCount => prevCount + 1);
  return (
    <div>
      {' '}
      <p> 当前的count是{count}</p> <p> 前一次的count是{prev}</p> {count} <Button
        onClick={add}
        className="btn"
      >
        +
      </Button> <Button onClick={stop} className="btn">
        中止观察
      </Button>{' '}
    </div>
  );
};
export default Example;
```
