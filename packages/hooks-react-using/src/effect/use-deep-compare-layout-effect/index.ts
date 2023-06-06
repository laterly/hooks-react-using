import { useLayoutEffect } from 'react';
import { useDeepCompare } from '../use-deep-compare-effect';
const useDeepCompareLayoutEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  useLayoutEffect(effect, useDeepCompare(deps));
};
export default useDeepCompareLayoutEffect;
