import { isNumber } from 'lodash-es';
import { useEffect, useRef, useState, useCallback } from 'react';

type UseRafTimeoutFnTeturn = {
  isReady: boolean;
  cancel: () => void; //取消定时器
  reset: () => void; //重新执行定时器
};

const setRafTimeout = (fn: () => void, delay = 0) => {
  let timeId = 0;
  const start = new Date().getTime();
  const step = () => {
    const current = new Date().getTime();

    const elapsed = current - start;

    if (elapsed >= delay) {
      fn();
    } else {
      timeId = requestAnimationFrame(step);
    }
  };
  timeId = requestAnimationFrame(step);
  return timeId;
};

const clearRafTimeout = (timerId: number) => {
  cancelAnimationFrame(timerId);
};

const useRafTimeoutFn = (
  effect: React.EffectCallback,
  delay = 0,
): UseRafTimeoutFnTeturn => {
  if (!isNumber(delay) || delay < 0) {
    throw new Error('delay is not invalid');
  }
  const [isReady, setIsReady] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const run = useCallback(() => {
    setIsReady(false);
    cancel();
    timerRef.current = setRafTimeout(() => {
      setIsReady(true);
      effect();
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      clearRafTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    run();
  }, [delay]);

  return {
    isReady,
    cancel,
    reset: run,
  };
};

export default useRafTimeoutFn;
