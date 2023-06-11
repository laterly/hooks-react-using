import { isNumber } from 'lodash-es';
import { useEffect, useRef, useState, useCallback } from 'react';

type UseRafTimeoutFnTeturn = {
  isReady: boolean;
  stop: () => void; //取消定时器
  start: () => void; //重新执行定时器
};
export type UseRafTimeoutFnOptions = {
  immediate?: boolean;
  autoStart?: boolean;
};


type Timer = {
  id: number;
};

const setRafTimeout = (fn: () => void, delay = 0) => {
  const timer: Timer = {
    id: 0,
  };
  const start = new Date().getTime();
  const step = () => {
    const current = new Date().getTime();

    const elapsed = current - start;

    if (elapsed >= delay) {
      fn();
    } else {
      timer.id = requestAnimationFrame(step);
    }
  };
  timer.id = requestAnimationFrame(step);
  return timer;
};

const clearRafTimeout = (timerId: number) => {
  cancelAnimationFrame(timerId);
};

const useRafTimeoutFn = (
  effect: React.EffectCallback,
  delay = 0,
  options?: UseRafTimeoutFnOptions,
): UseRafTimeoutFnTeturn => {
  if (!isNumber(delay) || delay < 0) {
    throw new Error('delay is not invalid');
  }
  const { immediate = false, autoStart = true } = options || {};
  const effectCallback = useRef(effect);
  const [isReady, setIsReady] = useState<boolean>(false);
  const timerRef = useRef<Timer>({ id: 0 });
  const [shouldExecuteCallback, setShouldExecuteCallback] = useState(false);

  const run = useCallback(() => {
    stop();
    if (immediate) {
      setIsReady(true);
      effectCallback.current();
    }
    timerRef.current = setRafTimeout(() => {
      if (!shouldExecuteCallback) {
        stop();
        return;
      }
      if (!isReady) {
        setIsReady(true);
      }
      effectCallback.current();
    }, delay);
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
      clearRafTimeout(timerRef.current.id);
      timerRef.current = { id: 0 };
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

export default useRafTimeoutFn;
