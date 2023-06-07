import { useEffect, useRef, useState, useCallback } from 'react';
import { isNumber } from 'lodash-es';

export type UseIntervalFnReturn = {
  isRunning: boolean;
  cancel: () => void; //取消定时器
  reset: () => void; //重新执行定时器
};

export type UseIntervalFnOptions = {
  immediate?: boolean;
};

const useIntervalFn = (
  effect: React.EffectCallback,
  delay = 0,
  options?: UseIntervalFnOptions,
): UseIntervalFnReturn => {
  if (!isNumber(delay) || delay < 0) {
    throw new Error('delay is not invalid');
  }
  const effectCallback = useRef(effect);
  const { immediate = false } = options || {};
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const run = useCallback(() => {
    setIsRunning(false);
    cancel();
    if (immediate) {
      setIsRunning(true);
      effectCallback.current();
    }
    timerRef.current = window.setInterval(() => {
      setIsRunning(true);
      effectCallback.current();
    }, delay);
  }, [delay, immediate]);

  useEffect(() => {
    effectCallback.current = effect;
  }, [effect]);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      setIsRunning(false);
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    run();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay, immediate]);

  return {
    isRunning,
    cancel,
    reset: run,
  };
};

export default useIntervalFn;
