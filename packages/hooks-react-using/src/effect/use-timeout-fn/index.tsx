import { useEffect, useRef, useState, useCallback } from 'react';

export type UseTimeoutFnReturn = [
  boolean,
  {
    cancel: () => void; //取消定时器
    reset: () => void; //重新执行定时器
  },
];
const useTimeoutFn = (
  effect: React.EffectCallback,
  delay = 0,
): UseTimeoutFnReturn => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const run = useCallback(() => {
    setIsReady(false);
    cancel();
    timerRef.current = window.setTimeout(() => {
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
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    run();
  }, [delay]);

  return [
    isReady,
    {
      cancel,
      reset: run,
    },
  ];
};

export default useTimeoutFn;
