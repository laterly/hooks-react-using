import { useState, useCallback } from 'react';
import useLatest from '../use-latest';
import { isFunction,isEqual,cloneDeep } from 'lodash-es';

function useStableState<T = undefined>(
  initialValue?: T,
): [T | undefined, (value: T) => void] {
  const [state, setState] = useState<T | undefined>(initialValue);
  const lastestRef = useLatest(state);

  const stableSetState = useCallback((value: T) => {
    if (isFunction(value)) {
      const newState = value(cloneDeep(lastestRef.current));.
      if (isEqual(newState, lastestRef.current)) {
        return;
      }
      setState(newState);
    } else {
      if (isEqual(value, lastestRef.current)) {
        return;
      }
      setState(value);
    }
  }, []);

  return [state, stableSetState];
}

export default useStableState;
