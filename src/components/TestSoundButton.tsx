import { Volume2 } from "lucide-react";
import { motion } from "framer-motion";

interface TestSoundButtonProps {
  onTest: () => void;
}

const TestSoundButton = ({ onTest }: TestSoundButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onTest}
      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      <Volume2 className="w-3 h-3" />
      Test sound
    </motion.button>
  );
};

export default TestSoundButton;
