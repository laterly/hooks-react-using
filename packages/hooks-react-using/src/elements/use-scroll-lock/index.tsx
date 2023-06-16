import { useState, useEffect, useRef, useCallback } from 'react';
import { isBoolean, isFunction } from 'lodash-es';
type Target<T> = T | (() => T) | React.MutableRefObject<T> | Window | Document;
type UseScrollLockReturn = {
  isLocked: boolean;
  toggleLock: (isLocked?: boolean) => void;
};

const useScrollLock = <T extends Element>(
  target?: Target<T | null>,
  initialState?: boolean, //默认是false,就是不锁住滚动，如果传true则锁住滚动
): UseScrollLockReturn => {
  const [isLocked, setIsLocked] = useState<boolean>(initialState ?? false);
  const savedTarget = useRef<EventTarget | null>(null);

  const setLockState = useCallback((newState?: boolean) => {
    if (isBoolean(newState)) {
      setIsLocked(newState);
      return;
    }
    setIsLocked(val => !val);
  }, []);

  const lockScroll = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  const cleanEvent = useCallback(() => {
    if (savedTarget.current) {
      savedTarget.current?.removeEventListener('touchmove', lockScroll);
      savedTarget.current?.removeEventListener('mousewheel', lockScroll);
    }
  }, []);

  useEffect(() => {
    let el: Target<T | null>;
    if (target) {
      if (isFunction(target)) {
        el = target();
      } else if ('current' in target) {
        el = target.current;
      } else {
        el = target;
      }
    } else {
      el = window;
    }
    if (el) {
      savedTarget.current = el;
      cleanEvent();
      if (isLocked) {
        savedTarget.current?.addEventListener('touchmove', lockScroll, {
          passive: false,
        });
        savedTarget.current?.addEventListener('mousewheel', lockScroll, {
          passive: false,
        });
        //@ts-ignore
        savedTarget.current.style.overflow = 'hidden';
      } else {
        //@ts-ignore
        savedTarget.current.style.overflow = '';
      }
    }

    return () => {
      if (savedTarget.current) {
        cleanEvent();
        //@ts-ignore
        savedTarget.current.style.overflow = '';
      }
    };
  }, [target, isLocked]);

  return {
    isLocked,
    toggleLock: setLockState,
  };
};

export default useScrollLock;
