/**
 * 是否允许设置cookies
 */
export const isAllowCookies = (): boolean => {
  const isAllow =
    navigator.cookieEnabled && typeof window.localStorage !== 'undefined';
  return isAllow;
};
/**
 * 本地存储
 * @param key
 * 写入/读取的key值
 * @param value
 * 写入/读取的value值
 */
export const storage = {
  local: {
    //aliveTime到期时间戳，毫秒单位
    set<T>(key: string, value: T, aliveTime?: number): void {
      if (!isAllowCookies()) return;
      if (aliveTime) {
        const data = {
          obj: value,
          aliveTime: aliveTime,
        };
        localStorage?.setItem(key, JSON.stringify(data));
      } else {
        localStorage?.setItem(key, JSON.stringify(value));
      }
    },
    get<T>(key: string): T | null {
      if (!isAllowCookies()) return null;
      const localData = localStorage?.getItem(key);
      if (!localData) return null;
      try {
        const data = JSON.parse(localData);
        if (data.aliveTime) {
          if (new Date().getTime() >= data.aliveTime) {
            //超时了
            this.del(key);
            return null;
          } else {
            return data.obj;
          }
        } else {
          return data;
        }
      } catch (e) {
        return null;
      }
    },
    del(key: string): void {
      if (!isAllowCookies()) return;
      if (key) localStorage?.removeItem(key);
    },
    clear(): void {
      if (!isAllowCookies()) return;
      localStorage?.clear();
    },
  },
  //sessionStorage
  session: {
    set<T>(key: string, value: T): void {
      if (!isAllowCookies()) return;
      if (key) sessionStorage?.setItem(key, JSON.stringify(value));
    },
    get<T>(key: string): T | null {
      if (!isAllowCookies()) return null;
      const data = sessionStorage?.getItem(key);
      if (!data) return null;
      try {
        return JSON.parse(data);
      } catch (e) {
        return null;
      }
    },
    del(key: string): void {
      if (!isAllowCookies()) return;
      if (key) sessionStorage?.removeItem(key);
    },
    clear(): void {
      if (!isAllowCookies()) return;
      sessionStorage?.clear();
    },
  },
};
