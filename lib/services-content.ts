import type { ServiceDetail } from "@/components/pages/ServiceDetailPage";
import type { Locale } from "./site";

export const servicesContent: Record<
  Locale,
  {
    bookkeeping: ServiceDetail;
    "g702-g703": ServiceDetail;
    notaria: ServiceDetail;
    impuestos: ServiceDetail;
  }
> = {
  es: {
    bookkeeping: {
      slug: "bookkeeping",
      title: "Bookkeeping para Construcción",
      eyebrow: "Servicio · Contabilidad mensual",
      lead: "Llevo tus libros mes a mes con categorización por proyecto, conciliación bancaria y reportes que entiendes.",
      intro: [
        "El bookkeeping para una empresa de construcción no es igual al de un negocio común. Hay job costing, retainage, change orders, COGS por proyecto y un flujo de caja que sube y baja con cada draw. Lo entiendo y lo organizo.",
        "Trabajamos en QuickBooks Online o Desktop según prefieras, te entrego reportes mensuales claros y los libros quedan listos para que tu CPA o yo preparemos tus impuestos sin sustos.",
      ],
      included: {
        title: "Qué incluye",
        items: [
          "Categorización mensual de ingresos y gastos",
          "Job costing por proyecto / obra",
          "Conciliación de cuentas bancarias y tarjetas",
          "Manejo de retainage y change orders",
          "P&L, Balance Sheet y Cash Flow mensual",
          "Libros listos para tu CPA o para tax season",
          "Reporte mensual con resumen y alertas",
          "Soporte por email y WhatsApp",
        ],
      },
      process: [
        {
          step: "Diagnóstico",
          description:
            "Revisamos tu sistema actual, cuentas bancarias y proyectos abiertos para entender dónde estás.",
        },
        {
          step: "Limpieza y setup",
          description:
            "Ordenamos QuickBooks, dejamos el chart of accounts adecuado para construcción y nos ponemos al día.",
        },
        {
          step: "Mes a mes",
          description:
            "Cada mes categorizo, concilio y te envío reportes claros con las cifras que te importan.",
        },
      ],
      forWho: [
        "Contratistas generales y subcontratistas con 1 a 30 proyectos abiertos.",
        "Empresas que ya tienen QuickBooks pero los libros están atrasados o desordenados.",
        "Negocios que pagan por payroll y necesitan reportes mensuales reales.",
        "Dueños que quieren saber cuánto ganan por proyecto, no solo el total del año.",
      ],
      faq: [
        {
          question: "¿Usan QuickBooks Online o Desktop?",
          answer:
            "Trabajamos con ambos. Si todavía no tienes uno, recomiendo QuickBooks Online por flexibilidad y acceso remoto.",
        },
        {
          question: "Mis libros están muy atrasados. ¿Es problema?",
          answer:
            "No. La mayoría de mis clientes llegan atrasados. Hacemos un catch-up inicial y después seguimos mes a mes.",
        },
        {
          question: "¿También preparan mis impuestos?",
          answer:
            "Sí. Estoy certificada IRS AFSP con PTIN activo. Si quieres, llevo los libros y al final del año preparo tus impuestos federales y estatales.",
        },
        {
          question: "¿Cuánto cuesta el servicio mensual?",
          answer:
            "Depende del volumen de transacciones y proyectos. En la consulta inicial gratuita te doy un precio fijo mensual.",
        },
      ],
      cta: "Empezar con bookkeeping",
    },
    "g702-g703": {
      slug: "g702-g703",
      title: "Aplicaciones AIA G702 y G703",
      eyebrow: "Servicio · AIA Payment Applications",
      lead: "Preparo tus G702 y G703 profesionalmente para que cobres a tiempo y sin discusiones con el general contractor.",
      intro: [
        "El G702 (Application and Certificate for Payment) y el G703 (Continuation Sheet) son los documentos estándar del AIA que los general contractors esperan para procesar pagos. Si están mal preparados, el pago se atrasa o lo rechazan.",
        "Yo los preparo desde tu schedule of values, controlando completed work, stored materials, retainage y change orders. Te llegan listos para firmar y enviar.",
      ],
      included: {
        title: "Qué incluye",
        items: [
          "G702 — Application and Certificate for Payment completo",
          "G703 — Continuation Sheet con line items por scope",
          "Manejo de retainage (% retenido por contrato)",
          "Change Orders integrados como líneas adicionales",
          "Stored materials separados del work in place",
          "Soporte de schedule of values inicial",
          "Versiones revisables si el GC pide cambios",
          "Entrega en PDF firmable",
        ],
      },
      process: [
        {
          step: "Schedule of values",
          description:
            "Recibimos tu SOV inicial (o lo armamos juntos) con los line items del contrato.",
        },
        {
          step: "Application mensual",
          description:
            "Cada periodo de billing me envías el avance y yo preparo el G702/G703 listo para enviar.",
        },
        {
          step: "Seguimiento",
          description:
            "Si el GC pide ajustes, revisamos y reenviamos en menos de 24 horas hábiles.",
        },
      ],
      forWho: [
        "Subcontratistas que facturan por avance a un GC.",
        "Contratistas generales que usan AIA con su owner.",
        "Empresas que pierden tiempo cada mes haciendo el G702 a mano.",
        "Negocios que han tenido pagos rechazados por aplicaciones mal preparadas.",
      ],
      faq: [
        {
          question: "¿Qué necesitas de mí para preparar el G702?",
          answer:
            "El contrato (o schedule of values), el periodo de billing, el % de avance por línea, retainage acordado y cualquier change order aprobado.",
        },
        {
          question: "¿Manejas change orders?",
          answer:
            "Sí. Cada change order aprobado se agrega como línea adicional al G703, manteniendo separado el original contract value.",
        },
        {
          question: "¿Y si el GC pide su propio formato?",
          answer:
            "Trabajamos con el formato que pidan. AIA G702/G703 es el estándar, pero muchos GC usan variantes (Textura, GCPay, etc.). Las llenamos también.",
        },
        {
          question: "¿Es servicio mensual o por aplicación?",
          answer:
            "Lo más común es mensual (1 aplicación por mes por proyecto) pero también lo hago por aplicación individual.",
        },
      ],
      cta: "Solicitar G702 / G703",
    },
    notaria: {
      slug: "notaria",
      title: "Notaría Pública",
      eyebrow: "Servicio · Notary Public",
      lead: "Servicios de notarización profesional para contratos, declaraciones juradas y documentos comerciales — en español o inglés.",
      intro: [
        "Como Notary Public licenciada autentico tu identidad y firmo documentos legales según el estado. Atiendo en español e inglés, con confidencialidad absoluta.",
        "Manejo tanto citas en oficina como notarización móvil si el documento o el cliente lo requiere.",
      ],
      included: {
        title: "Documentos que notarizo",
        items: [
          "Contratos de construcción y subcontratos",
          "Lien waivers (parcial y final)",
          "Declaraciones juradas (affidavits)",
          "Poderes (Power of Attorney)",
          "Documentos de cierre de inmuebles (si aplica)",
          "Acuerdos comerciales y NDAs",
          "Traducciones notariadas (con traductor certificado)",
          "Documentos en español con notarización válida en USA",
        ],
      },
      process: [
        {
          step: "Agenda tu cita",
          description:
            "Me escribes con el tipo de documento y la fecha que necesitas. Confirmo disponibilidad el mismo día.",
        },
        {
          step: "Validación de identidad",
          description:
            "Traes ID válido (driver license, pasaporte o passport card). Verifico y registramos en el journal.",
        },
        {
          step: "Notarización y entrega",
          description:
            "Firmamos, sello, journal completado y documento listo para presentar donde lo necesites.",
        },
      ],
      forWho: [
        "Contratistas que firman contratos, lien waivers o affidavits a menudo.",
        "Negocios pequeños que necesitan notarización confiable en español.",
        "Particulares con documentos personales o legales que requieren notary.",
        "Quien necesita servicio móvil o cita fuera del horario tradicional.",
      ],
      faq: [
        {
          question: "¿Atiendes en español?",
          answer:
            "Sí. Soy completamente bilingüe ES/EN. Notarizo documentos en cualquiera de los dos idiomas.",
        },
        {
          question: "¿Ofreces notarización móvil?",
          answer:
            "Sí, en Virginia y áreas cercanas. Hay un cargo adicional por desplazamiento según la zona.",
        },
        {
          question: "¿Qué identificación necesito?",
          answer:
            "Una identificación oficial con foto vigente: driver license, pasaporte, passport card o ID estatal.",
        },
        {
          question: "¿Cuánto cuesta?",
          answer:
            "El costo varía según el tipo de documento y si es móvil. Consulta directa por email o WhatsApp para precio exacto.",
        },
      ],
      cta: "Agendar notarización",
    },
    impuestos: {
      slug: "impuestos",
      title: "Preparación de Impuestos",
      eyebrow: "Servicio · Tax Preparation",
      lead: "Preparo tus impuestos personales y de negocio con certificación IRS AFSP y PTIN activo. Federal, estatal, self-employed y construction.",
      intro: [
        "Estoy certificada dentro del Annual Filing Season Program (AFSP) del IRS y mantengo mi PTIN activo. Preparo declaraciones para individuos y pequeñas empresas, con enfoque en quienes trabajan en construcción.",
        "Trabajo todo el año, no solo en temporada: planeamos con tiempo para que no te lleves sorpresas en abril.",
      ],
      included: {
        title: "Formularios que preparo",
        items: [
          "Form 1040 — Personal federal",
          "Schedule C — Self-employed",
          "Form 1120 / 1120S — Corporations y S-Corps",
          "Form 1065 — Partnerships",
          "Schedule E — Rental property",
          "Estatales (Virginia, Maryland, DC y otros)",
          "Quarterly estimated taxes (1040-ES)",
          "Extensions (Form 4868 / 7004)",
        ],
      },
      process: [
        {
          step: "Recopilación",
          description:
            "Te envío checklist de documentos: W-2, 1099, libros del año, deducciones, gastos del negocio.",
        },
        {
          step: "Preparación",
          description:
            "Reviso, identifico deducciones que aplican a construcción (mileage, tools, materials, subcontractors) y preparo la declaración.",
        },
        {
          step: "Revisión y filing",
          description:
            "Revisamos juntos, firmas, hacemos e-file y te quedas con copia digital de todo.",
        },
      ],
      forWho: [
        "Contratistas y subcontratistas como self-employed (Schedule C).",
        "LLCs y S-Corps de construcción (Form 1120S / 1065).",
        "Individuos con W-2 + side income, rental property o crypto.",
        "Negocios que necesitan estimated quarterly taxes calculados bien.",
      ],
      faq: [
        {
          question: "¿Estás certificada por el IRS?",
          answer:
            "Sí. Tengo el Annual Filing Season Program (AFSP) del IRS, PTIN activo y me actualizo cada año en código tributario federal.",
        },
        {
          question: "¿Atienden personas con ITIN o sin SSN?",
          answer:
            "Sí. Preparo declaraciones para clientes con ITIN. Si necesitas tramitar ITIN te oriento sobre el proceso.",
        },
        {
          question: "¿Hacen impuestos de años anteriores?",
          answer:
            "Sí. Si no has declarado en años pasados, podemos preparar back taxes y ponerte al día con el IRS.",
        },
        {
          question: "¿Tienen servicio bilingüe?",
          answer:
            "Sí. Toda la preparación, revisión y explicación la hago en español o inglés, como prefieras.",
        },
      ],
      cta: "Empezar mis impuestos",
    },
  },
  en: {
    bookkeeping: {
      slug: "bookkeeping",
      title: "Construction Bookkeeping",
      eyebrow: "Service · Monthly bookkeeping",
      lead: "I keep your books month after month with project-based categorization, bank reconciliation and reports you actually understand.",
      intro: [
        "Construction bookkeeping is not like regular small business bookkeeping. There's job costing, retainage, change orders, project-level COGS and a cash flow that swings with each draw. I know it and I organize it.",
        "We work in QuickBooks Online or Desktop, your choice. You get clean monthly reports and books that are ready for your CPA — or for me — to file taxes without surprises.",
      ],
      included: {
        title: "What's included",
        items: [
          "Monthly income and expense categorization",
          "Job costing per project / site",
          "Bank and credit card reconciliation",
          "Retainage and change order tracking",
          "Monthly P&L, Balance Sheet and Cash Flow",
          "Books ready for your CPA or for tax season",
          "Monthly summary report with alerts",
          "Email and WhatsApp support",
        ],
      },
      process: [
        {
          step: "Diagnosis",
          description:
            "We review your current system, bank accounts and open projects to see where you stand.",
        },
        {
          step: "Cleanup and setup",
          description:
            "We tidy up QuickBooks, set the right construction chart of accounts and catch up.",
        },
        {
          step: "Month by month",
          description:
            "Every month I categorize, reconcile and send you clean reports with the numbers that matter.",
        },
      ],
      forWho: [
        "General contractors and subcontractors with 1 to 30 active projects.",
        "Businesses that already use QuickBooks but the books are behind or messy.",
        "Companies running payroll who need real monthly reports.",
        "Owners who want to know what they make per project, not just the yearly total.",
      ],
      faq: [
        {
          question: "Do you use QuickBooks Online or Desktop?",
          answer:
            "Both. If you don't have one yet I usually recommend QuickBooks Online for flexibility and remote access.",
        },
        {
          question: "My books are way behind. Is that a problem?",
          answer:
            "No. Most of my clients come in behind. We do an initial catch-up and then move to monthly.",
        },
        {
          question: "Do you also prepare my taxes?",
          answer:
            "Yes. I'm IRS AFSP certified with an active PTIN. I can handle the books and prepare your federal and state taxes at year-end.",
        },
        {
          question: "How much does the monthly service cost?",
          answer:
            "It depends on transaction volume and number of projects. In the free initial consult I give you a fixed monthly price.",
        },
      ],
      cta: "Start with bookkeeping",
    },
    "g702-g703": {
      slug: "g702-g703",
      title: "AIA G702 & G703 Applications",
      eyebrow: "Service · AIA Payment Applications",
      lead: "I prepare your G702 and G703 professionally so you get paid on time and without back-and-forth with the general contractor.",
      intro: [
        "The G702 (Application and Certificate for Payment) and G703 (Continuation Sheet) are the AIA standard forms most general contractors expect to process payments. When they're done wrong, payments are delayed or rejected.",
        "I prepare them from your schedule of values, tracking completed work, stored materials, retainage and change orders. You get them ready to sign and send.",
      ],
      included: {
        title: "What's included",
        items: [
          "G702 — Complete Application and Certificate for Payment",
          "G703 — Continuation Sheet with line items per scope",
          "Retainage handling (% per contract)",
          "Change Orders added as additional lines",
          "Stored materials separated from work in place",
          "Schedule of values support",
          "Revisions if the GC requests changes",
          "Delivered as signable PDF",
        ],
      },
      process: [
        {
          step: "Schedule of values",
          description:
            "We receive your SOV (or build it together) with the line items from the contract.",
        },
        {
          step: "Monthly application",
          description:
            "Each billing period you send me progress and I prepare the G702/G703 ready to send.",
        },
        {
          step: "Follow-up",
          description:
            "If the GC asks for changes, we revise and resend within 24 business hours.",
        },
      ],
      forWho: [
        "Subcontractors billing progress payments to a GC.",
        "General contractors using AIA with their owner.",
        "Businesses that waste hours every month doing G702 manually.",
        "Companies that have had payments rejected due to poor applications.",
      ],
      faq: [
        {
          question: "What do you need from me to prepare the G702?",
          answer:
            "The contract (or schedule of values), the billing period, % complete per line, agreed retainage, and any approved change orders.",
        },
        {
          question: "Do you handle change orders?",
          answer:
            "Yes. Each approved change order is added as an extra line in the G703, keeping the original contract value separate.",
        },
        {
          question: "What if the GC requires their own format?",
          answer:
            "We work in whatever format they require. AIA G702/G703 is standard, but many GCs use variants (Textura, GCPay, etc.) — I fill those too.",
        },
        {
          question: "Is the service monthly or per application?",
          answer:
            "Most clients use monthly (1 application per month per project), but I also do them one-off.",
        },
      ],
      cta: "Request G702 / G703",
    },
    notaria: {
      slug: "notary",
      title: "Notary Public",
      eyebrow: "Service · Notary Public",
      lead: "Professional notarization for contracts, sworn statements and business documents — in English or Spanish.",
      intro: [
        "As a licensed Notary Public I verify your identity and execute legal documents according to state rules. I serve in English and Spanish, with full confidentiality.",
        "I offer both in-office and mobile notarization when the document or client requires it.",
      ],
      included: {
        title: "Documents I notarize",
        items: [
          "Construction contracts and subcontracts",
          "Lien waivers (partial and final)",
          "Affidavits / sworn statements",
          "Powers of Attorney",
          "Real estate closing documents (when applicable)",
          "Business agreements and NDAs",
          "Notarized translations (with certified translator)",
          "Spanish-language documents with valid US notarization",
        ],
      },
      process: [
        {
          step: "Book your appointment",
          description:
            "Email me the document type and date you need. I confirm availability the same day.",
        },
        {
          step: "ID verification",
          description:
            "You bring valid ID (driver's license, passport or passport card). I verify and log in the journal.",
        },
        {
          step: "Notarize and deliver",
          description:
            "We sign, seal, complete the journal and the document is ready to file wherever needed.",
        },
      ],
      forWho: [
        "Contractors signing contracts, lien waivers or affidavits often.",
        "Small businesses that need reliable Spanish-language notary service.",
        "Individuals with personal or legal documents requiring a notary.",
        "Anyone who needs mobile service or appointments outside regular hours.",
      ],
      faq: [
        {
          question: "Do you offer service in Spanish?",
          answer:
            "Yes. Fully bilingual. I notarize documents in either language.",
        },
        {
          question: "Do you offer mobile notarization?",
          answer:
            "Yes, in Virginia and nearby areas. There's an additional travel fee depending on the zone.",
        },
        {
          question: "What ID do I need?",
          answer:
            "A valid government-issued photo ID: driver's license, passport, passport card or state ID.",
        },
        {
          question: "How much does it cost?",
          answer:
            "It depends on the document type and whether it's mobile. Email or WhatsApp me for the exact quote.",
        },
      ],
      cta: "Book notarization",
    },
    impuestos: {
      slug: "tax-preparation",
      title: "Tax Preparation",
      eyebrow: "Service · Tax Preparation",
      lead: "I prepare personal and business taxes with IRS AFSP certification and active PTIN. Federal, state, self-employed and construction.",
      intro: [
        "I'm certified under the IRS Annual Filing Season Program (AFSP) and I keep my PTIN active. I prepare returns for individuals and small businesses, with a focus on construction.",
        "I work year-round, not only during tax season — we plan ahead so April doesn't come with surprises.",
      ],
      included: {
        title: "Forms I prepare",
        items: [
          "Form 1040 — Personal federal",
          "Schedule C — Self-employed",
          "Form 1120 / 1120S — Corporations and S-Corps",
          "Form 1065 — Partnerships",
          "Schedule E — Rental property",
          "State returns (Virginia, Maryland, DC and others)",
          "Quarterly estimated taxes (1040-ES)",
          "Extensions (Form 4868 / 7004)",
        ],
      },
      process: [
        {
          step: "Gathering",
          description:
            "I send a checklist: W-2, 1099, full-year books, deductions and business expenses.",
        },
        {
          step: "Preparation",
          description:
            "I review, identify construction-specific deductions (mileage, tools, materials, subcontractors) and prepare the return.",
        },
        {
          step: "Review and filing",
          description:
            "We review together, you sign, we e-file and you keep a digital copy of everything.",
        },
      ],
      forWho: [
        "Contractors and subs as self-employed (Schedule C).",
        "Construction LLCs and S-Corps (Form 1120S / 1065).",
        "Individuals with W-2 plus side income, rental property or crypto.",
        "Businesses that need accurate quarterly estimated taxes.",
      ],
      faq: [
        {
          question: "Are you IRS certified?",
          answer:
            "Yes. I hold the IRS Annual Filing Season Program (AFSP) credential, active PTIN, and I keep up with federal tax code every year.",
        },
        {
          question: "Do you serve people with ITIN or without SSN?",
          answer:
            "Yes. I prepare returns for ITIN holders. If you need to apply for an ITIN I can guide you through the process.",
        },
        {
          question: "Do you handle prior-year taxes?",
          answer:
            "Yes. If you have unfiled prior years, we can prepare back taxes and get you current with the IRS.",
        },
        {
          question: "Is the service bilingual?",
          answer:
            "Yes. All preparation, review and explanation is done in English or Spanish — your choice.",
        },
      ],
      cta: "Start my taxes",
    },
  },
};
