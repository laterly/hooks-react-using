import { useState, useCallback, useEffect } from 'react';
import { isEqual, isMap } from 'lodash';

type UseMapEntry<K, V> = [key: K, value: V];

type UseMapEntryState<K, V> = Iterable<UseMapEntry<K, V>> | Map<K, V>;

type UseMapActions<K, V> = {
  set: (key: K, value: V) => void;
  setAll: (newEntry: UseMapEntryState<K, V>) => void;
  get: (key: K) => V | undefined;
  has: (key: K) => boolean;
  deleteKey: (key: K) => void;
  clear: () => void;
  keys: () => IterableIterator<K>;
  values: () => IterableIterator<V>;
  entries: () => IterableIterator<UseMapEntry<K, V>>;
  reset: (initialEntry?: UseMapEntryState<K, V>) => void;
};

type UseMapReturn<K, V> = [Map<K, V>, UseMapActions<K, V>];

const initialEntryMap = <K, V>(
  initialEntry?: UseMapEntryState<K, V>,
): Map<K, V> => {
  let curMap;
  if (!initialEntry) {
    curMap = new Map();
  } else if (isMap(initialEntry)) {
    curMap = initialEntry;
  } else if (Array.isArray(initialEntry)) {
    curMap = new Map(initialEntry);
  } else {
    throw new Error('Invalid initial value for useMap');
  }

  return curMap;
};

const useMap = <K, V = any>(
  initialEntry?: UseMapEntryState<K, V>,
): UseMapReturn<K, V> => {
  const [map, setMap] = useState(() => {
    try {
      return initialEntryMap(initialEntry);
    } catch (error) {
      console.error(error);
      return new Map();
    }
  });

  const set = useCallback((key: K, value: V) => {
    setMap(prevMap => {
      if (isEqual(prevMap?.get(key), value)) {
        return prevMap;
      }
      prevMap?.set(key, value);
      return new Map(prevMap);
    });
  }, []);

  const setAll = useCallback((newData: UseMapEntryState<K, V>) => {
    setMap(prevMap => {
      try {
        let updated = false;
        const newMap = initialEntryMap(newData);

        for (const [key, value] of newMap.entries()) {
          if (!prevMap?.has(key) || !isEqual(prevMap?.get(key), value)) {
            prevMap?.set(key, value);
            updated = true;
          }
        }
        return updated ? new Map(prevMap) : prevMap;
      } catch (error) {
        console.log('error', error);
        return prevMap;
      }
    });
  }, []);

  const reset = useCallback(<K, V>(initialEntry?: UseMapEntryState<K, V>) => {
    let curMap;
    try {
      curMap = initialEntryMap(initialEntry);
    } catch (error) {
      console.error(error);
      curMap = new Map();
    }
    setMap(curMap);
  }, []);

  const get = useCallback(
    (key: K) => {
      return map.get(key);
    },
    [map],
  );

  const has = useCallback((key: K) => map.has(key), [map]);

  const deleteKey = useCallback(
    (key: K) =>
      setMap(prevMap => {
        const isDel = prevMap.delete(key);
        if (isDel) {
          return new Map(prevMap);
        }
        return prevMap;
      }),
    [],
  );

  const clear = useCallback(() => {
    map.clear();
    setMap(new Map());
  }, [map]);

  const keys = useCallback(() => map.keys(), [map]);

  const values = useCallback(() => map.values(), [map]);

  const entries = useCallback(() => map.entries(), [map]);

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return [
    map,
    { set, get, has, deleteKey, clear, keys, values, entries, reset, setAll },
  ];
};

export default useMap;
