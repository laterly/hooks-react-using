import { useState, useCallback } from 'react';
import { isEqual, isObject, isWeakMap } from 'lodash-es';

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

type UseWeakMapReturn<K extends WeakKey, V> = UseMapActions<K, V>;

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
  const [weakMap, setWeakMap] = useState(() => {
    try {
      return initialEntryMap(initialEntry);
    } catch (error) {
      console.error(error);
      return new WeakMap();
    }
  });

  const [, setState] = useState(false);

  const update = useCallback(() => setState(val => !val), []);

  const set = useCallback((key: K, value: V) => {
    if (!isObject(key)) {
      return;
    }
    if (isEqual(weakMap.get(key), value)) {
      return;
    }
    weakMap.set(key, value);
    update();
  }, []);

  const setAll = useCallback((newData: Iterable<[K, V]>) => {
    for (const [entry, value] of newData) {
      if (isObject(entry)) {
        weakMap.set(entry, value);
      }
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
    setWeakMap(curMap);
    update();
  }, []);

  const get = useCallback(
    (key: K) => {
      if (!isObject(key)) {
        return;
      }
      return weakMap?.get(key);
    },
    [weakMap],
  );

  const has = useCallback(
    (key: K) => {
      if (!isObject(key)) {
        return false;
      }
      return weakMap?.has(key);
    },
    [weakMap],
  );

  const deleteKey = useCallback(
    (key: K) => {
      if (!isObject(key)) {
        return;
      }
      if (weakMap?.has(key)) {
        weakMap.delete(key);
      }
      update();
    },
    [weakMap],
  );

  const clear = useCallback(() => {
    setWeakMap(new WeakMap());
    update();
  }, []);

  return { set, setAll, get, has, deleteKey, clear, reset };
};

export default useWeakMap;
