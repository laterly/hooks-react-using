import { useEffect, useRef, useState, useCallback } from 'react';
import { isNumber } from 'lodash-es';

export type UseTimeoutFnReturn = {
  isReady: boolean; //是否已经触发了
  stop: () => void; //取消定时器
  start: () => void; //重新执行定时器
};
export type UseTimeoutFnOptions = {
  immediate?: boolean;
  autoStart?: boolean;
};

const useTimeoutFn = (
  effect: React.EffectCallback,
  delay = 0,
  options?: UseTimeoutFnOptions,
): UseTimeoutFnReturn => {
  if (!isNumber(delay) || delay < 0) {
    throw new Error('delay is not invalid');
  }
  const { immediate = false, autoStart = true } = options || {};
  const effectCallback = useRef(effect);
  const [isReady, setIsReady] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const [shouldExecuteCallback, setShouldExecuteCallback] = useState(false);

  const run = useCallback(() => {
    stop();
    if (immediate) {
      setIsReady(true);
      effectCallback.current();
    }
    timerRef.current = window.setTimeout(() => {
      if (!shouldExecuteCallback) {
        stop();
        return;
      }
      if (!isReady) {
        setIsReady(true);
      }
      effectCallback.current();
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay,shouldExecuteCallback,immediate]);

  useEffect(() => {
    // 防止一开始就因为autoStart为true就执行了定时器
    if (autoStart) {
      setShouldExecuteCallback(true);
      return;
    }
    setShouldExecuteCallback(false);
  }, [autoStart]);

  const stop = useCallback(() => {
    setIsReady(false);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
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
    isReady,
    stop,
    start: () => {
      setShouldExecuteCallback(true);
      run();
    },
  };
};

export default useTimeoutFn;
