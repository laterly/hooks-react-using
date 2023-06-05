import { useState } from 'react';
import { isObject, isArray, isString, isFunction, isEqual } from 'lodash-es';
/**
 * 对useState的进行封装
 * 会对对象进行一次对比数据，数据一样则不允许更新
 * @param initialState 响应式数据
 * @returns
 */
const useSetState = <T extends Record<string, any>>(
  initialState: T,
): [T, <V>(key: T | Extract<keyof T, string>, value?: V) => void] => {
  if (!isObject(initialState)) {
    throw new TypeError(
      'The parameter of useLocalReactive must be a an Object',
    );
  }
  const initState = { ...initialState };
  const [state, setState] = useState<T>(initState);
  const setReactive = <T, V>(key: T | Extract<keyof T, string>, value?: V) => {
    //既不是对象，也不是state里的key
    if (!isObject(key) && !Reflect.has(state, key as string)) {
      throw new ReferenceError(
        `Can't find the property ${key} from the Object`,
      );
    }
    //是对象
    if (isObject(key) && !isArray(key)) {
      let shouldUpdate = false;
      for (const k in key) {
        // @ts-ignore
        if (Reflect.has(state, k)) {
          //这里只比较不是对象的值，对象则还是直接更新
          // @ts-ignore
          if (
            !isObject(Reflect.get(state, k)) &&
            isEqual(Reflect.get(state, k), key[k])
          ) {
            continue;
          } else {
            shouldUpdate = true;
            // @ts-ignore
            Reflect.set(state, k, key[k]);
          }
        }
      }
      if (shouldUpdate)
        setState({
          ...state,
        });
    }
    if (isString(key)) {
      if (isFunction(value)) {
        const currentValue = Reflect.get(state, key);
        const orgValue = state;
        const getValue = value(currentValue, orgValue);
        //对比一样则不允许更新数据
        if (isEqual(currentValue, getValue)) return;
        else Reflect.set(state, key, getValue);
      } else {
        if (isEqual(Reflect.get(state, key), value)) return;
        else Reflect.set(state, key, value);
      }
      setState({
        ...state,
      });
    }
  };
  return [state, setReactive];
};
export default useSetState;
