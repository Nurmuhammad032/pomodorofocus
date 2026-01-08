interface TimerDisplayProps {
  minutes: number;
  seconds: number;
}

const TimerDisplay = ({ minutes, seconds }: TimerDisplayProps) => {
  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
      
      {/* Timer */}
      <div className="relative font-mono text-[clamp(4rem,15vw,10rem)] font-bold tracking-tighter text-foreground select-none tabular-nums">
        {formatTime(minutes)}
        <span className="text-primary/40">:</span>
        {formatTime(seconds)}
      </div>
    </div>
  );
};

export default TimerDisplay;
