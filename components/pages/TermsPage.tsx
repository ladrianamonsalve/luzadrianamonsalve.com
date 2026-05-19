import { PageHeader } from "@/components/site/PageHeader";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";
import { site, type Locale } from "@/lib/site";

export function TermsPage({ locale }: { locale: Locale }) {
  const url = locale === "es" ? "/terminos" : "/en/terms";
  const today = new Date().toISOString().split("T")[0];

  const t =
    locale === "es"
      ? {
          title: "Términos, Reembolsos y Privacidad",
          lead: "Información clara sobre cómo trabajamos, cuándo aplican reembolsos, y cómo protegemos tu información. Última actualización: " + today,
          tocTitle: "En esta página",
          toc: [
            { id: "reembolsos", text: "Política de Reembolsos" },
            { id: "terminos", text: "Términos del Servicio" },
            { id: "privacidad", text: "Política de Privacidad" },
            { id: "contacto", text: "Contacto" },
          ],
        }
      : {
          title: "Terms, Refunds and Privacy",
          lead: "Clear information about how we work, when refunds apply, and how we protect your information. Last updated: " + today,
          tocTitle: "On this page",
          toc: [
            { id: "refunds", text: "Refund Policy" },
            { id: "terms", text: "Terms of Service" },
            { id: "privacy", text: "Privacy Policy" },
            { id: "contact", text: "Contact" },
          ],
        };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {
            name: locale === "es" ? "Inicio" : "Home",
            url: locale === "es" ? "/" : "/en",
          },
          { name: t.title, url },
        ])}
      />

      <PageHeader title={t.title} lead={t.lead} />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t.tocTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {t.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-ink-500 hover:text-brand-700"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="prose-blog">
            {locale === "es" ? <SpanishContent /> : <EnglishContent />}
          </div>
        </div>
      </section>
    </>
  );
}

