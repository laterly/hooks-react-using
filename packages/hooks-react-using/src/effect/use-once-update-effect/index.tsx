import { useRef } from 'react';
import useUpdateEffect from '../use-update-effect';
const useOnceUpdateEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const isFirstMounted = useRef(true);
  useUpdateEffect(() => {
    if (!isFirstMounted.current) {
      return;
    }
    isFirstMounted.current = false;
    effect();
  }, deps);
};

export default useOnceUpdateEffect;
