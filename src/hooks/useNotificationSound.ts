import { useCallback, useRef } from "react";

export const useNotificationSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playSound = useCallback(() => {
    // Create or reuse AudioContext
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    const now = ctx.currentTime;

    // Create a gentle, calm notification tone
    const playTone = (
      frequency: number,
      startTime: number,
      duration: number
    ) => {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, startTime);

      // Gentle envelope
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
      gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };

    // Play a soft two-tone chime
    playTone(523.25, now, 0.3); // C5
    playTone(659.25, now + 0.15, 0.4); // E5
    playTone(783.99, now + 0.35, 0.5); // G5
  }, []);

  return { playSound };
};