function SpanishContent() {
  return (
    <>
      <section id="reembolsos">
        <h2>Política de Reembolsos</h2>

        <h3>Servicios mensuales recurrentes (Bookkeeping y G702/G703 mensual)</h3>
        <ul>
          <li>Puedes cancelar tu suscripción en cualquier momento desde el portal de Stripe o escribiéndome a {site.email}.</li>
          <li>El último pago mensual <strong>no es reembolsable parcialmente</strong> — el servicio cubre el mes facturado completo.</li>
          <li>Al cancelar, tu suscripción termina al final del periodo de facturación actual y no se cobra el siguiente mes.</li>
          <li>No hay penalidades por cancelación.</li>
        </ul>

        <h3>Servicios únicos (G702/G703 por aplicación, Lien Waivers, Notarización, Tax Prep)</h3>
        <ul>
          <li><strong>Una vez iniciado el trabajo no hay reembolso.</strong> El servicio se considera iniciado cuando recibo la información del cliente y comienzo a preparar el documento o trámite.</li>
          <li>Si necesitas cancelar <em>antes</em> de que el trabajo haya comenzado, contáctame y procesaré un reembolso completo en menos de 5 días hábiles.</li>
          <li>Si descubres un error mío después de la entrega, lo corrijo sin costo adicional. La corrección no constituye un reembolso pero asegura que recibas el trabajo correcto.</li>
        </ul>

        <h3>Casos especiales con reembolso completo</h3>
        <ul>
          <li>Si por alguna razón no puedo completar el servicio que pagaste, recibirás un reembolso completo.</li>
          <li>Si hay un error técnico en Stripe que cause un doble cobro, se reembolsa de inmediato al detectarlo.</li>
        </ul>

        <h3>Cómo solicitar un reembolso</h3>
        <p>Escríbeme a <strong>{site.email}</strong> o por WhatsApp al <strong>{site.whatsapp}</strong> con:</p>
        <ul>
          <li>Email o nombre asociado al pago</li>
          <li>Fecha y monto del cobro</li>
          <li>Razón del reembolso</li>
        </ul>
        <p>Responderé en menos de 24 horas hábiles.</p>
      </section>

      <hr />

      <section id="terminos">
        <h2>Términos del Servicio</h2>

        <h3>Naturaleza del servicio</h3>
        <p>3DK Multi Services proporciona los siguientes servicios profesionales en Gainesville, Georgia y en todos los Estados Unidos:</p>
        <ul>
          <li>Preparación de impuestos personales y de negocio (federal y estatal)</li>
          <li>Bookkeeping mensual y configuración de QuickBooks</li>
          <li>Preparación de aplicaciones AIA G702 y G703</li>
          <li>Preparación y notarización de lien waivers</li>
          <li>Servicios de Notary Public</li>
          <li>Solicitudes de ITIN (Form W-7)</li>
          <li>Servicio bilingüe en español e inglés</li>
        </ul>

        <h3>Mi compromiso contigo</h3>
        <ul>
          <li>Mantener mi certificación IRS AFSP y PTIN activos.</li>
          <li>Mantener mi licencia de Notary Public vigente.</li>
          <li>Confidencialidad total de tu información financiera, fiscal y personal.</li>
          <li>Servicio profesional, a tiempo y en el idioma que prefieras.</li>
          <li>Comunicación clara sobre el alcance del servicio antes de empezar.</li>
        </ul>

        <h3>Tu responsabilidad como cliente</h3>
        <ul>
          <li>Proporcionar información financiera precisa, completa y veraz.</li>
          <li>Entregar documentos requeridos en los tiempos acordados.</li>
          <li>Mantener tus pagos al día si tienes una suscripción mensual activa.</li>
          <li>Notificarme oportunamente de cambios importantes en tu situación financiera o de negocio.</li>
        </ul>

        <h3>Limitaciones del servicio</h3>
        <ul>
          <li>Soy preparadora de impuestos certificada IRS AFSP — no soy CPA, EA (Enrolled Agent), abogada ni asesora financiera certificada.</li>
          <li>Mis servicios incluyen preparación profesional de documentos, no representación legal ante el IRS más allá del alcance del AFSP.</li>
          <li>La información en mi blog y en consultas iniciales es educativa, no constituye consejo fiscal personalizado.</li>
          <li>Las decisiones finales sobre tu situación financiera o fiscal son tuyas. Yo te ayudo a entender las opciones.</li>
        </ul>
      </section>

      <hr />

      <section id="privacidad">
        <h2>Política de Privacidad</h2>

        <h3>Información que recolectamos</h3>
        <ul>
          <li><strong>Información que tú proporcionas:</strong> nombre, email, teléfono, nombre de empresa, tipo de servicio solicitado, mensaje y cualquier documento o información financiera que compartas para el servicio.</li>
          <li><strong>Información de pago:</strong> procesada exclusivamente por Stripe (PCI Service Provider Level 1). 3DK Multi Services <strong>nunca almacena ni accede a los datos de tu tarjeta de crédito</strong>.</li>
          <li><strong>Información técnica:</strong> cookies básicas para recordar tu idioma preferido. No usamos cookies de tracking publicitario.</li>
        </ul>

        <h3>Cómo usamos tu información</h3>
        <ul>
          <li>Para responder a tus consultas y prestarte el servicio que solicitaste.</li>
          <li>Para enviarte comunicaciones directamente relacionadas con tu servicio (recibos, recordatorios, entregas).</li>
          <li>Para cumplir con obligaciones legales aplicables al trabajo de preparación de impuestos y servicios profesionales.</li>
        </ul>

        <h3>Lo que NO hacemos</h3>
        <ul>
          <li><strong>No vendemos</strong> tu información a terceros bajo ninguna circunstancia.</li>
          <li><strong>No compartimos</strong> tu información personal con terceros, excepto: Stripe (para procesar pagos), Resend (para enviar emails transaccionales), y software profesional necesario para el servicio (ej. QuickBooks bajo tu propia cuenta).</li>
          <li><strong>No te enviamos</strong> spam, emails promocionales sin tu consentimiento, ni vendemos tu email para marketing de terceros.</li>
        </ul>

        <h3>Tus derechos</h3>
        <ul>
          <li>Solicitar acceso a la información que tenemos sobre ti.</li>
          <li>Solicitar corrección de información incorrecta.</li>
          <li>Solicitar eliminación de tu información (sujeto a obligaciones legales de retención, ej. registros fiscales).</li>
          <li>Optar por no recibir comunicaciones no esenciales.</li>
        </ul>
        <p>Para ejercer cualquiera de estos derechos, escríbeme a {site.email}.</p>
      </section>

      <hr />

      <section id="contacto">
        <h2>Contacto</h2>
        <p>Si tienes preguntas sobre estos términos, escríbeme:</p>
        <ul>
          <li>Email: <strong>{site.email}</strong></li>
          <li>WhatsApp: <strong>{site.whatsapp}</strong></li>
          <li>Establecida en: Gainesville, Georgia · Atendemos en todos los Estados Unidos</li>
        </ul>
      </section>
    </>
  );
}

