import {
  CheckCircle2,
  BellOff,
  Target,
  ListTodo,
  Battery,
  Brain,
} from "lucide-react";

export default function BestPracticesSection() {
  const practices = [
    {
      icon: Target,
      title: "Single-Task Focus",
      description:
        "Work on one task at a time. Multitasking reduces effectiveness and increases mental fatigue.",
      color: "text-green-500",
    },
    {
      icon: BellOff,
      title: "Eliminate Distractions",
      description:
        "Turn off notifications, close unnecessary tabs, and create a quiet environment before starting.",
      color: "text-blue-500",
    },
    {
      icon: ListTodo,
      title: "Plan Your Day",
      description:
        "List your tasks at the start of the day and estimate how many pomodoros each will take.",
      color: "text-purple-500",
    },
    {
      icon: Battery,
      title: "Respect Your Breaks",
      description:
        "Use breaks to truly rest. Step away from your desk, stretch, or take a short walk.",
      color: "text-orange-500",
    },
    {
      icon: Brain,
      title: "Review & Reflect",
      description:
        "At the end of each day, review what you accomplished and adjust your approach.",
      color: "text-pink-500",
    },
    {
      icon: CheckCircle2,
      title: "Track Progress",
      description:
        "Keep a simple log of completed pomodoros to visualize your productivity and stay motivated.",
      color: "text-teal-500",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Best Practices for Maximum Productivity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these proven strategies to get the most out of your Pomodoro
            sessions and achieve deep, focused work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice) => (
            <div
              key={practice.title}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <practice.icon
                className={`w-10 h-10 ${practice.color} mb-4`}
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
              <p className="text-muted-foreground text-sm">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

