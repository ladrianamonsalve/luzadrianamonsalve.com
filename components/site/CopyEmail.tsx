"use client";

import { useState } from "react";

export function CopyEmail({
  email,
  className,
  locale = "es",
}: {
  email: string;
  className?: string;
  locale?: "es" | "en";
}) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for older browsers: select + copy via execCommand
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  const tip = locale === "es" ? "Click para copiar" : "Click to copy";
  const ok = locale === "es" ? "Copiado" : "Copied";

  return (
    <button
      type="button"
      onClick={handleClick}
      title={tip}
      aria-label={`${tip}: ${email}`}
      className={`group inline-flex items-center gap-2 text-left transition ${className ?? ""}`}
    >
      <span className="break-all">{email}</span>
      {copied ? (
        <span className="inline-flex items-center gap-1 rounded-full bg-success-500/10 px-2 py-0.5 text-[11px] font-semibold text-success-500">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-3 w-3"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.09l6.79-6.8a1 1 0 011.414 0z"
            />
          </svg>
          {ok}
        </span>
      ) : (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 opacity-50 transition group-hover:opacity-100 group-hover:text-brand-600"
          aria-hidden
        >
          <path d="M7 3a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2H7zm0 1.5h6a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5z" />
          <path d="M4 7v8a2 2 0 002 2h6v-1.5H6a.5.5 0 01-.5-.5V7H4z" />
        </svg>
      )}
    </button>
  );
}
