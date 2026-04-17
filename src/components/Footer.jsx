import { Hexagon, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Hexagon className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold text-foreground">
                Green<span className="text-primary">Coin</span>
              </span>
            </a>
            <span className="hidden sm:inline text-xs text-muted italic">
              &ldquo;Düzgün analiz, düzgün vaxtda, düzgün qərar&rdquo;
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://t.me/GreenCoinBot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Telegram
            </a>
            <a href="#" className="text-xs text-muted hover:text-primary transition-colors">
              Məxfilik siyasəti
            </a>
            <a href="#" className="text-xs text-muted hover:text-primary transition-colors">
              Əlaqə
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-card-border/50 text-center">
          <p className="text-xs text-muted">
            © 2025 GreenCoin. Agent47 tərəfindən hazırlanıb.
          </p>
        </div>
      </div>
    </footer>
  );
}
