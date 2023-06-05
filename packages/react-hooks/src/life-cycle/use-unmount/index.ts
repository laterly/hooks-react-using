import { useEffect, EffectCallback, useRef } from 'react';

const useUnmount = (fn: EffectCallback) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};

export default useUnmount;
