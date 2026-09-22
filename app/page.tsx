import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Tentang from "@/components/Tentang";
import Layanan from "@/components/Layanan";
import Dokter from "@/components/Dokter";
import Testimoni from "@/components/Testimoni";
import Galeri from "@/components/Galeri";
import Cabang from "@/components/Cabang";
import Faq from "@/components/Faq";
import CtaBooking from "@/components/CtaBooking";
import Footer from "@/components/Footer";
import FloatingWa from "@/components/FloatingWa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Tentang />
        <Layanan />
        <Dokter />
        <Testimoni />
        <Galeri />
        <Cabang />
        <Faq />
        <CtaBooking />
      </main>
      <Footer />
      <FloatingWa />
    </>
  );
}
