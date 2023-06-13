import { useState, useEffect, useRef } from 'react';
import { isFunction, isElement } from 'lodash-es';

type UseHoverOptions = {
  delayEnter?: number;
  delayLeave?: number;
  onLeave?:()=>void;
  onEnter?:()=>void;
};

type Target<T> = T | (() => T) | React.MutableRefObject<T>;

const useHover = (
  target: Target<Element | null>,
  options?: UseHoverOptions,
): boolean => {
  const { delayEnter, delayLeave,onEnter,onLeave } = options || {};
  const [isHover, setIsHover] = useState(false);
  const delayEnterRef = useRef<number>();
  const delayLeaveRef = useRef<number>();

  useEffect(() => {
    if (!target) {
      throw new Error('Target is invalid');
    }
    let el: Element | null = null;
    if (isFunction(target)) {
      el = target();
    } else if ('current' in target) {
      el = target.current;
    } else {
      el = target;
    }
    if (!el || !isElement(el)) {
      return;
    }
    const handleMouseEnter = () => {
      if (delayLeaveRef.current) {
        clearTimeout(delayLeaveRef.current);
      }

      if (delayEnter) {
        delayEnterRef.current = window.setTimeout(() => {
          setIsHover(true);
          onEnter?.();
        }, delayEnter);
      } else {
        setIsHover(true);
        onEnter?.();
      }
    };

    const handleMouseLeave = () => {
      if (delayEnterRef.current) {
        clearTimeout(delayEnterRef.current);
      }
      if (delayLeave) {
        delayLeaveRef.current = window.setTimeout(() => {
          setIsHover(false);
          onLeave?.();
        }, delayLeave);
      } else {
        setIsHover(false);
        onLeave?.();
      }
    };

    el?.addEventListener('mouseenter', handleMouseEnter);
    el?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el?.removeEventListener('mouseenter', handleMouseEnter);
      el?.removeEventListener('mouseleave', handleMouseLeave);
      if (delayEnterRef.current) {
        clearTimeout(delayEnterRef.current);
      }
      if (delayLeaveRef.current) {
        clearTimeout(delayLeaveRef.current);
      }
    };
  }, [target, options]);

  return isHover;
};

export default useHover;
