import { Circle, Coffee, RotateCcw, Target } from "lucide-react";

export default function TechniqueSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Pomodoro Technique
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Developed by Francesco Cirillo in the late 1980s, the Pomodoro
            Technique is a time management method that uses a timer to break work
            into focused intervals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              step: "1",
              title: "Choose a Task",
              description:
                "Pick a task you want to work on. It can be anything from writing, coding, to studying.",
            },
            {
              icon: Circle,
              step: "2",
              title: "Set Timer (25 min)",
              description:
                "Start the timer and commit to working without interruptions for 25 minutes.",
            },
            {
              icon: Coffee,
              step: "3",
              title: "Take a Break (5 min)",
              description:
                "When the timer rings, take a short 5-minute break. Step away from your work.",
            },
            {
              icon: RotateCcw,
              step: "4",
              title: "Repeat & Rest",
              description:
                "After 4 pomodoros, take a longer break of 15-30 minutes to recharge.",
            },
          ].map((step) => (
            <div
              key={step.step}
              className="bg-card p-6 rounded-2xl border border-border relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {step.step}
              </div>
              <step.icon className="w-10 h-10 text-primary mb-4 relative z-10" />
              <h3 className="text-xl font-semibold mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

