import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { FadeUp } from "./FadeUp";

export function Philosophy({ locale }: { locale: Locale }) {
  const t = content[locale].philosophy;

  return (
    <section className="section-pad relative overflow-hidden text-white">
      <div className="absolute inset-0 grad-blue" aria-hidden />
      <div className="container-page relative">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.items.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="text-sm font-semibold uppercase tracking-wider text-brand-100">
                  {item.title}
                </div>
                <p className="mt-3 text-base leading-7 text-white/90">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
