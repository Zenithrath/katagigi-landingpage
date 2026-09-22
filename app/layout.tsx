import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KataGigi — Klinik Gigi Modern untuk Senyum Cerah",
  description:
    "KataGigi menyediakan layanan perawatan gigi lengkap: scaling, tambal, behel, bleaching, implan, dan gigi anak. Reservasi mudah via WhatsApp, dokter teliti, klinik nyaman untuk keluarga.",
  keywords: ["klinik gigi", "dokter gigi", "kata gigi", "reservasi dokter gigi", "perawatan gigi", "scaling", "behel", "bleaching"],
  openGraph: {
    title: "KataGigi — Perawatan Gigi untuk Senyum Cerah",
    description:
      "Layanan gigi lengkap dengan dokter teliti dan reservasi mudah. Booking sekarang via WhatsApp.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
