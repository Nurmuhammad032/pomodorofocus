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
  const [mode, setMode] = useState<"focus" | "break" | "longBreak">("focus");
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [longBreakMinutes, setLongBreakMinutes] = useState(15);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [sessionsBeforeLongBreak, setSessionsBeforeLongBreak] = useState(3);
  const [currentSessionCount, setCurrentSessionCount] = useState(0);
  const hasPlayedSound = useRef(false);
  const wasRunning = useRef(false);

  const getCurrentMinutes = () => {
    if (mode === "focus") return focusMinutes;
    if (mode === "break") return breakMinutes;
    return longBreakMinutes;
  };

  const timer = useTimer({
    initialMinutes: getCurrentMinutes(),
  });

  const { playSound } = useNotificationSound();

  // Play sound when timer completes, count pomodoros, and auto-switch modes
  useEffect(() => {
    if (timer.isComplete && !hasPlayedSound.current) {
      playSound();
      hasPlayedSound.current = true;

      if (wasRunning.current) {
        // Auto-switch logic
        if (mode === "focus") {
          // Increment counters
          setCompletedPomodoros((prev) => prev + 1);
          const newCount = currentSessionCount + 1;
          setCurrentSessionCount(newCount);

          // Check if it's time for long break
          if (newCount >= sessionsBeforeLongBreak) {
            setMode("longBreak");
            timer.reset(longBreakMinutes);
            setCurrentSessionCount(0); // Reset cycle
          } else {
            setMode("break");
            timer.reset(breakMinutes);
          }
        } else if (mode === "break" || mode === "longBreak") {
          // After break, go back to focus
          setMode("focus");
          timer.reset(focusMinutes);
        }
      }
      wasRunning.current = false;
    }
    if (!timer.isComplete) {
      hasPlayedSound.current = false;
    }
  }, [
    timer.isComplete,
    playSound,
    mode,
    currentSessionCount,
    sessionsBeforeLongBreak,
    focusMinutes,
    breakMinutes,
    longBreakMinutes,
    timer,
  ]);

  // Track if timer was running (to prevent counting on manual resets)
  useEffect(() => {
    if (timer.isRunning) {
      wasRunning.current = true;
    }
  }, [timer.isRunning]);

  // Update timer when mode changes
  useEffect(() => {
    if (!timer.isRunning) {
      timer.setTime(getCurrentMinutes());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // Warn before leaving if timer is running
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (timer.isRunning) {
        e.preventDefault();
        e.returnValue = ""; // Chrome requires returnValue to be set
        return "Timer is running. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [timer.isRunning]);

  // Update document title with timer
  useEffect(() => {
    const formattedMinutes = String(timer.minutes).padStart(2, "0");
    const formattedSeconds = String(timer.seconds).padStart(2, "0");

    if (timer.isRunning) {
      document.title = `${formattedMinutes}:${formattedSeconds} - PomodoroFocus`;
    } else if (timer.isComplete) {
      document.title = "Time's up! - PomodoroFocus";
    } else {
      document.title = "PomodoroFocus Timer - Boost Productivity";
    }
  }, [timer.isRunning, timer.minutes, timer.seconds, timer.isComplete, mode]);

  const handleModeChange = (newMode: "focus" | "break" | "longBreak") => {
    setMode(newMode);
    const minutes =
      newMode === "focus"
        ? focusMinutes
        : newMode === "break"
        ? breakMinutes
        : longBreakMinutes;
    timer.reset(minutes);
  };

  const handleReset = () => {
    timer.reset(getCurrentMinutes());
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

  const handleLongBreakChange = (minutes: number) => {
    setLongBreakMinutes(minutes);
    if (mode === "longBreak" && !timer.isRunning) {
      timer.setTime(minutes);
    }
  };

  const handleSessionsBeforeLongBreakChange = (sessions: number) => {
    setSessionsBeforeLongBreak(sessions);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Top Bar */}
      <div className="absolute top-6 left-6">
        <Logo />
      </div>
      <div className="absolute top-6 right-6 flex items-center gap-4">
        {/* Pomodoro Counter with Progress */}
        <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                Completed:
              </span>
              <span className="text-lg font-bold text-primary tabular-nums">
                #{completedPomodoros}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              Session: {currentSessionCount}/{sessionsBeforeLongBreak}
            </span>
          </div>
        </div>
        <ThemeToggle />
      </div>

      {/* Main Timer Area */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-12">
        {/* Mode Tabs */}
        <div className="w-full flex flex-col items-center gap-4">
          <ModeSelector
            mode={mode}
            onModeChange={handleModeChange}
            disabled={timer.isRunning}
          />
          <p className="text-sm text-muted-foreground">
            {mode === "focus"
              ? "Time to focus on your task"
              : mode === "break"
              ? "Time for a short break"
              : "Time for a long break"}
          </p>
        </div>

        {/* Timer Display */}
        <div className="flex flex-col items-center gap-6">
          <TimerDisplay minutes={timer.minutes} seconds={timer.seconds} />
          {timer.isComplete && (
            <div className="flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-2xl font-semibold text-primary">
                {"Time's up!"}
              </p>
              <p className="text-muted-foreground">
                Great work! Take a moment.
              </p>
            </div>
          )}
        </div>

        {/* Controls */}
        <TimerControls
          isRunning={timer.isRunning}
          onStart={timer.start}
          onPause={timer.pause}
          onReset={handleReset}
        />

        {/* Settings */}
        <div className="flex flex-col items-center gap-3">
          <TimeSettings
            focusMinutes={focusMinutes}
            breakMinutes={breakMinutes}
            longBreakMinutes={longBreakMinutes}
            sessionsBeforeLongBreak={sessionsBeforeLongBreak}
            onFocusChange={handleFocusChange}
            onBreakChange={handleBreakChange}
            onLongBreakChange={handleLongBreakChange}
            onSessionsBeforeLongBreakChange={
              handleSessionsBeforeLongBreakChange
            }
            disabled={timer.isRunning}
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-6 flex items-center gap-4">
        <TestSoundButton onTest={playSound} />
      </div>
    </main>
  );
};

export default PomodoroTimer;
