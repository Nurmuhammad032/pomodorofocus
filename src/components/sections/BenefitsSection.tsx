"use client";

import { TrendingUp, Sparkles, Shield, Heart } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Use the Pomodoro Technique?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform the way you work with these science-backed benefits of
            structured time management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Boost Productivity",
              description:
                "Breaking work into focused intervals helps you accomplish more in less time. The urgency of the timer creates a sense of productive pressure.",
              stats: "Studies show up to 25% productivity increase",
            },
            {
              icon: Sparkles,
              title: "Improve Focus",
              description:
                "By committing to short, focused bursts, you train your brain to concentrate deeply and resist distractions more effectively.",
              stats: "Enhanced attention span within 2 weeks",
            },
            {
              icon: Shield,
              title: "Prevent Burnout",
              description:
                "Regular breaks prevent mental exhaustion. The technique naturally paces your energy throughout the day, keeping you fresh and motivated.",
              stats: "Reduced mental fatigue by 40%",
            },
            {
              icon: Heart,
              title: "Better Work-Life Balance",
              description:
                "Clear work boundaries and scheduled breaks help you maintain a healthy separation between work time and personal time.",
              stats: "Improved overall well-being reported",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4">{benefit.description}</p>
              <div className="text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-lg inline-block">
                {benefit.stats}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/10 p-8 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Productivity?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of professionals, students, and creators who use the
            Pomodoro Technique to achieve their goals and maintain focus.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your First Session
          </button>
        </div>
      </div>
    </section>
  );
}

