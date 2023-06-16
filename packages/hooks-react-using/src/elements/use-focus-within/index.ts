import { useEffect, useRef, useCallback, useState } from 'react';
import { isFunction, isElement } from 'lodash-es';
type Target<T> = T | (() => T) | React.MutableRefObject<T>;
type UseFocusWithinOptions = {
  onFocus: (e: FocusEvent) => void;
  onBlur: (e: FocusEvent) => void;
  onChange: (isFocusWithin: boolean) => void;
};
export const useFocusWithin = <T extends Element>(
  target: Target<T | null>,
  options: UseFocusWithinOptions,
): boolean => {
  const { onFocus, onBlur, onChange } = options;
  const savedTarget = useRef<EventTarget | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleOnFocus = useCallback(
    (event: Event) => {
      console.log('进来');
      setIsFocused(true);
      onChange?.(true);
      onFocus?.(event as FocusEvent);
    },
    [onChange, onFocus],
  );

  const handleOnBlur = useCallback(
    (event: Event) => {
      setIsFocused(false);
      onChange?.(false);
      onBlur?.(event as FocusEvent);
    },
    [onChange, onBlur],
  );

  const clearEvent = useCallback(() => {
    if (savedTarget.current) {
      savedTarget.current?.removeEventListener('focusin', handleOnFocus);
      savedTarget.current?.removeEventListener('focusout', handleOnBlur);
    }
  }, []);

  useEffect(() => {
    let el: Element | null = null;
    if (target) {
      if (isFunction(target)) {
        el = target();
      } else if ('current' in target) {
        el = target.current;
      } else {
        el = target;
      }
    }
    if (el && isElement(el)) {
      savedTarget.current = el;
      savedTarget.current?.addEventListener('focusin', handleOnFocus);
      savedTarget.current?.addEventListener('focusout', handleOnBlur);
    }

    return () => {
      clearEvent();
    };
  }, [target]);

  return isFocused;
};

export default useFocusWithin;
