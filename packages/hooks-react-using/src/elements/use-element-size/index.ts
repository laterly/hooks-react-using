import { useState, useEffect } from 'react';
import { isFunction, isElement } from 'lodash-es';

interface Size {
  width: number;
  height: number;
}

type Target<T> = T | (() => T) | React.MutableRefObject<T>;

const useElementSize = (target: Target<Element | null>): Size => {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

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

    const observer = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return size;
};

export default useElementSize;
