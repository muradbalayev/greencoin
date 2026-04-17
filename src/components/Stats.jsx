"use client";

import { Users, Zap, BarChart3, Globe } from "lucide-react";

const stats = [
  {
    number: "100M+",
    label: "retail investor (qlobal bazar)",
    icon: Users,
  },
  {
    number: "3 san",
    label: "report generasiya vaxtı",
    icon: Zap,
  },
  {
    number: "2",
    label: "bazar — Səhm + Kripto",
    icon: BarChart3,
  },
  {
    number: "24/7",
    label: "Telegram bot aktiv",
    icon: Globe,
  },
];

export default function Stats() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            Rəqəmlərlə
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-foreground tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            GreenCoin nəticələri
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bento-card bg-card border border-card-border rounded-2xl p-6 text-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.number}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
