import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { gallery } from "@/data/content";

export default function Galeri() {
  return (
    <section id="galeri" className="scroll-mt-20 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Dokumentasi"
          title="Momen perawatan dan senyum cerah pasien"
          desc="Suasana klinik, proses perawatan, dan hasil senyum pasien KataGigi."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 70}>
              <img
                src={src}
                alt={`Galeri KataGigi ${i + 1}`}
                className="aspect-square w-full rounded-2xl object-cover shadow-sm transition-transform hover:scale-[1.02]"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
