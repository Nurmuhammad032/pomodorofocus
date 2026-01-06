import { Metadata } from "next";
import PomodoroTimer from "@/components/PomodoroTimer";

export const metadata: Metadata = {
  title: "Pomodoro Focus - Stay Focused, Stay Productive",
  description:
    "A simple and elegant Pomodoro timer to help you stay focused and productive. Use the Pomodoro Technique to manage your time effectively with customizable focus and break sessions.",
  keywords: [
    "pomodoro",
    "timer",
    "productivity",
    "focus",
    "time management",
    "pomodoro technique",
  ],
  openGraph: {
    title: "Pomodoro Focus - Stay Focused, Stay Productive",
    description:
      "A simple and elegant Pomodoro timer to help you stay focused and productive.",
    type: "website",
  },
};

export default function Home() {
  return <PomodoroTimer />;
}
