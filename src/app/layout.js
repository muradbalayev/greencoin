import "./globals.css";

export const metadata = {
  title: "GreenCoin — AI ilə Səhm və Kripto Analizi",
  description:
    "Telegram botuna aktiv adını yaz — 4 saat, 1 həftə və ya 1 aylıq dərin analiz hesabatı al. Düzgün analiz, düzgün vaxtda, düzgün qərar.",
  keywords: ["GreenCoin", "AI", "stock analysis", "crypto", "Telegram bot", "invest"],
  openGraph: {
    title: "GreenCoin — AI ilə Səhm və Kripto Analizi",
    description: "Düzgün analiz, düzgün vaxtda, düzgün qərar",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="az" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
