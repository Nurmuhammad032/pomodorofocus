import { Input } from "@/components/ui/input";

interface TimeSettingsProps {
  focusMinutes: number;
  breakMinutes: number;
  longBreakMinutes: number;
  sessionsBeforeLongBreak: number;
  onFocusChange: (minutes: number) => void;
  onBreakChange: (minutes: number) => void;
  onLongBreakChange: (minutes: number) => void;
  onSessionsBeforeLongBreakChange: (sessions: number) => void;
  disabled: boolean;
}

const TimeSettings = ({
  focusMinutes,
  breakMinutes,
  longBreakMinutes,
  sessionsBeforeLongBreak,
  onFocusChange,
  onBreakChange,
  onLongBreakChange,
  onSessionsBeforeLongBreakChange,
  disabled,
}: TimeSettingsProps) => {
  const handleChange = (value: string, setter: (minutes: number) => void) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1 && num <= 120) {
      setter(num);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Duration Settings */}
      <div className="flex items-end gap-8 text-sm">
        <div className="flex flex-col items-center gap-2">
          <label className="text-xs text-muted-foreground font-medium">
            Focus
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={1}
              max={120}
              value={focusMinutes}
              onChange={(e) => handleChange(e.target.value, onFocusChange)}
              disabled={disabled}
              className="w-20 h-10 text-center text-base font-semibold rounded-lg border-2"
            />
            <span className="text-muted-foreground text-xs">min</span>
          </div>
        </div>

        <div className="h-8 w-px bg-border" />

        <div className="flex flex-col items-center gap-2">
          <label className="text-xs text-muted-foreground font-medium">
            Break
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={1}
              max={120}
              value={breakMinutes}
              onChange={(e) => handleChange(e.target.value, onBreakChange)}
              disabled={disabled}
              className="w-20 h-10 text-center text-base font-semibold rounded-lg border-2"
            />
            <span className="text-muted-foreground text-xs">min</span>
          </div>
        </div>

        <div className="h-8 w-px bg-border" />

        <div className="flex flex-col items-center gap-2">
          <label className="text-xs text-muted-foreground font-medium">
            Long Break
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={1}
              max={120}
              value={longBreakMinutes}
              onChange={(e) => handleChange(e.target.value, onLongBreakChange)}
              disabled={disabled}
              className="w-20 h-10 text-center text-base font-semibold rounded-lg border-2"
            />
            <span className="text-muted-foreground text-xs">min</span>
          </div>
        </div>
      </div>

      {/* Long Break Interval Setting */}
      <div className="flex flex-col items-center gap-2 pt-4 border-t border-border">
        <label className="text-xs text-muted-foreground font-medium">
          Long break after
        </label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            min={1}
            max={10}
            value={sessionsBeforeLongBreak}
            onChange={(e) =>
              handleChange(e.target.value, onSessionsBeforeLongBreakChange)
            }
            disabled={disabled}
            className="w-20 h-10 text-center text-base font-semibold rounded-lg border-2"
          />
          <span className="text-muted-foreground text-xs">sessions</span>
        </div>
      </div>
    </div>
  );
};

export default TimeSettings;
