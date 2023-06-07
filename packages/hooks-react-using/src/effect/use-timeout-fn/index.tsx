import { useEffect, useRef, useState, useCallback } from 'react';
import { isNumber } from 'lodash-es';

export type UseTimeoutFnReturn = {
  isReady: boolean;
  cancel: () => void; //取消定时器
  reset: () => void; //重新执行定时器
};

const useTimeoutFn = (
  effect: React.EffectCallback,
  delay = 0,
): UseTimeoutFnReturn => {
  if (!isNumber(delay) || delay < 0) {
    throw new Error('delay is not invalid');
  }
  const effectCallback = useRef(effect);
  const [isReady, setIsReady] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const run = useCallback(() => {
    setIsReady(false);
    cancel();
    timerRef.current = window.setTimeout(() => {
      setIsReady(true);
      effectCallback.current();
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      setIsReady(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    effectCallback.current = effect;
  }, [effect]);

  useEffect(() => {
    run();
  }, [delay]);

  return {
    isReady,
    cancel,
    reset: run,
  };
};

export default useTimeoutFn;
