import { isNumber } from 'lodash-es';
import { useEffect, useRef, useState, useCallback } from 'react';

type UseRafIntervalFnTeturn = {
  isRunning: boolean;
  cancel: () => void; //取消定时器
  reset: () => void; //重新执行定时器
};

export type UseRafIntervalFnOptions = {
  immediate?: boolean;
};

type Timer = {
  id: number;
};

const setRafInterval = (fn: () => void, delay = 0) => {
  const timer: Timer = {
    id: 0,
  };
  let start = new Date().getTime();
  const step = () => {
    const current = new Date().getTime();

    const elapsed = current - start;

    if (elapsed >= delay) {
      fn();
      start = new Date().getTime();
    }
    timer.id = requestAnimationFrame(step);
  };
  timer.id = requestAnimationFrame(step);
  return timer;
};

const clearRafInterval = (timerId: number) => {
  if (timerId) {
    cancelAnimationFrame(timerId);
  }
};

const useRafIntervalFn = (
  effect: React.EffectCallback,
  delay = 0,
  options?: UseRafIntervalFnOptions,
): UseRafIntervalFnTeturn => {
  if (!isNumber(delay) || delay < 0) {
    throw new Error('delay is not invalid');
  }
  const { immediate = false } = options || {};
  const effectCallback = useRef(effect);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<Timer | null>(null);

  const run = useCallback(() => {
    setIsRunning(false);
    cancel();
    if (immediate) {
      setIsRunning(true);
      effectCallback.current();
    }
    timerRef.current = setRafInterval(() => {
      setIsRunning(true);
      effectCallback.current();
    }, delay);
  }, [delay, immediate]);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      setIsRunning(false);
      clearRafInterval(timerRef.current.id);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    effectCallback.current = effect;
  }, [effect]);

  useEffect(() => {
    run();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current.id);
      }
    };
  }, [delay, immediate]);

  return {
    isRunning,
    cancel,
    reset: run,
  };
};

export default useRafIntervalFn;
