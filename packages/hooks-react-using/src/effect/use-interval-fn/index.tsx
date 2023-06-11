import { useEffect, useRef, useState, useCallback } from 'react';
import { isNumber } from 'lodash-es';

export type UseIntervalFnReturn = {
  isRunning: boolean;
  start: () => void; //开始定时器
  stop: () => void; //停止定时器
};

export type UseIntervalFnOptions = {
  immediate?: boolean;
  autoStart?: boolean;
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
  const { immediate = false, autoStart = true } = options || {};
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const [shouldExecuteCallback, setShouldExecuteCallback] = useState(false);

  const run = useCallback(() => {
    stop();
    setIsRunning(true);
    if (immediate) {
      effectCallback.current();
    }
    timerRef.current = window.setInterval(() => {
      if (!shouldExecuteCallback) {
        stop();
        return;
      }
      effectCallback.current();
    }, delay);
  }, [delay, shouldExecuteCallback, immediate]);

  useEffect(() => {
    effectCallback.current = effect;
  }, [effect]);

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
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

 

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

export default useIntervalFn;
