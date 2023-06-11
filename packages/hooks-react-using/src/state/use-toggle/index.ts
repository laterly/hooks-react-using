import { isFunction, isBoolean } from 'lodash-es';
import { useState, useMemo } from 'react';

type UseToggleState<T> = T | (() => T);

export interface UseToggleOptions<U, S> {
  true?: UseToggleState<U>;
  false?: UseToggleState<S>;
}

const useToggle = <U = true, S = false>(
  initialValue?: UseToggleState<boolean>,
  options?: UseToggleOptions<U, S>,
): [boolean | U | S, (value?: boolean) => void] => {
  const [value, setValue] = useState(() => {
    if (isFunction(initialValue)) {
      return initialValue();
    }
    return initialValue;
  });
  const { true: trueVal, false: falseVal } = options || {};

  function toggle(newValue?: boolean) {
    if (isBoolean(newValue)) {
      setValue(newValue);
    } else {
      setValue(value => !value);
    }
  }

  const latestTrueVal = useMemo(() => {
    if (isFunction(trueVal)) {
      return trueVal?.();
    }
    return trueVal;
  }, [trueVal]);

  const latestFalseVal = useMemo(() => {
    if (isFunction(falseVal)) {
      return falseVal?.();
    }
    return falseVal;
  }, [falseVal]);

  const latestValue = useMemo(() => {
    return isBoolean(value) && value ? latestTrueVal ?? true : latestFalseVal ?? false;
  }, [value, latestTrueVal, latestFalseVal]);

  return [latestValue, toggle];
};
export default useToggle;
