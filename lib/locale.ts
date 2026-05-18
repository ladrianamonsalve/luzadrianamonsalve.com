import { headers } from "next/headers";
import { DEFAULT_LOCALE, type Locale } from "./site";

export async function getLocale(): Promise<Locale> {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "/";
  return pathname.startsWith("/en") ? "en" : DEFAULT_LOCALE;
}
