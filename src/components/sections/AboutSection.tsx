import { Timer, Zap, Moon } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What is PomodoroFocus?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A beautifully simple Pomodoro timer designed to help you master your
            time, boost productivity, and maintain focus in a distraction-filled
            world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Timer,
              title: "Simple & Effective",
              description:
                "No complex features. Just a clean timer that follows the proven Pomodoro Technique to help you focus on what matters.",
            },
            {
              icon: Zap,
              title: "Customizable Sessions",
              description:
                "Adjust focus and break durations to match your workflow. Whether it's 25 or 50 minutes, you're in control.",
            },
            {
              icon: Moon,
              title: "Beautiful Design",
              description:
                "A calming interface with dark mode support that won't strain your eyes during long work sessions.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
