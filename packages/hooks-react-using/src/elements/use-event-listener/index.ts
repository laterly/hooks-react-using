import { useEffect, useRef, useCallback } from 'react';
import { isFunction, isElement, isEqual } from 'lodash-es';

type Target<T> = T | (() => T) | React.MutableRefObject<T> | Window | Document;

type Options = {
  target?: Target<Element | null>;
  capture?: boolean;
  passive?: boolean;
};

const useEventListener = (
  type: string,
  listener: EventListener,
  options?: Options,
): (() => void) => {
  const savedListener = useRef<EventListener>();
  const savedOptions = useRef<Options>();
  const savedTarget = useRef<EventTarget | null>(null);

  const eventListener = useCallback((event: Event) => {
    return savedListener.current?.(event);
  }, []);

  useEffect(() => {
    if (!savedTarget.current) {
      let el;
      if (options?.target) {
        if (isFunction(options?.target)) {
          el = options?.target();
        } else if ('current' in options.target) {
          el = options?.target.current;
        } else {
          el = options?.target;
        }
      }
      if (el && isElement(el)) {
        savedTarget.current = el;
      } else {
        savedTarget.current = window;
      }
    }
    if (
      !isEqual(savedListener.current, listener) ||
      !isEqual(savedOptions.current, options)
    ) {
      const { capture = false, passive = false } = options || {};

      savedTarget.current?.addEventListener(type, eventListener, {
        capture,
        passive,
      });

      savedListener.current = listener;
      savedOptions.current = options;

      return () => {
        savedTarget.current?.removeEventListener(type, eventListener);
      };
    }
  }, [type, listener, options]);

  return () => {
    savedTarget.current?.removeEventListener(type, eventListener);
  };
};

export default useEventListener;
