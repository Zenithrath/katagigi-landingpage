import Reveal from "./Reveal";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="bg-white pb-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <dl className="card-shiny-emerald relative grid grid-cols-2 gap-6 overflow-hidden rounded-3xl p-6 sm:p-8 lg:grid-cols-4">
            <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-40" />
            {stats.map((s) => (
              <div key={s.label} className="relative text-center">
                <dt className="order-2 mt-1 block text-xs font-semibold uppercase tracking-wider text-emerald-100">
                  {s.label}
                </dt>
                <dd className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
