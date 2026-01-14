import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title:
    "What is Pomodoro Technique? | Complete Guide to the Tomato Timer Method",
  description:
    "Learn how the Pomodoro Technique can transform your productivity. Discover the science behind the 25-minute work intervals, why it stops burnout, and how to implement this simple time management method effectively.",
  keywords: [
    "what is pomodoro",
    "pomodoro technique",
    "pomodoro method",
    "tomato timer",
    "Francesco Cirillo",
    "time management technique",
    "focus technique",
    "productivity method",
    "25 minute timer",
    "work intervals",
    "beat procrastination",
    "how pomodoro works",
    "pomodoro benefits",
    "cognitive refreshment",
  ],
  openGraph: {
    title: "What is Pomodoro Technique? Complete Guide",
    description:
      "Discover how the Pomodoro Technique uses 25-minute work intervals to boost focus, beat procrastination, and prevent burnout. Learn the science-backed method used by millions worldwide.",
    type: "article",
    siteName: "PomodoroFocus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pomodoro Technique Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Pomodoro Technique? Complete Guide",
    description:
      "Learn the 25-minute productivity method that helps millions focus better and work smarter.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://pomodorofocus.co/what-is-pomodoro",
  },
};

export default function WhatIsPomodoroPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Timer
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            The {`"Tomato Timer"`} Trick: Why Pomodoro is a Game Changer
          </h1>

          {/* Introduction */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We&apos;ve all been there: you have a massive project due, but
            instead of starting, you&apos;ve spent the last hour researching why
            pigeons bob their heads or reorganizing your desktop icons.
          </p>

          <p className="text-lg text-foreground/90 mb-8">
            It&apos;s called the &quot;productivity guilt spiral.&quot; But what
            if I told you that a kitchen timer shaped like a tomato could be the
            cure?
          </p>

          {/* What is Pomodoro */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
            What exactly is Pomodoro?
          </h2>

          <p className="text-lg text-foreground/90 mb-6">
            The Pomodoro Technique isn&apos;t some complex corporate strategy.
            It was invented in the 1980s by a student named Francesco Cirillo
            who was struggling to focus on his studies. He grabbed a
            tomato-shaped kitchen timer (hence the name <em>Pomodoro</em>,
            Italian for tomato), set it for 10 minutes, and tried to work
            without stopping.
          </p>

          {/* The Modern Recipe */}
          <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">
            The Modern Recipe:
          </h3>

          <ol className="space-y-4 mb-8">
            <li className="text-lg text-foreground/90">
              <strong className="text-foreground">Pick one task.</strong> Just
              one.
            </li>
            <li className="text-lg text-foreground/90">
              <strong className="text-foreground">
                Set a timer for 25 minutes.
              </strong>{" "}
              Work intensely until it rings.
            </li>
            <li className="text-lg text-foreground/90">
              <strong className="text-foreground">
                Take a 5-minute break.
              </strong>{" "}
              Walk away from your screen.
            </li>
            <li className="text-lg text-foreground/90">
              <strong className="text-foreground">Repeat.</strong> After four
              &quot;Pomodoros,&quot; take a longer 20–30 minute break.
            </li>
          </ol>

          {/* Main Benefit */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
            The Main Benefit: It Stops the &quot;Burnout Grind&quot;
          </h2>

          <p className="text-lg text-foreground/90 mb-6">
            The magic of Pomodoro isn&apos;t about working harder; it&apos;s
            about managing your brain&apos;s stamina.
          </p>

          <p className="text-lg text-foreground/90 mb-6">
            The biggest benefit is{" "}
            <strong className="text-primary font-semibold">
              Cognitive Refreshment
            </strong>
            . Our brains aren&apos;t built to focus for eight hours straight.
            When you know a break is coming in just 25 minutes, your brain stays
            alert. It turns a marathon into a series of short, manageable
            sprints.
          </p>

          {/* Why it works */}
          <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">
            Why it actually works:
          </h3>

          <ul className="space-y-4 mb-8">
            <li className="text-lg text-foreground/90">
              <strong className="text-foreground">
                It beats procrastination:
              </strong>{" "}
              Telling yourself &quot;I&apos;ll work for 25 minutes&quot; is much
              less scary than saying &quot;I need to finish this whole report
              today.&quot;
            </li>
            <li className="text-lg text-foreground/90">
              <strong className="text-foreground">
                It fights distractions:
              </strong>{" "}
              If you get a sudden urge to check Instagram, you tell yourself,
              &quot;Not now—I&apos;ve only got 10 minutes left on the
              clock.&quot;
            </li>
            <li className="text-lg text-foreground/90">
              <strong className="text-foreground">
                It creates a sense of urgency:
              </strong>{" "}
              That ticking clock keeps you moving instead of overthinking.
            </li>
          </ul>

          {/* Bottom Line */}
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
            The Bottom Line
          </h2>

          <p className="text-lg text-foreground/90 mb-8">
            You aren&apos;t a robot, so stop trying to work like one. Give the
            Pomodoro technique a shot today. You&apos;ll be surprised at how
            much you can actually get done when you give yourself permission to
            breathe every 25 minutes.
          </p>

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary/10 border border-primary/20 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to try it yourself?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your first Pomodoro session now with our timer.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-full transition-all duration-150 active:scale-95"
            >
              Start Timer →
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} PomodoroFocus. Built to help you focus
            better.
          </p>
        </div>
      </footer>
    </div>
  );
}
