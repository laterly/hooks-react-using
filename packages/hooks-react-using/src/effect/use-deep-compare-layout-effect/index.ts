import { useLayoutEffect, useRef } from 'react';
import { isEqual } from 'lodash-es';
const useDeepCompareLayoutEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const refDeps = useRef<React.DependencyList>();
  if (!isEqual(deps, refDeps.current)) {
    refDeps.current = deps;
  }
  useLayoutEffect(effect, refDeps.current);

};
export default useDeepCompareLayoutEffect;
