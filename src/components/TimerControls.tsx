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
    <div className="flex items-center gap-6">
      {/* Main Action Button */}
      {isRunning ? (
        <Button
          size="lg"
          onClick={onPause}
          className="h-14 w-[150px] rounded-full text-base font-semibold transition-all duration-150 active:scale-95 shadow-lg hover:shadow-xl"
        >
          <Pause className="w-5 h-5 mr-2" />
          Pause
        </Button>
      ) : (
        <Button
          size="lg"
          onClick={onStart}
          className="h-14 w-[150px] rounded-full text-base font-semibold transition-all duration-150 active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-xl"
        >
          <Play className="w-5 h-5 mr-2 ml-0.5" />
          Start
        </Button>
      )}

      {/* Reset Button */}
      <Button
        variant="outline"
        size="lg"
        onClick={onReset}
        className="h-14 w-[150px] rounded-full text-base font-semibold transition-all duration-150 active:scale-[0.98] cursor-pointer hover:bg-muted"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset
      </Button>
    </div>
  );
};

export default TimerControls;
