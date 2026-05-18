"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = content[locale].contact;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-success-500/30 bg-success-500/5 p-8 text-center">
        <h3 className="text-lg font-semibold text-ink-900">
          {t.successTitle}
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink-500">{t.successBody}</p>
      </div>
    );
  }

  const labelCls = "block text-sm font-medium text-ink-900";
  const inputCls =
    "mt-1 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 shadow-sm transition focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            {t.formLabels.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            {t.formLabels.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            {t.formLabels.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            {t.formLabels.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelCls}>
          {t.formLabels.service}
        </label>
        <select id="service" name="service" required className={inputCls}>
          <option value="">—</option>
          {t.serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          {t.formLabels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">{t.formLabels.privacy}</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-60"
        >
          {status === "sending"
            ? locale === "es"
              ? "Enviando…"
              : "Sending…"
            : t.formLabels.submit}
        </button>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {locale === "es"
            ? "No pude enviar el mensaje. Intenta de nuevo o escríbeme directo por email."
            : "I couldn't send the message. Please try again or email me directly."}
        </p>
      )}
    </form>
  );
}
