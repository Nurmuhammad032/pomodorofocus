interface ModeSelectorProps {
  mode: 'focus' | 'break' | 'longBreak';
  onModeChange: (mode: 'focus' | 'break' | 'longBreak') => void;
  disabled: boolean;
}

const ModeSelector = ({ mode, onModeChange, disabled }: ModeSelectorProps) => {
  return (
    <div className="inline-flex items-center gap-2 p-1.5 bg-muted/50 rounded-full border border-border/50">
      <button
        onClick={() => onModeChange('focus')}
        disabled={disabled}
        className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
          mode === 'focus'
            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        Focus
      </button>
      <button
        onClick={() => onModeChange('break')}
        disabled={disabled}
        className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
          mode === 'break'
            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        Break
      </button>
      <button
        onClick={() => onModeChange('longBreak')}
        disabled={disabled}
        className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
          mode === 'longBreak'
            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        Long Break
      </button>
    </div>
  );
};

export default ModeSelector;
