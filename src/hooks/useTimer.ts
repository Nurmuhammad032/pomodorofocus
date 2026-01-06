import { useState, useEffect, useCallback } from "react";

interface UseTimerProps {
  initialMinutes: number;
}

export const useTimer = ({ initialMinutes }: UseTimerProps) => {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);
    } else if (totalSeconds === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsRunning(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, totalSeconds]);

  const start = useCallback(() => {
    if (totalSeconds > 0) {
      setIsRunning(true);
    }
  }, [totalSeconds]);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(
    (newMinutes?: number) => {
      setIsRunning(false);
      setTotalSeconds((newMinutes ?? initialMinutes) * 60);
    },
    [initialMinutes]
  );

  const setTime = useCallback((newMinutes: number) => {
    setTotalSeconds(newMinutes * 60);
  }, []);

  return {
    minutes,
    seconds,
    isRunning,
    isComplete: totalSeconds === 0,
    start,
    pause,
    reset,
    setTime,
  };
};
