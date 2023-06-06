import { useState } from 'react';
import useWatchEffect from '../../effect/use-watch-effect';
const usePrevious = <T>(value: T) => {
  const [pre, setPre] = useState<T>();
  useWatchEffect(value, (_, oldValue) => {
    setPre(oldValue);
  });
  return pre;
};

export default usePrevious;
