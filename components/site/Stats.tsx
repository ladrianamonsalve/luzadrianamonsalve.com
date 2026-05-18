import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { FadeUp } from "./FadeUp";

export function Stats({ locale }: { locale: Locale }) {
  const items = content[locale].stats;

  return (
    <section className="border-y border-ink-100 bg-white">
      <div className="container-page py-12 sm:py-14">
        <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {items.map((it, i) => (
            <FadeUp key={it.label} delay={i * 0.05}>
              <div className="flex flex-col items-start gap-1 sm:items-center sm:text-center">
                <dt className="text-3xl font-semibold tracking-tight text-brand-600 sm:text-4xl">
                  {it.value}
                </dt>
                <dd className="text-[13px] leading-5 text-ink-500">
                  {it.label}
                </dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
}
