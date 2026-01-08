import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechniqueSection from "@/components/sections/TechniqueSection";
import BestPracticesSection from "@/components/sections/BestPracticesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "PomodoroFocus Timer - Boost Productivity with the Pomodoro Technique",
  description:
    "Online Pomodoro timer to help you stay focused and productive. Master the Pomodoro Technique with customizable 25-minute focus sessions and breaks. Improve time management, prevent burnout, and achieve deep work.",
  keywords: [
    "pomodoro timer",
    "pomodoro technique",
    "productivity timer",
    "focus timer",
    "time management",
    "work timer",
    "study timer",
    "productivity tool",
    "deep work",
    "time blocking",
    "focus technique",
    "break timer",
    "work break timer",
    "online timer",
  ],
  openGraph: {
    title: "PomodoroFocus Timer - Boost Your Productivity",
    description:
      "Online Pomodoro timer with the proven technique to improve focus, prevent burnout, and boost productivity. Start your 25-minute focus session now.",
    type: "website",
    siteName: "PomodoroFocus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PomodoroFocus Timer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PomodoroFocus Timer - Boost Your Productivity",
    description:
      "Pomodoro timer to help you focus better and work smarter. Start your productive session now!",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://pomodorofocus.co",
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <TechniqueSection />
      <BestPracticesSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
