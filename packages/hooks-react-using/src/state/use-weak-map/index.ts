import { useState, useCallback, useEffect, useRef } from 'react';
import { isEqual, isWeakMap } from 'lodash';

type UseMapEntry<K extends WeakKey, V> = [key: K, value: V];

type UseMapEntryState<K extends WeakKey, V> =
  | Iterable<UseMapEntry<K, V>>
  | WeakMap<K, V>;

type UseMapActions<K extends WeakKey, V> = {
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
  deleteKey: (key: K) => void;
  clear: () => void;
  reset: (initialEntry?: UseMapEntryState<K, V>) => void;
};

type UseMapReturn<K extends WeakKey, V> = [WeakMap<K, V>, UseMapActions<K, V>];

const initialEntryMap = <K extends WeakKey, V>(
  initialEntry?: UseMapEntryState<K, V>,
): WeakMap<K, V> => {
  let curMap;
  if (!initialEntry) {
    curMap = new WeakMap();
  } else if (isWeakMap(initialEntry)) {
    curMap = new WeakMap(initialEntry as Iterable<[K, V]>);
  } else if (Array.isArray(initialEntry)) {
    curMap = new WeakMap(initialEntry as Iterable<[K, V]>);
  } else if (initialEntry instanceof WeakMap) {
    // 处理 WeakMap 类型的输入
    curMap = initialEntry;
  } else {
    throw new Error('Invalid initial value for useMap');
  }

  return curMap;
};

const useMap = <K extends WeakKey, V>(
  initialEntry?: UseMapEntryState<K, V>,
): UseMapReturn<K, V> => {
  const weakMapRef = useRef<WeakMap<K, V>>(initialEntryMap(initialEntry));

  const [, setState] = useState(false);

  const update = useCallback(() => setState(val => !val), []);

  const set = useCallback((key: K, value: V) => {
    if (weakMapRef.current.get(key) === value) {
      return;
    }
    weakMapRef.current.set(key, value);
    update();
  }, []);

  const reset = useCallback((initialEntry?: UseMapEntryState<K, V>) => {
    let curMap;
    try {
      curMap = initialEntryMap(initialEntry);
    } catch (error) {
      console.error(error);
      curMap = new WeakMap();
    }
    weakMapRef.current = curMap;
    update();
  }, []);

  const get = useCallback((key: K) => {
    return weakMapRef.current?.get(key);
  }, []);

  const has = useCallback((key: K) => weakMapRef.current?.has(key), []);

  const deleteKey = useCallback((key: K) => {
    if (weakMapRef.current?.has(key)) {
      weakMapRef.current.delete(key);
    }
    update();
  }, []);

  const clear = useCallback(() => {
    weakMapRef.current = new WeakMap();
    update();
  }, []);

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return [weakMapRef.current, { set, get, has, deleteKey, clear, reset }];
};

export default useMap;
