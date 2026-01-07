"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PomodoroFocus</h3>
            <p className="text-sm text-muted-foreground">
              A simple, elegant timer to help you master the Pomodoro Technique
              and boost your productivity.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-primary transition-colors"
                >
                  Start Timer
                </button>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  About Pomodoro Technique
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
            for productivity enthusiasts
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} PomodoroFocus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
