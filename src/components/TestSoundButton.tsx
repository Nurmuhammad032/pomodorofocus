import { Volume2 } from "lucide-react";

interface TestSoundButtonProps {
  onTest: () => void;
}

const TestSoundButton = ({ onTest }: TestSoundButtonProps) => {
  return (
    <button
      onClick={onTest}
      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      <Volume2 className="w-3 h-3" />
      Test sound
    </button>
  );
};

export default TestSoundButton;
