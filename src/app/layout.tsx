import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Er Motors — Premium Otomotiv Galerisi | Bursa",
  description:
    "Er Motors, Bursa'da 15 yılı aşkın deneyimiyle Türkiye'nin en güvenilir premium ve lüks otomotiv galerisi. Porsche, Mercedes-Benz, BMW, Range Rover ve daha fazlası.",
  keywords: [
    "Er Motors", "premium otomobil Bursa", "lüks araç galeri", "ikinci el lüks araç",
    "Porsche Bursa", "Mercedes Bursa", "BMW Galeri", "Nilüfer otomobil"
  ],
  openGraph: {
    title: "Er Motors — Premium Otomotiv Galerisi",
    description: "Dünyanın en seçkin otomobillerinin buluştuğu özel atmosfer. Lüksü yeniden keşfedin.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
