"use client";

import { ArrowRight, TrendingUp, Bot, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center dot-grid-bg overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
              <Bot className="w-3.5 h-3.5" />
              AI-Powered Telegram Bot
            </div>

            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-foreground mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Səhm və kriptonu{" "}
              <span className="text-primary">AI ilə</span>{" "}
              analiz et
            </h1>

            <p className="text-lg text-muted max-w-lg mb-8 leading-relaxed">
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
                GPT-4 powered
              </div>
            </div>
          </div>

          {/* Right — mock Telegram chat */}
          <div className="animate-slide-in-right lg:pl-8">
            <div className="relative">
              {/* Phone frame */}
              <div className="bg-card rounded-3xl border border-card-border shadow-[0_8px_40px_rgba(26,107,60,0.08)] p-4 max-w-sm mx-auto lg:ml-auto">
                {/* Chat header */}
                <div className="flex items-center gap-3 px-3 py-3 border-b border-card-border mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">GreenCoin Bot</p>
                    <p className="text-xs text-accent">online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 px-2">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-white px-4 py-2.5 rounded-2xl rounded-br-md text-sm max-w-[200px]">
                      TSLA 1 week
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex justify-start">
                    <div className="bg-background border border-card-border px-4 py-3 rounded-2xl rounded-bl-md max-w-[280px]">
                      <p className="text-xs text-muted mb-2">📊 GreenCoin Report</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-foreground">Tesla (TSLA)</span>
                          <span className="px-2.5 py-0.5 bg-accent/15 text-primary text-xs font-bold rounded-full">BUY ↑</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-card-border/30 rounded-lg p-2">
                            <p className="text-muted">Qiymət</p>
                            <p className="font-bold text-foreground">$248.50</p>
                          </div>
                          <div className="bg-card-border/30 rounded-lg p-2">
                            <p className="text-muted">Hədəf</p>
                            <p className="font-bold text-accent">$285.00</p>
                          </div>
                          <div className="bg-card-border/30 rounded-lg p-2">
                            <p className="text-muted">Güvən</p>
                            <p className="font-bold text-foreground">87%</p>
                          </div>
                          <div className="bg-card-border/30 rounded-lg p-2">
                            <p className="text-muted">Risk</p>
                            <p className="font-bold text-foreground">Orta</p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <div className="h-1.5 bg-card-border/50 rounded-full overflow-hidden">
                            <div className="h-full bg-accent rounded-full" style={{ width: "87%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div className="bg-background border border-card-border px-4 py-2.5 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 mt-4 px-2">
                  <div className="flex-1 bg-background border border-card-border rounded-full px-4 py-2 text-xs text-muted">
                    BTC, AAPL, ETH...
                  </div>
                  <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 bg-card border border-card-border rounded-2xl px-4 py-2.5 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-foreground">Live Data</span>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-3 -right-3 bg-card border border-card-border rounded-2xl px-4 py-2.5 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <p className="text-xs text-muted">Dəqiqlik</p>
                <p className="text-lg font-bold text-primary">94.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
