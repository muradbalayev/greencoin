"use client";

import { ArrowRight, TrendingUp, Bot, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center dot-grid-bg overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
              <Bot className="w-3.5 h-3.5" />
              AI-Powered Telegram Bot
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Səhm və kriptonu{" "}
              <span className="text-primary">AI ilə</span>{" "}
              analiz et
            </h1>

            <p className="text-lg text-muted max-w-lg mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Telegram botuna aktiv adını yaz — 4 saat, 1 həftə və ya 1 aylıq
              dərin analiz hesabatı al.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/GreenCoinBot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 text-sm"
              >
                Pulsuz başla
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-card-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all text-sm"
              >
                Necə işləyir?
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-6 mt-10 pt-6 border-t border-card-border/50">
              <div className="flex items-center gap-2 text-xs text-muted">
                <Shield className="w-4 h-4 text-primary" />
                Təhlükəsiz
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <TrendingUp className="w-4 h-4 text-primary" />
                Real-time data
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <Bot className="w-4 h-4 text-primary" />
                AI powered
              </div>
            </div>
          </div>

          {/* Right — Phone mockup with real image */}
          <div className="animate-slide-in-right lg:pl-8 relative flex justify-center">
            <div className="relative">
              {/* Main phone image */}
              <img
                src="/telegram-bot.png"
                alt="GreenCoin Telegram Bot"
                className="w-full max-w-sm rounded-3xl shadow-[0_20px_60px_rgba(26,107,60,0.15)] border border-card-border"
              />

              {/* Floating badge - Live Data */}
              <div className="absolute -top-4 -left-4 bg-card border border-card-border rounded-2xl px-4 py-2.5 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-foreground">Live Data</span>
                </div>
              </div>

              {/* Floating stats badge */}
              <div className="absolute -bottom-3 -right-3 bg-card border border-card-border rounded-2xl px-4 py-2.5 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <p className="text-xs text-muted">Dəqiqlik</p>
                <p className="text-lg font-bold text-primary">94.2%</p>
              </div>

              {/* Floating BUY signal */}
              <div className="absolute top-1/3 -right-6 bg-card border border-card-border rounded-2xl px-4 py-2 shadow-lg animate-fade-in-up" style={{ animationDelay: "1s" }}>
                <span className="px-3 py-1 bg-accent/15 text-primary text-xs font-bold rounded-full">BUY ↑</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
