import { Input } from "@/components/ui/input";

interface TimeSettingsProps {
  focusMinutes: number;
  breakMinutes: number;
  onFocusChange: (minutes: number) => void;
  onBreakChange: (minutes: number) => void;
  disabled: boolean;
}

const TimeSettings = ({
  focusMinutes,
  breakMinutes,
  onFocusChange,
  onBreakChange,
  disabled,
}: TimeSettingsProps) => {
  const handleChange = (value: string, setter: (minutes: number) => void) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1 && num <= 120) {
      setter(num);
    }
  };

  return (
    <div className="flex items-center gap-6 text-sm">
      <div className="flex items-center gap-2">
        <label className="text-muted-foreground">Focus</label>
        <Input
          type="number"
          min={1}
          max={120}
          value={focusMinutes}
          onChange={(e) => handleChange(e.target.value, onFocusChange)}
          disabled={disabled}
          className="w-16 h-8 text-center"
        />
        <span className="text-muted-foreground">min</span>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-muted-foreground">Break</label>
        <Input
          type="number"
          min={1}
          max={120}
          value={breakMinutes}
          onChange={(e) => handleChange(e.target.value, onBreakChange)}
          disabled={disabled}
          className="w-16 h-8 text-center"
        />
        <span className="text-muted-foreground">min</span>
      </div>
    </div>
  );
};

export default TimeSettings;
