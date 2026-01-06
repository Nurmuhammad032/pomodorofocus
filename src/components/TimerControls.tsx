import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const TimerControls = ({
  isRunning,
  onStart,
  onPause,
  onReset,
}: TimerControlsProps) => {
  return (
    <div className="flex items-center gap-4">
      {isRunning ? (
        <Button size="lg" onClick={onPause} className="w-14 h-14 rounded-full">
          <Pause className="w-6 h-6" />
        </Button>
      ) : (
        <Button size="lg" onClick={onStart} className="w-14 h-14 rounded-full">
          <Play className="w-6 h-6 ml-0.5" />
        </Button>
      )}
      <Button
        variant="ghost"
        size="lg"
        onClick={onReset}
        className="w-14 h-14 rounded-full"
      >
        <RotateCcw className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default TimerControls;
