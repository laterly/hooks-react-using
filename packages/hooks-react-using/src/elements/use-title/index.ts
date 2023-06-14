import { useState, useEffect, useRef } from 'react';
import { isFunction, isUndefined } from 'lodash-es';

export type UseTitleOptions = {
  template?: string | ((title: string) => string); //将默认的标题模板 %s 应用于指定的标题字符串
  isPrevOnUnmount?: boolean; //是否在组件卸载重置上一个的标题
};

const useTitle = (newTitle?: string, options?: UseTitleOptions): string => {
  const { template, isPrevOnUnmount = false } = options || {};
  const [title, setTitle] = useState<string>(document.title);
  const prevTitleRef = useRef<string>('');

  useEffect(() => {
    if (!isUndefined(newTitle) && newTitle !== prevTitleRef.current) {
      prevTitleRef.current = newTitle;

      const templateString = isFunction(template)
        ? template(newTitle)
        : template ?? '%s';

      const newTitleReplace =
        templateString?.replace('%s', newTitle || '') || '';
      document.title = newTitleReplace || '';
      setTitle(newTitleReplace);
    }
    () => {
      if (isPrevOnUnmount) {
        setTitle(prevTitleRef.current);
      }
    };
  }, [newTitle, options]);

  return title;
};

export default useTitle;
