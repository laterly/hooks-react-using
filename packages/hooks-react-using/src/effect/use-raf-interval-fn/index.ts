import { isNumber } from 'lodash-es';
import { useEffect, useRef, useState, useCallback } from 'react';

type UseRafIntervalFnTeturn = {
  isRunning: boolean;
  stop: () => void; //取消定时器
  start: () => void; //重新执行定时器
};

export type UseRafIntervalFnOptions = {
  immediate?: boolean;
  autoStart?: boolean;
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
  const { immediate = false, autoStart = true } = options || {};
  const effectCallback = useRef(effect);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<Timer | null>(null);
  const [shouldExecuteCallback, setShouldExecuteCallback] = useState(false);

  const run = useCallback(() => {
    stop();
    setIsRunning(true);
    if (immediate) {
      effectCallback.current();
    }
    timerRef.current = setRafInterval(() => {
      if (!shouldExecuteCallback) {
        stop();
        return;
      }
      effectCallback.current();
    }, delay);
  }, [delay,shouldExecuteCallback, immediate]);

  useEffect(() => {
    // 防止一开始就因为autoStart为true就执行了定时器
    if (autoStart) {
      setShouldExecuteCallback(true);
      return;
    }
    setShouldExecuteCallback(false);
  }, [autoStart]);

  const stop = useCallback(() => {
    setIsRunning(false);
    if (timerRef.current) {
      clearRafInterval(timerRef.current.id);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    effectCallback.current = effect;
  }, [effect]);

  useEffect(() => {
    if (shouldExecuteCallback) {
      run();
    } else {
      stop();
    }
    return stop;
  }, [delay, shouldExecuteCallback, immediate]);

  return {
    isRunning,
    stop,
    start: () => {
      setShouldExecuteCallback(true);
      run();
    },
  };
};

export default useRafIntervalFn;
