interface TimerDisplayProps {
  minutes: number;
  seconds: number;
}

const TimerDisplay = ({ minutes, seconds }: TimerDisplayProps) => {
  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="font-mono text-8xl md:text-9xl font-bold tracking-tight text-foreground select-none">
      {formatTime(minutes)}
      <span className="text-muted-foreground">:</span>
      {formatTime(seconds)}
    </div>
  );
};

export default TimerDisplay;
