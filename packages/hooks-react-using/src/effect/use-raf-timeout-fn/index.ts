import { isNumber } from 'lodash-es';
import { useEffect, useRef, useState, useCallback } from 'react';

type UseRafTimeoutFnTeturn = {
  isReady: boolean;
  cancel: () => void; //取消定时器
  reset: () => void; //重新执行定时器
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
): UseRafTimeoutFnTeturn => {
  if (!isNumber(delay) || delay < 0) {
    throw new Error('delay is not invalid');
  }
  const effectCallback = useRef(effect);
  const [isReady, setIsReady] = useState<boolean>(false);
  const timerRef = useRef<Timer>({ id: 0 });

  const run = useCallback(() => {
    setIsReady(false);
    cancel();
    timerRef.current = setRafTimeout(() => {
      setIsReady(true);
      effectCallback.current();
    }, delay);
  }, [delay]);

  const cancel = useCallback(() => {
    if (timerRef.current) {
      setIsReady(false);
      clearRafTimeout(timerRef.current.id);
      timerRef.current = { id: 0 };
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
  }, [delay]);

  return {
    isReady,
    cancel,
    reset: run,
  };
};

export default useRafTimeoutFn;
