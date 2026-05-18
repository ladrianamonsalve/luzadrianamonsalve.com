import { FadeUp } from "./FadeUp";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 grad-soft" aria-hidden />
      <div className="container-page relative pb-8 pt-12 sm:pb-10 sm:pt-14 lg:pb-12 lg:pt-16">
        <FadeUp>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-lg leading-7 text-ink-500">
              {lead}
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
