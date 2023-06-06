import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash-es';
const useDeepCompareEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const refDeps = useRef<React.DependencyList>();
  const signalRef = useRef(false);
  if (!isEqual(deps, refDeps.current)) {
    refDeps.current = deps;
    signalRef.current = !signalRef.current;
  }
  useEffect(effect, [signalRef.current]);

};
export default useDeepCompareEffect;
