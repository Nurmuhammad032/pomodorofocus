interface ModeSelectorProps {
  mode: 'focus' | 'break';
  onModeChange: (mode: 'focus' | 'break') => void;
  disabled: boolean;
}

const ModeSelector = ({ mode, onModeChange, disabled }: ModeSelectorProps) => {
  return (
    <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg">
      <button
        onClick={() => onModeChange('focus')}
        disabled={disabled}
        className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
          mode === 'focus'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Focus
      </button>
      <button
        onClick={() => onModeChange('break')}
        disabled={disabled}
        className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
          mode === 'break'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Break
      </button>
    </div>
  );
};

export default ModeSelector;
