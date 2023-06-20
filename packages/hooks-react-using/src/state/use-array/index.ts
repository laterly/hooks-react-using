import { isArray } from 'lodash-es';
import { useState, useCallback, useRef } from 'react';

type UseArrayReturn<T> = {
  push: (item: T[any]) => void;
  pop: () => T[any];
  unshift: (item: T[any]) => number;
  shift: (item: T[any]) => T[any];
  splice: (start: number, deleteCount?: number) => T;
  concat: (array: T) => T;
  reverse: () => T;
  sort: (compareFn?: (a: T[any], b: T[any]) => number) => T;
};
// push()：将一个或多个元素添加到数组的末尾。
// pop()：从数组的末尾移除并返回最后一个元素。
// shift()：从数组的开头移除并返回第一个元素。
// unshift()：将一个或多个元素添加到数组的开头。
// splice()：修改数组的内容，添加或删除元素。
// slice()：返回指定位置的一部分数组。
// concat()：连接两个或多个数组。
// join()：将数组中的所有元素作为字符串连接起来。
// reverse()：反转数组中元素的顺序。
// sort()：按升序或降序对数组进行排序。
const useArray = <T extends any[]>(
  initialState?: T,
): [T, UseArrayReturn<T>] => {
  const [state, setState] = useState<T>(
    isArray(initialState) ? initialState : ([] as unknown as T),
  );
  const pushRef = useRef<number>(0);
  const poppedRef = useRef<T[any] | null>(null);
  const unshiftRef = useRef<number>(0);
  const shiftRef = useRef<T[any]>();
  const spliceRef = useRef<T>();
  const concatRef = useRef<T>();
  const reverseRef = useRef<T>();
  const sortRef = useRef<T>();
  /**末尾添加元素 */
  const push = useCallback((item: T[any]) => {
    setState(prev => {
      const newState = [...prev] as T;
      pushRef.current = newState.push(item);
      return [...newState] as T;
    });
    return pushRef.current;
  }, []);
  /**删除最后一个元素 */
  const pop = useCallback(() => {
    setState(prev => {
      const newState = [...prev] as T;
      poppedRef.current = newState.pop();
      return newState;
    });
    return poppedRef.current;
  }, []);

  /** 往最前面添加元素*/
  const unshift = useCallback((item: T[any]) => {
    setState(prev => {
      const newState = [...prev] as T;
      unshiftRef.current = newState.unshift(item);
      return [...newState] as T;
    });
    return unshiftRef.current;
  }, []);
  /** 往最前面删除元素*/
  const shift = useCallback(() => {
    setState(prev => {
      const newState = [...prev] as T;
      shiftRef.current = newState.shift();
      return [...newState] as T;
    });
    return shiftRef.current;
  }, []);

  const splice = useCallback((start: number, deleteCount?: number) => {
    setState(prev => {
      const newState = [...prev] as T;
      spliceRef.current = newState.splice(start, deleteCount) as T;
      return [...newState] as T;
    });
    return spliceRef.current as T;
  }, []);

  const concat = useCallback((item: T) => {
    setState(prev => {
      const newState = [...prev] as T;
      concatRef.current = newState.concat(item) as T;
      return concatRef.current as T;
    });
    return concatRef.current as T;
  }, []);

  const reverse = useCallback(() => {
    setState(prev => {
      const newState = [...prev] as T;
      reverseRef.current = newState.reverse() as T;
      return reverseRef.current as T;
    });
    return reverseRef.current as T;
  }, []);

  const sort = useCallback((compareFn?: (a: T, b: T) => number) => {
    setState(prev => {
      const newState = [...prev] as T;
      sortRef.current = newState.sort(compareFn) as T;
      return sortRef.current as T;
    });
    return sortRef.current as T;
  }, []);

  return [
    state,
    {
      push,
      pop,
      unshift,
      shift,
      splice,
      concat,
      reverse,
      sort,
    },
  ];
};

export default useArray;
