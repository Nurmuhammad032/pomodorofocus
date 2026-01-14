"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SettingsDialogContentProps {
  focusMinutes: number;
  breakMinutes: number;
  longBreakMinutes: number;
  sessionsBeforeLongBreak: number;
  onFocusChange: (minutes: number) => void;
  onBreakChange: (minutes: number) => void;
  onLongBreakChange: (minutes: number) => void;
  onSessionsBeforeLongBreakChange: (sessions: number) => void;
  disabled?: boolean;
  onClose?: () => void;
}

interface Preset {
  name: string;
  focus: number;
  break: number;
  longBreak: number;
  description: string;
}

const PRESETS: Preset[] = [
  {
    name: "Classic",
    focus: 25,
    break: 5,
    longBreak: 15,
    description: "Traditional Pomodoro",
  },
  {
    name: "Extended",
    focus: 50,
    break: 10,
    longBreak: 30,
    description: "Deep work sessions",
  },
  {
    name: "Short Sprint",
    focus: 15,
    break: 3,
    longBreak: 10,
    description: "Quick focus bursts",
  },
];

export default function SettingsDialogContent({
  focusMinutes,
  breakMinutes,
  longBreakMinutes,
  sessionsBeforeLongBreak,
  onFocusChange,
  onBreakChange,
  onLongBreakChange,
  onSessionsBeforeLongBreakChange,
  disabled,
  onClose,
}: SettingsDialogContentProps) {
  const handlePresetClick = (preset: Preset) => {
    onFocusChange(preset.focus);
    onBreakChange(preset.break);
    onLongBreakChange(preset.longBreak);
  };

  const isPresetActive = (preset: Preset) => {
    return (
      focusMinutes === preset.focus &&
      breakMinutes === preset.break &&
      longBreakMinutes === preset.longBreak
    );
  };

  return (
    <div className="space-y-6">
      {/* Presets Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          Quick Presets
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handlePresetClick(preset)}
              disabled={disabled}
              className={`
                relative p-3 rounded-lg border-2 transition-all duration-150 active:scale-95
                ${
                  isPresetActive(preset)
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-card hover:border-primary/50 hover:bg-accent/50 text-foreground"
                }
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
              `}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-semibold">{preset.name}</span>
                <span className="text-xs text-muted-foreground">
                  {preset.focus}/{preset.break}
                </span>
                <span className="text-[10px] text-muted-foreground/70 text-center leading-tight">
                  {preset.description}
                </span>
              </div>
              {isPresetActive(preset) && (
                <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Custom Settings
          </span>
        </div>
      </div>

      {/* Custom Settings */}
      <div className="space-y-3">
        {/* Focus Time */}
        <div className="flex items-center justify-between gap-4">
          <label
            htmlFor="focus-time"
            className="text-sm font-medium text-foreground min-w-[140px]"
          >
            Focus Time
          </label>
          <div className="flex items-center gap-2">
            <Input
              id="focus-time"
              type="number"
              min="1"
              max="120"
              value={focusMinutes}
              onChange={(e) => onFocusChange(Number(e.target.value))}
              disabled={disabled}
              className="w-20 text-center"
            />
            <span className="text-sm text-muted-foreground">min</span>
          </div>
        </div>

        {/* Break Time */}
        <div className="flex items-center justify-between gap-4">
          <label
            htmlFor="break-time"
            className="text-sm font-medium text-foreground min-w-[140px]"
          >
            Break Time
          </label>
          <div className="flex items-center gap-2">
            <Input
              id="break-time"
              type="number"
              min="1"
              max="60"
              value={breakMinutes}
              onChange={(e) => onBreakChange(Number(e.target.value))}
              disabled={disabled}
              className="w-20 text-center"
            />
            <span className="text-sm text-muted-foreground">min</span>
          </div>
        </div>

        {/* Long Break Time */}
        <div className="flex items-center justify-between gap-4">
          <label
            htmlFor="long-break-time"
            className="text-sm font-medium text-foreground min-w-[140px]"
          >
            Long Break Time
          </label>
          <div className="flex items-center gap-2">
            <Input
              id="long-break-time"
              type="number"
              min="1"
              max="120"
              value={longBreakMinutes}
              onChange={(e) => onLongBreakChange(Number(e.target.value))}
              disabled={disabled}
              className="w-20 text-center"
            />
            <span className="text-sm text-muted-foreground">min</span>
          </div>
        </div>

        {/* Sessions Before Long Break */}
        <div className="flex items-center justify-between gap-4">
          <label
            htmlFor="sessions-count"
            className="text-sm font-medium text-foreground min-w-[140px]"
          >
            Sessions Until Long Break
          </label>
          <div className="flex items-center gap-2">
            <Input
              id="sessions-count"
              type="number"
              min="1"
              max="10"
              value={sessionsBeforeLongBreak}
              onChange={(e) =>
                onSessionsBeforeLongBreakChange(Number(e.target.value))
              }
              disabled={disabled}
              className="w-20 text-center"
            />
            <span className="text-sm text-muted-foreground">sessions</span>
          </div>
        </div>
      </div>

      {/* Info Text */}
      {/* <div className="pt-2">
        <p className="text-xs text-muted-foreground text-center">
          💡 Changes apply to the next session
        </p>
      </div> */}
    </div>
  );
}
