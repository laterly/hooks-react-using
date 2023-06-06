import { useEffect } from 'react';
import { debounce } from 'lodash-es';
import { Options } from '../use-debounce-fn';

const useDebounceEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList,
  options?: Options,
) => {
  const { wait = 1000, ...restOptions } = options || {};
  useEffect(() => {
    const debouncedFn = debounce(effect, wait, {
      ...restOptions,
    });
    debouncedFn();
    return () => {
      debouncedFn.cancel?.();
    };
  }, deps);
};

export default useDebounceEffect;
