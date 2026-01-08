import { useState, useEffect, useCallback, useRef } from "react";

interface UseTimerProps {
  initialMinutes: number;
}

export const useTimer = ({ initialMinutes }: UseTimerProps) => {
  const [remainingSeconds, setRemainingSeconds] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [initialDuration, setInitialDuration] = useState(initialMinutes * 60);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  useEffect(() => {
    if (!isRunning || startTime === null) return;

    const updateTimer = () => {
      const now = Date.now();
      const elapsedSeconds = Math.floor((now - startTime) / 1000);
      const newRemaining = Math.max(0, initialDuration - elapsedSeconds);

      setRemainingSeconds(newRemaining);

      if (newRemaining > 0) {
        // Background tabda ham ishlashi uchun juda qisqa timeout
        // Keyingi update uchun vaqtni hisoblab
        const nextUpdate = 1000 - (now % 1000);
        timerRef.current = setTimeout(updateTimer, nextUpdate);
      } else {
        setIsRunning(false);
      }
    };

    // Birinchi update
    const now = Date.now();
    const nextUpdate = 1000 - (now % 1000);
    timerRef.current = setTimeout(updateTimer, nextUpdate);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isRunning, startTime, initialDuration]);

  const start = useCallback(() => {
    if (remainingSeconds > 0) {
      const now = Date.now();
      // Qancha vaqt o'tganini hisoblaymiz
      const elapsed = initialDuration - remainingSeconds;
      setStartTime(now - elapsed * 1000);
      setIsRunning(true);
    }
  }, [remainingSeconds, initialDuration]);

  const pause = useCallback(() => {
    setIsRunning(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Pause bo'lganda start timeni null qilamiz
    setStartTime(null);
  }, []);

  const reset = useCallback(
    (newMinutes?: number) => {
      setIsRunning(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      const newTotalSeconds = (newMinutes ?? initialMinutes) * 60;
      setRemainingSeconds(newTotalSeconds);
      setInitialDuration(newTotalSeconds);
      setStartTime(null);
    },
    [initialMinutes]
  );

  const setTime = useCallback((newMinutes: number) => {
    setIsRunning(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const newTotalSeconds = newMinutes * 60;
    setRemainingSeconds(newTotalSeconds);
    setInitialDuration(newTotalSeconds);
    setStartTime(null);
  }, []);

  // Background tabga o'tganda ham to'g'ri ishlashi uchun visibility change event
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isRunning && startTime) {
        // Tab backgroundga o'tsa, tekshirib turamiz
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - startTime) / 1000);
        const newRemaining = Math.max(0, initialDuration - elapsedSeconds);
        setRemainingSeconds(newRemaining);

        if (newRemaining <= 0) {
          setIsRunning(false);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isRunning, startTime, initialDuration]);

  return {
    minutes,
    seconds,
    isRunning,
    isComplete: remainingSeconds === 0,
    start,
    pause,
    reset,
    setTime,
  };
};
