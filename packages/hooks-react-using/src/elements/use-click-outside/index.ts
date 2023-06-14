import { useEffect, useCallback } from 'react';
import { isFunction, isElement } from 'lodash-es';

type Target<T> = T | (() => T) | React.MutableRefObject<T>;

const useClickOutside = <T extends keyof DocumentEventMap>(
  onClickAway: (event: DocumentEventMap[T]) => void,
  target: Target<Element | null> | Target<Element | null>[],
  eventName: T | T[] = 'mousedown' as T,
) => {
  const targets = Array.isArray(target) ? target : [target];

  const handler = useCallback(
    (event: DocumentEventMap[T]) => {
      const isInsideTarget = targets?.some(t => {
        let el: Element | null = null;
        if (t) {
          if (isFunction(t)) {
            el = t();
          } else if ('current' in t) {
            el = t.current;
          } else {
            el = t;
          }
        }
        return el && isElement(el) && el.contains(event.target as Node);
      });
      if (!isInsideTarget) {
        onClickAway(event);
      }
    },
    [onClickAway, targets],
  );

  const getEventNames = useCallback(() => {
    const events = Array.isArray(eventName) ? eventName : [eventName];
    return events as T[];
  }, [eventName]);

  useEffect(() => {
    const eventNames = getEventNames();
    eventNames.forEach(evt => {
      document.addEventListener(evt, handler as EventListener, false);
    });

    return () => {
      eventNames.forEach(evt => {
        document.removeEventListener(evt, handler as EventListener, false);
      });
    };
  }, [handler, getEventNames]);
};

export default useClickOutside;
