import { useEffect, useRef } from 'react';
type AsyncEffectCleanup = void | (() => void | Promise<void>);
type AsyncEffectFn = () => Promise<AsyncEffectCleanup>;
const useAsyncEffect = (effect: AsyncEffectFn, deps?: React.DependencyList) => {
  const cleanupRef = useRef<AsyncEffectCleanup>();
  useEffect(() => {
    cleanupRef.current = undefined;
    const runEffect = async () => {
      const cleanup = await effect();
      console.log('cleanup', cleanup);
      if (!cleanupRef.current) {
        cleanupRef.current = cleanup;
      }
    };
    runEffect();
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, deps);
};

export default useAsyncEffect;
