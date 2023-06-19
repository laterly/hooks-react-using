import { useEffect, useMemo, useRef } from 'react';

type Handler<T> = {
  [P in keyof T]?: (target: T, property: P, value: T[P], receiver: any) => boolean;
};

function useProxy<T extends object>(initialTarget: T, handler: Handler<T>): T {
  const memoizedHandler = useMemo(() => handler, [handler]);
  const ref = useRef<T>(initialTarget);

  useEffect(() => {
    new Proxy(ref.current, {
      get(target, property: keyof T, receiver) {
        return Reflect.get(target, property, receiver);
      },
      set(target, property: keyof T, value) {
        const { [property]: propertyHandler } = memoizedHandler || {};
        const result = Reflect.set(target, property, value);

        if (propertyHandler) {
          propertyHandler(target, property, value, ref.current);
        }

        return result;
      },
    });

    

    return () => {
      // 在组件卸载时，将代理对象还原为目标对象
      ref.current = initialTarget;
    };
  }, [memoizedHandler, initialTarget]);

  return ref.current;
}

export default useProxy;