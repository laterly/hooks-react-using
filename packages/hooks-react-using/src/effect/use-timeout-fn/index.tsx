import { useEffect, useRef, useState, useCallback } from 'react';
interface Options {
  delay?: number; //延迟时间，默认为 0 毫秒。
}
export type UseTimeoutFnReturn = [
  boolean,
  {
    cancel: () => void; //取消定时器
    reset: () => void; //重新执行定时器
  },
];
const useTimeoutFn = (
  effect: React.EffectCallback,
  options?: Options,
): UseTimeoutFnReturn => {
  const { delay = 0 } = options || {};
  const [isReady, setIsReady] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const reset = useCallback(() => {
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
    reset();
  }, [delay]);

  return [
    isReady,
    {
      cancel,
      reset,
    },
  ];
};

export default useTimeoutFn;
