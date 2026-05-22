// HubSpot Contacts API integration.
//
// Reads HUBSPOT_API_KEY from process.env (set in Vercel env vars — never
// commit the key). When the env var is missing the helper silently skips
// the push and returns false, so the contact form keeps working in dev
// or before the key is configured.

const HUBSPOT_API = "https://api.hubapi.com";

export type ContactSubmission = {
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  locale?: "es" | "en";
};

function splitName(full: string | undefined): {
  firstname: string;
  lastname: string;
} {
  if (!full) return { firstname: "", lastname: "" };
  const parts = full.trim().split(/\s+/);
  if (parts.length === 0) return { firstname: "", lastname: "" };
  if (parts.length === 1) return { firstname: parts[0], lastname: "" };
  return {
    firstname: parts[0],
    lastname: parts.slice(1).join(" "),
  };
}

function buildMessage(data: ContactSubmission): string {
  const parts: string[] = [];
  if (data.service) parts.push(`Servicio solicitado: ${data.service}`);
  if (data.locale) {
    parts.push(`Idioma del visitante: ${data.locale === "es" ? "Español" : "English"}`);
  }
  if (data.message) {
    parts.push("");
    parts.push("Mensaje del cliente:");
    parts.push(data.message);
  }
  return parts.join("\n");
}

/**
 * Push a contact to HubSpot CRM.
 *
 * Returns true on success (or when the contact already exists), false when
 * the push failed for a real reason. Never throws — the caller can fire
 * this and forget; the contact form keeps working even if HubSpot is down.
 */
export async function pushContactToHubSpot(
  data: ContactSubmission,
): Promise<boolean> {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) {
    console.log("[hubspot] HUBSPOT_API_KEY missing — skipping push");
    return false;
  }

  const { firstname, lastname } = splitName(data.name);
  const properties: Record<string, string> = {
    email: data.email,
    lifecyclestage: "lead",
    hs_lead_status: "NEW",
  };
  if (firstname) properties.firstname = firstname;
  if (lastname) properties.lastname = lastname;
  if (data.phone) properties.phone = data.phone;
  if (data.company) properties.company = data.company;

  const message = buildMessage(data);
  if (message) properties.message = message;

  try {
    const res = await fetch(`${HUBSPOT_API}/crm/v3/objects/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties }),
    });

    if (res.ok) return true;

    if (res.status === 409) {
      // Contact already exists — try to update them with the new message.
      return await updateExistingContact(apiKey, data.email, properties);
    }

    const errText = await res.text();
    console.error(
      `[hubspot] Create failed status=${res.status} body=${errText.slice(0, 500)}`,
    );
    return false;
  } catch (err) {
    console.error("[hubspot] Network error:", err);
    return false;
  }
}

async function updateExistingContact(
  apiKey: string,
  email: string,
  properties: Record<string, string>,
): Promise<boolean> {
  try {
    const res = await fetch(
      `${HUBSPOT_API}/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties }),
      },
    );
    if (res.ok) return true;
    const errText = await res.text();
    console.error(
      `[hubspot] Update failed status=${res.status} body=${errText.slice(0, 500)}`,
    );
    return false;
  } catch (err) {
    console.error("[hubspot] Update network error:", err);
    return false;
  }
}
