import { useEffect, useRef, useCallback } from 'react';
import { isFunction, isElement } from 'lodash-es';
type Target<T> = T | (() => T) | React.MutableRefObject<T>;

interface UseLongPressOptions {
  delay?: number;
  onClick?: (event: PointerEvent) => void;
}

export const useLongPress = <T extends Element>(
  handler: (evt: PointerEvent) => void,
  target: Target<T | null>,
  options: UseLongPressOptions = {},
): void => {
  const { delay = 500, onClick } = options;
  const timeoutRef = useRef<NodeJS.Timeout>();
  const savedTarget = useRef<EventTarget | null>(null);

  const handlePointerDown = useCallback((event: Event) => {
    timeoutRef.current = setTimeout(() => {
      handler(event as PointerEvent);
    }, delay);
  }, []);

  const handlePointerUp = useCallback(
    (event: Event) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        if (onClick) {
          onClick?.(event as PointerEvent);
        }
      }
    },
    [onClick],
  );

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const clearEvent = useCallback(() => {
    if (savedTarget.current) {
      savedTarget.current?.removeEventListener(
        'pointerdown',
        handlePointerDown,
      );
      savedTarget.current?.removeEventListener('pointerup', handlePointerUp);
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
      savedTarget.current?.addEventListener('pointerdown', handlePointerDown);
      savedTarget.current?.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      clearEvent();
      clearTimer();
    };
  }, [handler, target, delay]);
};

export default useLongPress;
