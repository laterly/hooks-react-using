import { useEffect, useState } from 'react';
import { Options } from '../use-throttle-fn';
import useThrottleFn from '../use-throttle-fn';
import useUpdateEffect from '../use-update-effect';

const useThrottleEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
  options?: Options,
) => {
  const [runflag, setRunFlag] = useState({});

  const { run } = useThrottleFn(() => {
    setRunFlag({});
  }, options);

  useEffect(() => {
    return run();
  }, deps);

  useUpdateEffect(effect, [runflag]);
};

export default useThrottleEffect;
