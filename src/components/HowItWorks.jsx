"use client";

import { MessageSquare, Keyboard, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Telegram botunu aç",
    desc: "GreenCoin Bot-u Telegram-da tap və /start yazaraq başla.",
    icon: MessageSquare,
    wide: true,
  },
  {
    num: "2",
    title: "Aktiv adını yaz",
    desc: "TSLA, BTC, AAPL — istənilən səhm və ya kripto adını göndər.",
    icon: Keyboard,
    wide: false,
  },
  {
    num: "3",
    title: "Hesabatını al",
    desc: "Saniyələr içində dərin AI hesabatını birbaşa chat-da oxu.",
    icon: FileText,
    wide: false,
    showBadge: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            3 sadə addım
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-foreground tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Necə işləyir?
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`bento-card bg-card border border-card-border rounded-2xl p-6 lg:p-8 relative overflow-hidden group ${
                step.wide ? "lg:col-span-2" : ""
              }`}
            >
              {/* Number badge */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <span className="text-primary font-bold text-sm">{step.num}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>

              {/* Show BUY badge on step 3 */}
              {step.showBadge && (
                <div className="mt-5 inline-flex items-center gap-2">
                  <span className="px-3 py-1 bg-accent/15 text-primary text-xs font-bold rounded-full">BUY</span>
                  <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-bold rounded-full">SELL</span>
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-600 text-xs font-bold rounded-full">HOLD</span>
                </div>
              )}

              {/* Icon */}
              <step.icon className="absolute top-6 right-6 w-5 h-5 text-card-border group-hover:text-primary/30 transition-colors" />

              {/* Arrow connector for wide card */}
              {step.wide && (
                <div className="absolute right-6 bottom-6 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
