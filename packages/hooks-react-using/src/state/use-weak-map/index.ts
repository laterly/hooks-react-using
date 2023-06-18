import { useState, useCallback, useEffect, useRef } from 'react';
import { isEqual, isWeakMap } from 'lodash-es';

type UseWeakMapEntry<K extends WeakKey, V> = [key: K, value: V];

type UseWeakMapEntryState<K extends WeakKey, V> =
  | Iterable<UseWeakMapEntry<K, V>>
  | WeakMap<K, V>;

type UseMapActions<K extends WeakKey, V> = {
  set: (key: K, value: V) => void;
  setAll: (entries: Iterable<[K, V]>) => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
  deleteKey: (key: K) => void;
  clear: () => void;
  reset: (initialEntry?: UseWeakMapEntryState<K, V>) => void;
};

type UseWeakMapReturn<K extends WeakKey, V> = [
  WeakMap<K, V>,
  UseMapActions<K, V>,
];

const initialEntryMap = <K extends WeakKey, V>(
  initialEntry?: UseWeakMapEntryState<K, V>,
): WeakMap<K, V> => {
  let curMap;
  if (!initialEntry) {
    curMap = new WeakMap();
  } else if (isWeakMap(initialEntry)) {
    curMap = new WeakMap(initialEntry as Iterable<readonly [object, V]>);
  } else if (Array.isArray(initialEntry)) {
    curMap = new WeakMap(initialEntry as Iterable<readonly [object, V]>);
  } else if (initialEntry instanceof WeakMap) {
    // 处理 WeakMap 类型的输入
    curMap = initialEntry;
  } else {
    throw new Error('Invalid initial value for useMap');
  }

  return curMap as WeakMap<K, V>;
};

const useWeakMap = <K extends WeakKey, V>(
  initialEntry?: UseWeakMapEntryState<K, V>,
): UseWeakMapReturn<K, V> => {
  const weakMapRef = useRef<WeakMap<K, V>>(initialEntryMap(initialEntry));

  const [, setState] = useState(false);

  const update = useCallback(() => setState(val => !val), []);

  const set = useCallback((key: K, value: V) => {
    if (isEqual(weakMapRef.current.get(key), value)) {
      return;
    }
    weakMapRef.current.set(key, value);
    update();
  }, []);

  const setAll = useCallback((newData: Iterable<[K, V]>) => {
    for (const [entry, value] of newData) {
      weakMapRef.current.set(entry, value);
    }
    update();
  }, []);

  const reset = useCallback((initialEntry?: UseWeakMapEntryState<K, V>) => {
    let curMap;
    try {
      curMap = initialEntryMap(initialEntry);
    } catch (error) {
      console.error(error);
      curMap = new WeakMap();
    }
    weakMapRef.current = curMap as WeakMap<K, V>;
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
    weakMapRef.current = new WeakMap<K, V>() as WeakMap<K, V>;
    update();
  }, []);

  return [
    weakMapRef.current,
    { set, setAll, get, has, deleteKey, clear, reset },
  ];
};

export default useWeakMap;
