import { redirect } from "next/navigation";

// The pricing page content lives only in Spanish today — the products,
// descriptions, and benefits all reflect Luz's primarily-Hispanic audience.
// Until a full EN translation is in place, send /en/pricing visitors to
// the Spanish /precios so the nav link doesn't 404.
export default function Page() {
  redirect("/precios");
}
