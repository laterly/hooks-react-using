import { useEffect, useRef } from 'react';
import { isEqual } from 'lodash-es';
const useDeepCompareEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const refDeps = useRef<React.DependencyList>();
  if (!isEqual(deps, refDeps.current)) {
    refDeps.current = deps;
  }
  useEffect(effect, refDeps.current);

};
export default useDeepCompareEffect;
