import { useState, useEffect } from 'react';
import useIntervalFn from '../../effect/use-interval-fn';
import { isNumber } from 'lodash-es';

type CurrentTime = {
  days: number;
  hours: number;
  total: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

type CountDown = {
  isRunning?: boolean;
  start: () => void; //手动触发倒计时
  stop: () => void; //停止触发倒计时
  current: CurrentTime;
};

type UseCountDownOptions = {
  time: number; //剩余时间（毫秒）
  interval?: number; //变化时间间隔（毫秒）
  immediate?: boolean; //是否立即触发
  autoStart?: boolean; //是否自动开始倒计时
  onChange?: (current: CurrentTime) => void; //变化的回调函数
  onEnd?: () => void; //倒计时结束触发
};

const useCountDown = ({
  time,
  interval = 1000,
  immediate = false,
  autoStart = false,
  onChange,
  onEnd,
}: UseCountDownOptions): CountDown => {
  if (!isNumber(interval) || interval < 0) {
    throw new Error('interval is not invalid');
  }
  const [currentTime, setCurrentTime] = useState<CurrentTime>({
    days: 0,
    hours: 0,
    total: time,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const { isRunning, start, stop } = useIntervalFn(
    () => {
      setCurrentTime(prevTime => {
        const newTotal = prevTime?.total - interval;
        if (newTotal <= 0) {
          stop();
          onEnd?.();
        } else {
          const newTime: CurrentTime = {
            days: Math.floor(newTotal / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (newTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            ),
            total: newTotal,
            minutes: Math.floor((newTotal % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((newTotal % (1000 * 60)) / 1000),
            milliseconds: Math.floor(newTotal % 1000),
          };

          if (onChange) {
            onChange(newTime);
          }
          return newTime;
        }
        return prevTime;
      });
    },
    interval,
    {
      immediate,
      autoStart: isNumber(time) && time >= 0 ? autoStart : false,
    },
  );

  useEffect(() => {
    if (!time) {
      return;
    }
    setCurrentTime({
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      total: time,
      minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((time % (1000 * 60)) / 1000),
      milliseconds: Math.floor(time % 1000),
    });
  }, [time]);

  return {
    isRunning,
    start,
    stop,
    current: currentTime,
  };
};

export default useCountDown;
