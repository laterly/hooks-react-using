import { useState } from 'react';
import { Options } from '../../effect/use-throttle-fn';
import useThrottleEffect from '../../effect/use-throttle-effect';

function useThrottle<T>(initialState: T, options?: Options) {
  const { wait = 1000, ...restOptions } = options || {};
  const [throttleState, setThrottleState] = useState<T>();
  useThrottleEffect(
    () => {
      setThrottleState(initialState);
    },
    [initialState],
    {
      wait,
      ...restOptions,
    },
  );
  return throttleState;
}

export default useThrottle;
