"use client";

import { useEffect, useState } from "react";
import { Activity, Clock, Coins, TrendingUp, Zap } from "lucide-react";

function AnimatedTicker() {
  const tickers = [
    { name: "TSLA", price: "248.50", change: "+3.2%", up: true },
    { name: "AAPL", price: "189.84", change: "+1.1%", up: true },
    { name: "BTC", price: "67,240", change: "+5.8%", up: true },
    { name: "ETH", price: "3,521", change: "-0.4%", up: false },
    { name: "NVDA", price: "875.30", change: "+2.7%", up: true },
    { name: "AMZN", price: "186.50", change: "+0.9%", up: true },
  ];

  return (
    <div className="overflow-hidden mt-6 rounded-xl bg-background border border-card-border p-3">
      <div className="flex gap-6 animate-ticker whitespace-nowrap">
        {[...tickers, ...tickers].map((t, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold text-foreground">{t.name}</span>
            <span className="text-xs text-muted">${t.price}</span>
            <span className={`text-xs font-semibold ${t.up ? "text-accent" : "text-red-400"}`}>
              {t.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CountUpNumber({ target, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-primary font-bold">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Features() {
  const timeframes = [
    { label: "4 saat", active: false },
    { label: "1 həftə", active: true },
    { label: "1 ay", active: false },
  ];

  const assets = [
    { name: "TSLA", type: "Səhm" },
    { name: "AAPL", type: "Səhm" },
    { name: "BTC", type: "Kripto" },
    { name: "ETH", type: "Kripto" },
    { name: "NVDA", type: "Səhm" },
    { name: "SOL", type: "Kripto" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            Xüsusiyyətlər
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-foreground tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Niyə GreenCoin?
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Large card - Real-time data (2x2) */}
          <div className="bento-card bg-card border border-card-border rounded-2xl p-6 lg:p-8 lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Real-time məlumat</h3>
              <p className="text-sm text-muted leading-relaxed">
                TwelveData + News API integrasis ilə canlı bazar məlumatları və xəbər analizi.
              </p>
            </div>
            <AnimatedTicker />
          </div>

          {/* Medium card - 3 timeframes (1x2) */}
          <div className="bento-card bg-card border border-card-border rounded-2xl p-6 lg:col-span-2 lg:row-span-1">
            <div className="flex items-start justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">3 zaman aralığı</h3>
            <div className="flex gap-2">
              {timeframes.map((tf) => (
                <button
                  key={tf.label}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    tf.active
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-background border border-card-border text-muted hover:border-primary hover:text-primary"
                  }`}
                >
                  {tf.label}
                </button>
              ))}
            </div>
          </div>

          {/* Medium card - Stocks & Crypto (2x1) */}
          <div className="bento-card bg-card border border-card-border rounded-2xl p-6 lg:col-span-2 lg:row-span-1">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Coins className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Həm səhm, həm kripto</h3>
            <div className="flex flex-wrap gap-2">
              {assets.map((asset) => (
                <span
                  key={asset.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-card-border text-xs font-semibold text-foreground hover:border-primary transition-colors cursor-default"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${asset.type === "Kripto" ? "bg-accent" : "bg-primary"}`}></span>
                  {asset.name}
                </span>
              ))}
            </div>
          </div>

          {/* Small card - BUY signal (1x1) */}
          <div className="bento-card bg-card border border-card-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-3">Al / Sat / Saxla</h3>
            <span className="px-5 py-2 bg-accent/15 text-primary text-lg font-bold rounded-full">
              BUY ↑
            </span>
          </div>

          {/* Small card - n8n powered (1x1) */}
          <div className="bento-card bg-card border border-card-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-3">n8n powered</h3>
            <p className="text-xs text-muted">Workflow automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
