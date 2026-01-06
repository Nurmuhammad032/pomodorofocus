"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";
import ModeSelector from "@/components/ModeSelector";
import TimeSettings from "@/components/TimeSettings";
import TestSoundButton from "@/components/TestSoundButton";
import ThemeToggle from "@/components/ThemeToggle";
import { useTimer } from "@/hooks/useTimer";
import { useNotificationSound } from "@/hooks/useNotificationSound";

const PomodoroTimer = () => {
  const [mode, setMode] = useState<"focus" | "break">("focus");
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const hasPlayedSound = useRef(false);

  const timer = useTimer({
    initialMinutes: mode === "focus" ? focusMinutes : breakMinutes,
  });

  const { playSound } = useNotificationSound();

  // Play sound when timer completes
  useEffect(() => {
    if (timer.isComplete && !hasPlayedSound.current) {
      playSound();
      hasPlayedSound.current = true;
    }
    if (!timer.isComplete) {
      hasPlayedSound.current = false;
    }
  }, [timer.isComplete, playSound]);

  // Update timer when mode changes
  useEffect(() => {
    if (!timer.isRunning) {
      timer.setTime(mode === "focus" ? focusMinutes : breakMinutes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const handleModeChange = (newMode: "focus" | "break") => {
    setMode(newMode);
    timer.reset(newMode === "focus" ? focusMinutes : breakMinutes);
  };

  const handleReset = () => {
    timer.reset(mode === "focus" ? focusMinutes : breakMinutes);
  };

  const handleFocusChange = (minutes: number) => {
    setFocusMinutes(minutes);
    if (mode === "focus" && !timer.isRunning) {
      timer.setTime(minutes);
    }
  };

  const handleBreakChange = (minutes: number) => {
    setBreakMinutes(minutes);
    if (mode === "break" && !timer.isRunning) {
      timer.setTime(minutes);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="absolute top-8 left-8">
        <Logo />
      </div>

      <div className="absolute top-8 right-8">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center gap-12">
        <ModeSelector
          mode={mode}
          onModeChange={handleModeChange}
          disabled={timer.isRunning}
        />

        <div className="flex flex-col items-center gap-2">
          <TimerDisplay minutes={timer.minutes} seconds={timer.seconds} />
          {timer.isComplete && (
            <p className="text-primary font-medium">{`Time's up!`}</p>
          )}
        </div>

        <TimerControls
          isRunning={timer.isRunning}
          onStart={timer.start}
          onPause={timer.pause}
          onReset={handleReset}
        />

        <TimeSettings
          focusMinutes={focusMinutes}
          breakMinutes={breakMinutes}
          onFocusChange={handleFocusChange}
          onBreakChange={handleBreakChange}
          disabled={timer.isRunning}
        />
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-3">
        <TestSoundButton onTest={playSound} />
        <p className="text-sm text-muted-foreground">
          Stay focused. Stay calm.
        </p>
      </div>
    </main>
  );
};

export default PomodoroTimer;
