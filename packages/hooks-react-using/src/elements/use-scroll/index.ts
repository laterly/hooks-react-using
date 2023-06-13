import { useCallback, useEffect, useRef, useState } from 'react';
import { isFunction, isElement } from 'lodash-es';

type Target<T> = T | (() => T) | React.MutableRefObject<T>;

type ArrivedState = {
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
};

type Directions = {
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
};

type ScrollState = {
  x: number;
  y: number;
  isScrolling: boolean;
  arrivedState: ArrivedState;
  directions: Directions;
  timeoutId?: number;
};

const initialArrivedState: ArrivedState = {
  left: false,
  right: false,
  top: false,
  bottom: false,
};

const initialDirections: Directions = {
  left: false,
  right: false,
  top: false,
  bottom: false,
};

const useScroll = (target: Target<Element | null>): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    x: 0,
    y: 0,
    isScrolling: false,
    arrivedState: initialArrivedState,
    directions: initialDirections,
  });

  const scrollStateRef = useRef(scrollState);

  const handleScroll = useCallback(() => {
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

    const {
      scrollLeft,
      scrollTop,
      clientWidth,
      clientHeight,
      scrollWidth,
      scrollHeight,
    } = el;

    const left = scrollLeft === 0;
    const right = scrollLeft + clientWidth >= scrollWidth;
    const top = scrollTop === 0;
    const bottom = scrollTop + clientHeight >= scrollHeight;

    const directions: Directions = {
      left: scrollStateRef.current.x > scrollLeft,
      right: scrollStateRef.current.x < scrollLeft,
      top: scrollStateRef.current.y > scrollTop,
      bottom: scrollStateRef.current.y < scrollTop,
    };
    // 使用 clearTimeout 清除上一个定时器
    clearTimeout(scrollStateRef.current.timeoutId);

    setScrollState({
      x: scrollLeft,
      y: scrollTop,
      isScrolling: true,
      arrivedState: {
        left,
        right,
        top,
        bottom,
      },
      directions,
    });

    scrollStateRef.current = {
      x: scrollLeft,
      y: scrollTop,
      isScrolling: false,
      arrivedState: {
        left,
        right,
        top,
        bottom,
      },
      directions,
      // 将定时器 ID 存储在 ref 中
      timeoutId: (() => {
        const id = window.setTimeout(() => {
          setScrollState(prevState => ({ ...prevState, isScrolling: false }));
        }, 100);
        return id;
      })(),
    };
  }, [target]);

  useEffect(() => {
    let el: Element | null = null;
    if (!target) {
      return;
    }
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

    el?.addEventListener('scroll', handleScroll);

    return () => {
      el?.removeEventListener('scroll', handleScroll);
    };
  }, [target, handleScroll]);

  return scrollState;
};

export default useScroll;
