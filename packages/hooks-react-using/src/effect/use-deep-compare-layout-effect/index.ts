import { useLayoutEffect, useRef } from 'react';
import { isEqual } from 'lodash-es';
const useDeepCompareLayoutEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const refDeps = useRef<React.DependencyList>();
  const signalRef = useRef(false);
  if (!isEqual(deps, refDeps.current)) {
    refDeps.current = deps;
    signalRef.current = !signalRef.current;
  }
  useLayoutEffect(effect, [signalRef.current]);
};
export default useDeepCompareLayoutEffect;
