"use client";

import { Check, Info, Star, Zap, Crown, Infinity } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Pulsuz",
    price: "0",
    period: "",
    credits: "10 kredit/ay",
    icon: Star,
    popular: false,
    features: [
      "4 saatlıq reportlar",
      "Əsas analiz",
      "Telegram bot",
      "Səhm + Kripto",
    ],
  },
  {
    name: "Starter",
    price: "9",
    period: "/ay",
    credits: "60 kredit/ay",
    icon: Zap,
    popular: false,
    features: [
      "4 saat + həftəlik reportlar",
      "Texniki analiz",
      "Xəbər analizi",
      "Prioritet olmayan",
    ],
  },
  {
    name: "Pro",
    price: "19",
    period: "/ay",
    credits: "200 kredit/ay",
    icon: Crown,
    popular: true,
    features: [
      "Bütün report növləri",
      "Dərin AI analiz",
      "Xəbər + sentiment",
      "Prioritet queue",
    ],
  },
  {
    name: "Unlimited",
    price: "49",
    period: "/ay",
    credits: "Limitsiz",
    icon: Infinity,
    popular: false,
    features: [
      "Hər şey Pro-da olan",
      "Limitsiz reportlar",
      "Erkən xüsusiyyətlər",
      "VIP dəstək",
    ],
  },
];

export default function Pricing() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            Qiymətlər
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-foreground tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Sənə uyğun planı seç
          </h2>
          {/* Credit info tooltip */}
          <div className="inline-flex items-center gap-1.5 relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
            >
              <Info className="w-3.5 h-3.5" />
              Kredit sistemi nədir?
            </button>
            {showTooltip && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-foreground text-white text-xs rounded-xl px-4 py-3 w-56 z-10 shadow-lg">
                <p className="font-semibold mb-1">Kredit sistemi:</p>
                <p>4 saatlıq report = 1 kredit</p>
                <p>Həftəlik report = 2 kredit</p>
                <p>1 aylıq report = 5 kredit</p>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rotate-45"></div>
              </div>
            )}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bento-card bg-card rounded-2xl p-6 flex flex-col relative ${
                plan.popular
                  ? "border-2 border-primary shadow-[0_4px_24px_rgba(26,107,60,0.12)]"
                  : "border border-card-border"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  Ən populyar
                </div>
              )}

              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                plan.popular ? "bg-primary text-white" : "bg-primary/10 text-primary"
              }`}>
                <plan.icon className="w-5 h-5" />
              </div>

              {/* Plan name */}
              <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
              <p className="text-xs text-muted mb-5">{plan.credits}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                <span className="text-sm text-muted">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-primary" : "text-accent"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://t.me/GreenCoinBot"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                    : "bg-background border border-card-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {plan.price === "0" ? "Pulsuz başla" : "Planı seç"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