function EnglishContent() {
  return (
    <>
      <section id="refunds">
        <h2>Refund Policy</h2>

        <h3>Recurring monthly services (Bookkeeping and monthly G702/G703)</h3>
        <ul>
          <li>You can cancel your subscription at any time from the Stripe customer portal or by emailing {site.email}.</li>
          <li>The most recent monthly payment is <strong>not partially refundable</strong> — the service covers the full billed month.</li>
          <li>When you cancel, your subscription ends at the close of the current billing period; no further charges apply.</li>
          <li>No cancellation penalties.</li>
        </ul>

        <h3>One-time services (per-application G702/G703, Lien Waivers, Notarization, Tax Prep)</h3>
        <ul>
          <li><strong>Once work has started, no refund.</strong> Work is considered started when I receive the client's information and begin preparing the document or task.</li>
          <li>If you need to cancel <em>before</em> work has started, contact me and I'll process a full refund within 5 business days.</li>
          <li>If you find an error on my part after delivery, I correct it at no additional cost. The correction does not constitute a refund but ensures you receive the correct work.</li>
        </ul>

        <h3>Special cases with full refund</h3>
        <ul>
          <li>If for any reason I cannot complete the service you paid for, you will receive a full refund.</li>
          <li>If a technical error in Stripe causes a duplicate charge, it is refunded immediately upon detection.</li>
        </ul>

        <h3>How to request a refund</h3>
        <p>Write to <strong>{site.email}</strong> or WhatsApp <strong>{site.whatsapp}</strong> with:</p>
        <ul>
          <li>Email or name associated with the payment</li>
          <li>Date and amount of the charge</li>
          <li>Reason for the refund request</li>
        </ul>
        <p>I'll reply within 24 business hours.</p>
      </section>

      <hr />

      <section id="terms">
        <h2>Terms of Service</h2>

        <h3>Nature of services</h3>
        <p>3DK Multi Services provides the following professional services from Gainesville, Georgia, serving clients across the United States:</p>
        <ul>
          <li>Personal and business tax preparation (federal and state)</li>
          <li>Monthly bookkeeping and QuickBooks setup</li>
          <li>AIA G702 and G703 application preparation</li>
          <li>Lien waiver preparation and notarization</li>
          <li>Notary Public services</li>
          <li>ITIN applications (Form W-7)</li>
          <li>Bilingual service in English and Spanish</li>
        </ul>

        <h3>My commitment to you</h3>
        <ul>
          <li>Maintain active IRS AFSP certification and PTIN.</li>
          <li>Maintain active Notary Public license.</li>
          <li>Full confidentiality of your financial, tax, and personal information.</li>
          <li>Professional, on-time service in your preferred language.</li>
          <li>Clear communication about the scope of the service before starting.</li>
        </ul>

        <h3>Your responsibility as a client</h3>
        <ul>
          <li>Provide accurate, complete, and truthful financial information.</li>
          <li>Deliver required documents within agreed timelines.</li>
          <li>Keep your payments current if you have an active monthly subscription.</li>
          <li>Notify me promptly of significant changes to your financial or business situation.</li>
        </ul>

        <h3>Service limitations</h3>
        <ul>
          <li>I am an IRS AFSP certified tax preparer — not a CPA, EA (Enrolled Agent), attorney, or certified financial advisor.</li>
          <li>My services include professional document preparation, not legal representation before the IRS beyond the scope of the AFSP program.</li>
          <li>Information on my blog and in initial consultations is educational and does not constitute personalized tax advice.</li>
          <li>Final decisions about your financial or tax situation are yours. I help you understand your options.</li>
        </ul>
      </section>

      <hr />

      <section id="privacy">
        <h2>Privacy Policy</h2>

        <h3>Information we collect</h3>
        <ul>
          <li><strong>Information you provide:</strong> name, email, phone, company name, type of service requested, message, and any documents or financial information you share for the service.</li>
          <li><strong>Payment information:</strong> processed exclusively by Stripe (PCI Service Provider Level 1). 3DK Multi Services <strong>never stores or accesses your credit card data</strong>.</li>
          <li><strong>Technical information:</strong> basic cookies to remember your language preference. We don't use ad-tracking cookies.</li>
        </ul>

        <h3>How we use your information</h3>
        <ul>
          <li>To respond to your inquiries and deliver the service you requested.</li>
          <li>To send you communications directly related to your service (receipts, reminders, deliveries).</li>
          <li>To comply with applicable legal obligations for tax preparation and professional services.</li>
        </ul>

        <h3>What we don't do</h3>
        <ul>
          <li><strong>We don't sell</strong> your information to third parties under any circumstances.</li>
          <li><strong>We don't share</strong> your personal information with third parties, except: Stripe (to process payments), Resend (to send transactional emails), and professional software required for the service (e.g., QuickBooks under your own account).</li>
          <li><strong>We don't send</strong> spam, promotional emails without your consent, or sell your email for third-party marketing.</li>
        </ul>

        <h3>Your rights</h3>
        <ul>
          <li>Request access to the information we have about you.</li>
          <li>Request correction of incorrect information.</li>
          <li>Request deletion of your information (subject to legal retention obligations, e.g., tax records).</li>
          <li>Opt out of non-essential communications.</li>
        </ul>
        <p>To exercise any of these rights, write to {site.email}.</p>
      </section>

      <hr />

      <section id="contact">
        <h2>Contact</h2>
        <p>If you have questions about these terms, reach out:</p>
        <ul>
          <li>Email: <strong>{site.email}</strong></li>
          <li>WhatsApp: <strong>{site.whatsapp}</strong></li>
          <li>Based in: Gainesville, Georgia · Serving all of the United States</li>
        </ul>
      </section>
    </>
  );
}
