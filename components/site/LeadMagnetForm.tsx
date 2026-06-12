"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/site";

type Status = "idle" | "sending" | "error";

export function LeadMagnetForm({
  magnetSlug,
  locale,
}: {
  magnetSlug: string;
  locale: Locale;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  const t =
    locale === "es"
      ? {
          name: "Tu nombre",
          email: "Tu mejor email",
          submit: "Descargar guía gratis",
          sending: "Enviando…",
          privacy:
            "Tu email se usa solo para enviarte la guía y tips ocasionales de impuestos. Nunca lo compartimos.",
          error:
            "No pude registrar tu email. Intenta de nuevo o escríbeme por WhatsApp.",
        }
      : {
          name: "Your name",
          email: "Your best email",
          submit: "Download free guide",
          sending: "Sending…",
          privacy:
            "Your email is only used to send you the guide and occasional tax tips. Never shared.",
          error:
            "I couldn't register your email. Try again or message me on WhatsApp.",
        };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, magnet: magnetSlug, locale }),
      });
      if (!res.ok) throw new Error("submit failed");
      const thanksUrl =
        locale === "es" ? "/guia-finanzas/gracias" : "/en/finance-guide/thanks";
      router.push(thanksUrl);
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-sm text-ink-900 shadow-sm transition focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15";

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label htmlFor="lm-name" className="sr-only">
          {t.name}
        </label>
        <input
          id="lm-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={t.name}
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor="lm-email" className="sr-only">
          {t.email}
        </label>
        <input
          id="lm-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.email}
          className={inputCls}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
      <p className="text-[11px] leading-4 text-ink-500">{t.privacy}</p>
      {status === "error" && (
        <p className="text-sm text-red-600">{t.error}</p>
      )}
    </form>
  );
}
