import { isArray, isBoolean, isFunction } from 'lodash-es';
import { useEffect, useCallback, useRef } from 'react';

type KeyType = number | string;
type Keyboardkey = KeyType | KeyType[] | ((event: KeyboardEvent) => boolean);
type Target<T> = T | (() => T) | React.MutableRefObject<T> | Window | Document;
type Options = {
  event?: 'keydown' | 'keyup';
  target?: Target<Element | null>;
  combination: boolean; //是否支持组合键触发
};
/**待解决按键别名和组合键 */
const useKeyPress = (
  keyboardkey: Keyboardkey,
  eventHandler: (event: KeyboardEvent) => void,
  options?: Options,
) => {
  const {
    event: eventName = 'keydown',
    target = window,
    combination = false,
  } = options || {};
  const savedTarget = useRef<EventTarget | null>(null);
  const isKey = useRef<boolean>(false);
  const pressedKeys = useRef<(string | number)[]>([]);
  const handleKeyPress = useCallback(
    (event: Event) => {
      const eventTarget = event as KeyboardEvent;
      console.log('eventTarget',eventTarget);
      if (isFunction(keyboardkey)) {
        isKey.current = isFunction(keyboardkey);
      } else if (isArray(keyboardkey)) {
        if (combination) {
          const keyName = eventTarget.key.toLowerCase();
          const keyCode = eventTarget.keyCode;
          const curPressedKeys = [];
          if (!pressedKeys.current.includes(keyName)) {
            curPressedKeys.push(keyName);
          }
          if (!pressedKeys.current.includes(keyCode)) {
            curPressedKeys.push(keyCode);
          }
          pressedKeys.current = curPressedKeys;
        } else {
          isKey.current =
            keyboardkey.includes(eventTarget?.key) ||
            keyboardkey.includes(eventTarget?.keyCode);
        }
      } else {
        isKey.current =
          keyboardkey === eventTarget?.key ||
          keyboardkey === eventTarget?.keyCode;
      }
      if (isKey.current && isBoolean(isKey.current)) {
        eventHandler?.(eventTarget);
      }
    },
    [keyboardkey, eventHandler, options],
  );

  useEffect(() => {
    if (!savedTarget.current) {
      let el: Target<Element | null>;
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
        savedTarget.current?.addEventListener(eventName, handleKeyPress);
      }
    }
    return () => {
      savedTarget.current?.removeEventListener(eventName, handleKeyPress);
    };
  }, [options]);
};

export default useKeyPress;
