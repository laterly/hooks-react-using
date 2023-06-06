import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash-es';
export const useDeepCompare = (
  deps?: React.DependencyList,
): React.DependencyList => {
  const refDeps = useRef<React.DependencyList>();
  const signalRef = useRef(false);
  if (!isEqual(deps, refDeps.current)) {
    refDeps.current = deps;
    signalRef.current = !signalRef.current;
  }

  return [signalRef.current];
};
const useDeepCompareEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  useEffect(effect, useDeepCompare(deps));
};
export default useDeepCompareEffect;
