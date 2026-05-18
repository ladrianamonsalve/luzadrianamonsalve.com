import type { Locale } from "./site";

type Dict = {
  nav: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    blog: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    badges: string[];
  };
  stats: { value: string; label: string }[];
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    items: { slug: string; href: string; title: string; description: string; bullets: string[] }[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    credentialsTitle: string;
    credentials: { title: string; description: string }[];
    cta: string;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; author: string; role: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formLabels: {
      name: string;
      email: string;
      phone: string;
      company: string;
      service: string;
      message: string;
      submit: string;
      privacy: string;
    };
    serviceOptions: string[];
    successTitle: string;
    successBody: string;
    sidebar: {
      title: string;
      hours: string;
      hoursValue: string;
      response: string;
      responseValue: string;
    };
  };
  footer: {
    tagline: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    rights: string;
  };
  pages: {
    about: {
      title: string;
      lead: string;
      bioTitle: string;
      bio: string[];
      missionTitle: string;
      mission: string;
      whyTitle: string;
      whyItems: { title: string; description: string }[];
    };
    servicesIndex: {
      title: string;
      lead: string;
    };
    contact: {
      title: string;
      lead: string;
    };
    testimonials: {
      title: string;
      lead: string;
      empty: string;
    };
    blog: {
      title: string;
      lead: string;
      soon: string;
    };
  };
};

export const content: Record<Locale, Dict> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      testimonials: "Testimonios",
      blog: "Blog",
      contact: "Contacto",
      cta: "Consulta gratis",
    },
    hero: {
      eyebrow: "3DK Multi Services",
      title: "Tu contabilidad clara,",
      titleHighlight: "tus impuestos en orden.",
      subtitle:
        "Bookkeeping, notaría y preparación de impuestos para pequeñas empresas de construcción. Te enseño a organizar tus finanzas y llegar al fin de año sin estrés.",
      primaryCta: "Agenda tu consulta",
      secondaryCta: "Ver servicios",
      badges: [
        "IRS AFSP Certificada",
        "Notaria Pública",
        "Bilingüe ES / EN",
        "Especialista en construcción",
      ],
    },
    stats: [
      { value: "5+", label: "Años organizando empresas" },
      { value: "100%", label: "Bilingüe ES / EN" },
      { value: "G702/703", label: "Documentos AIA" },
      { value: "AFSP", label: "Certificada IRS" },
    ],
    services: {
      eyebrow: "Lo que hago por ti",
      title: "Servicios diseñados para constructores y subcontratistas",
      subtitle:
        "No solo hago tus libros. Te enseño cómo funcionan para que tu negocio crezca con control y sin sorpresas.",
      viewAll: "Ver todos los servicios",
      items: [
        {
          slug: "bookkeeping",
          href: "/servicios/bookkeeping",
          title: "Bookkeeping",
          description:
            "Organización contable mensual: ingresos, gastos, conciliaciones bancarias y reportes claros.",
          bullets: [
            "Categorización por proyecto",
            "Conciliación bancaria mensual",
            "Reportes de P&L y Balance",
            "QuickBooks listo para tu CPA",
          ],
        },
        {
          slug: "g702-g703",
          href: "/servicios/g702-g703",
          title: "G702 y G703 (AIA)",
          description:
            "Aplicaciones de pago AIA G702/G703 preparadas profesionalmente para que cobres a tiempo.",
          bullets: [
            "Application & Certificate for Payment",
            "Continuation Sheet con line items",
            "Retainage y change orders",
            "Listo para enviar al GC",
          ],
        },
        {
          slug: "notaria",
          href: "/servicios/notaria",
          title: "Notaría Pública",
          description:
            "Servicios de notarización para contratos, declaraciones juradas y documentos comerciales.",
          bullets: [
            "Notary Public licenciada",
            "Citas presenciales y móviles",
            "Documentos en español e inglés",
            "Confidencialidad total",
          ],
        },
        {
          slug: "impuestos",
          href: "/servicios/impuestos",
          title: "Preparación de Impuestos",
          description:
            "Preparación de impuestos personales y de negocio (1040, 1120, 1120S, 1065, Schedule C).",
          bullets: [
            "IRS AFSP certificada con PTIN",
            "Federal y estatal",
            "Self-employed y construction",
            "Planeación fiscal del año",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Soy Luz Adriana Monsalve. Te ayudo a poner orden en tu negocio.",
      paragraphs: [
        "Soy especialista en organización contable y multi-servicios. Fundé 3DK Multi Services para enseñarles a pequeñas empresas de construcción cómo organizar sus finanzas y prepararse para impuestos a fin de año, sin estrés y sin sorpresas.",
        "Cuento con certificación AFSP del IRS, soy Notary Public y trabajo en inglés y español. Mis clientes son contratistas, subcontratistas y dueños de pequeñas empresas que quieren un sistema simple, claro y rentable.",
      ],
      credentialsTitle: "Credenciales",
      credentials: [
        {
          title: "IRS AFSP Certified",
          description:
            "Annual Filing Season Program — preparadora certificada por el IRS, con PTIN activo.",
        },
        {
          title: "Notary Public",
          description: "Notaria pública licenciada para notarización de documentos.",
        },
        {
          title: "Bilingüe ES / EN",
          description: "Atiendo a tu negocio en español o inglés, según prefieras.",
        },
      ],
      cta: "Conóceme más",
    },
    philosophy: {
      eyebrow: "Cómo trabajo",
      title: "Un sistema simple para que tu negocio respire",
      items: [
        {
          title: "1. Organizamos lo que tienes",
          description:
            "Revisamos cuentas, recibos, contratos y ponemos todo en un sistema claro y fácil de seguir.",
        },
        {
          title: "2. Te enseño el flujo",
          description:
            "No te dejo dependiente: aprendes a leer tus números y a tomar decisiones con datos reales.",
        },
        {
          title: "3. Cierre limpio de año",
          description:
            "Llegamos a diciembre con libros al día, deducciones identificadas e impuestos sin sorpresas.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Lo que dicen mis clientes",
      title: "Constructores y subcontratistas que ya respiran tranquilos",
      items: [
        {
          quote:
            "Luz nos puso al día en menos de un mes. Por primera vez sé exactamente cuánto gano por proyecto.",
          author: "Cliente — General Contractor",
          role: "Northern Virginia",
        },
        {
          quote:
            "Las aplicaciones G702 que prepara nos hicieron cobrar más rápido. Lo recomiendo a cualquier sub.",
          author: "Cliente — Subcontratista",
          role: "Virginia / Maryland",
        },
      ],
    },
    contact: {
      eyebrow: "Hablemos",
      title: "Cuéntame qué necesitas y te respondo en menos de 24 horas",
      subtitle:
        "Consulta inicial gratis. Te explico cómo organizar tu negocio y qué servicio te conviene.",
      formLabels: {
        name: "Nombre completo",
        email: "Email",
        phone: "Teléfono / WhatsApp",
        company: "Nombre de la empresa",
        service: "¿En qué te ayudo?",
        message: "Cuéntame brevemente tu situación",
        submit: "Enviar mensaje",
        privacy:
          "Tus datos se usan solo para responderte. Nunca los compartiremos con terceros.",
      },
      serviceOptions: [
        "Bookkeeping mensual",
        "G702 / G703 (AIA)",
        "Notaría",
        "Preparación de impuestos",
        "Consultoría / otro",
      ],
      successTitle: "¡Gracias! Recibí tu mensaje.",
      successBody:
        "Te respondo en menos de 24 horas hábiles. Si es urgente, escríbeme a mi correo directamente.",
      sidebar: {
        title: "Información de contacto",
        hours: "Horario",
        hoursValue: "Lun – Vie · 9:00 a.m. – 6:00 p.m. EST",
        response: "Tiempo de respuesta",
        responseValue: "Menos de 24 horas hábiles",
      },
    },
    footer: {
      tagline:
        "Bookkeeping, notaría e impuestos para pequeñas empresas de construcción. Bilingüe ES / EN.",
      columns: [
        {
          title: "Servicios",
          links: [
            { label: "Bookkeeping", href: "/servicios/bookkeeping" },
            { label: "G702 y G703", href: "/servicios/g702-g703" },
            { label: "Notaría", href: "/servicios/notaria" },
            { label: "Impuestos", href: "/servicios/impuestos" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Sobre mí", href: "/sobre-mi" },
            { label: "Testimonios", href: "/testimonios" },
            { label: "Blog", href: "/blog" },
            { label: "Contacto", href: "/contacto" },
          ],
        },
      ],
      rights: "Todos los derechos reservados.",
    },
    pages: {
      about: {
        title: "Sobre mí",
        lead: "Soy Luz Adriana Monsalve, fundadora de 3DK Multi Services. Pongo orden en la contabilidad de pequeñas empresas de construcción para que crezcan con claridad.",
        bioTitle: "Mi historia",
        bio: [
          "Empecé 3DK Multi Services porque vi a demasiados contratistas excelentes en su oficio perder dinero —y dormir poco— por culpa de una contabilidad desordenada. Mi trabajo es resolver eso.",
          "Hoy ayudo a contratistas, subcontratistas y propietarios de pequeñas empresas a entender sus números, cobrar a tiempo con aplicaciones AIA, y llegar a fin de año con impuestos en orden.",
          "Estoy certificada por el IRS dentro del programa AFSP (Annual Filing Season Program), tengo PTIN activo, y soy Notary Public. Atiendo en español e inglés.",
        ],
        missionTitle: "Mi misión",
        mission:
          "Que ningún contratista pierda dinero ni paz mental por no tener su contabilidad clara. Sistemas simples, números en orden, decisiones con datos.",
        whyTitle: "¿Por qué trabajar conmigo?",
        whyItems: [
          {
            title: "Especialista en construcción",
            description:
              "Conozco G702/G703, retainage, change orders y cómo el flujo de caja real de tu obra impacta tus impuestos.",
          },
          {
            title: "Bilingüe sin compromisos",
            description:
              "Atiendo en español o inglés con la misma profundidad técnica.",
          },
          {
            title: "Te enseño, no te ato",
            description:
              "Quiero que entiendas tus propios números. Te explico paso a paso.",
          },
          {
            title: "Certificada IRS AFSP",
            description:
              "Continuamente actualizada en código tributario federal. PTIN activo.",
          },
        ],
      },
      servicesIndex: {
        title: "Servicios",
        lead: "Cuatro servicios pensados para que tu pequeña empresa de construcción funcione sin caos contable.",
      },
      contact: {
        title: "Contacto",
        lead: "Cuéntame qué necesitas. La consulta inicial es gratis y respondo personalmente.",
      },
      testimonials: {
        title: "Testimonios",
        lead: "Lo que dicen los clientes que ya pusieron sus libros en orden con 3DK Multi Services.",
        empty: "Pronto publicaremos más historias de clientes.",
      },
      blog: {
        title: "Blog",
        lead: "Guías prácticas sobre bookkeeping, G702/G703 e impuestos para contratistas.",
        soon: "Estamos preparando los primeros artículos. Vuelve pronto.",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
      cta: "Free consultation",
    },
    hero: {
      eyebrow: "3DK Multi Services",
      title: "Clear bookkeeping,",
      titleHighlight: "stress-free taxes.",
      subtitle:
        "Bookkeeping, notary, and tax preparation for small construction businesses. I teach you how to organize your finances and reach year-end ready for taxes.",
      primaryCta: "Book your consultation",
      secondaryCta: "See services",
      badges: [
        "IRS AFSP Certified",
        "Notary Public",
        "Bilingual EN / ES",
        "Construction specialist",
      ],
    },
    stats: [
      { value: "5+", label: "Years organizing businesses" },
      { value: "100%", label: "Bilingual EN / ES" },
      { value: "G702/703", label: "AIA documents" },
      { value: "AFSP", label: "IRS certified" },
    ],
    services: {
      eyebrow: "What I do for you",
      title: "Services built for contractors and subcontractors",
      subtitle:
        "I don't just do your books — I teach you how they work so your business can grow with control and no surprises.",
      viewAll: "View all services",
      items: [
        {
          slug: "bookkeeping",
          href: "/en/services/bookkeeping",
          title: "Bookkeeping",
          description:
            "Monthly bookkeeping: income, expenses, bank reconciliations and clean reports.",
          bullets: [
            "Project-based categorization",
            "Monthly bank reconciliation",
            "P&L and Balance Sheet",
            "QuickBooks ready for your CPA",
          ],
        },
        {
          slug: "g702-g703",
          href: "/en/services/g702-g703",
          title: "G702 & G703 (AIA)",
          description:
            "Professionally prepared AIA G702/G703 payment applications so you get paid on time.",
          bullets: [
            "Application & Certificate for Payment",
            "Continuation Sheet with line items",
            "Retainage and change orders",
            "Ready to send to the GC",
          ],
        },
        {
          slug: "notary",
          href: "/en/services/notary",
          title: "Notary Public",
          description:
            "Notarization for contracts, sworn statements and business documents.",
          bullets: [
            "Licensed Notary Public",
            "In-person and mobile appointments",
            "Documents in English and Spanish",
            "Full confidentiality",
          ],
        },
        {
          slug: "tax-preparation",
          href: "/en/services/tax-preparation",
          title: "Tax Preparation",
          description:
            "Personal and business tax preparation (1040, 1120, 1120S, 1065, Schedule C).",
          bullets: [
            "IRS AFSP certified with PTIN",
            "Federal and state",
            "Self-employed and construction",
            "Year-round tax planning",
          ],
        },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "I'm Luz Adriana Monsalve. I bring order to your business.",
      paragraphs: [
        "I'm a specialist in accounting organization and multi-services. I founded 3DK Multi Services to teach small construction businesses how to organize their finances and reach year-end ready for taxes — without stress or surprises.",
        "I'm IRS AFSP certified, a licensed Notary Public, and I work in both English and Spanish. My clients are contractors, subcontractors and small business owners who want a system that's simple, clear and profitable.",
      ],
      credentialsTitle: "Credentials",
      credentials: [
        {
          title: "IRS AFSP Certified",
          description:
            "Annual Filing Season Program — IRS-certified preparer with active PTIN.",
        },
        {
          title: "Notary Public",
          description: "Licensed Notary Public for document notarization.",
        },
        {
          title: "Bilingual EN / ES",
          description: "I serve your business in English or Spanish, your choice.",
        },
      ],
      cta: "Get to know me",
    },
    philosophy: {
      eyebrow: "How I work",
      title: "A simple system so your business can breathe",
      items: [
        {
          title: "1. Organize what you have",
          description:
            "We review accounts, receipts, contracts and put everything in a clear, easy-to-follow system.",
        },
        {
          title: "2. I teach you the flow",
          description:
            "You don't stay dependent on me — you learn to read your numbers and make data-driven decisions.",
        },
        {
          title: "3. Clean year-end close",
          description:
            "We arrive in December with up-to-date books, identified deductions and taxes with no surprises.",
        },
      ],
    },
    testimonials: {
      eyebrow: "What my clients say",
      title: "Contractors and subs who finally sleep at night",
      items: [
        {
          quote:
            "Luz got us caught up in less than a month. For the first time I know exactly what I make per project.",
          author: "Client — General Contractor",
          role: "Northern Virginia",
        },
        {
          quote:
            "The G702 applications she prepares got us paid faster. I recommend her to any sub.",
          author: "Client — Subcontractor",
          role: "Virginia / Maryland",
        },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Tell me what you need and I'll respond within 24 hours",
      subtitle:
        "Free initial consultation. I'll walk you through how to organize your business and what service fits.",
      formLabels: {
        name: "Full name",
        email: "Email",
        phone: "Phone / WhatsApp",
        company: "Company name",
        service: "How can I help?",
        message: "Briefly describe your situation",
        submit: "Send message",
        privacy:
          "Your information is only used to reply to you. We'll never share it.",
      },
      serviceOptions: [
        "Monthly bookkeeping",
        "G702 / G703 (AIA)",
        "Notary",
        "Tax preparation",
        "Consulting / other",
      ],
      successTitle: "Thanks! I received your message.",
      successBody:
        "I'll reply within 24 business hours. If it's urgent, email me directly.",
      sidebar: {
        title: "Contact information",
        hours: "Hours",
        hoursValue: "Mon – Fri · 9:00 a.m. – 6:00 p.m. EST",
        response: "Response time",
        responseValue: "Under 24 business hours",
      },
    },
    footer: {
      tagline:
        "Bookkeeping, notary and taxes for small construction businesses. Bilingual EN / ES.",
      columns: [
        {
          title: "Services",
          links: [
            { label: "Bookkeeping", href: "/en/services/bookkeeping" },
            { label: "G702 & G703", href: "/en/services/g702-g703" },
            { label: "Notary", href: "/en/services/notary" },
            { label: "Tax Preparation", href: "/en/services/tax-preparation" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "/en/about" },
            { label: "Testimonials", href: "/en/testimonials" },
            { label: "Blog", href: "/en/blog" },
            { label: "Contact", href: "/en/contact" },
          ],
        },
      ],
      rights: "All rights reserved.",
    },
    pages: {
      about: {
        title: "About me",
        lead: "I'm Luz Adriana Monsalve, founder of 3DK Multi Services. I bring order to the accounting of small construction businesses so they can grow with clarity.",
        bioTitle: "My story",
        bio: [
          "I started 3DK Multi Services because I saw too many contractors who were excellent at their craft losing money — and sleep — because of disorganized accounting. My job is to fix that.",
          "Today I help contractors, subcontractors and small business owners understand their numbers, get paid on time with AIA applications, and reach year-end with taxes in order.",
          "I'm IRS-certified under the AFSP (Annual Filing Season Program), I hold an active PTIN, and I'm a licensed Notary Public. I work in both English and Spanish.",
        ],
        missionTitle: "My mission",
        mission:
          "That no contractor loses money or peace of mind due to unclear accounting. Simple systems, clean numbers, data-driven decisions.",
        whyTitle: "Why work with me?",
        whyItems: [
          {
            title: "Construction specialist",
            description:
              "I know G702/G703, retainage, change orders and how your real cash flow impacts your taxes.",
          },
          {
            title: "Bilingual, no compromise",
            description:
              "I serve you in English or Spanish with the same technical depth.",
          },
          {
            title: "I teach, I don't tie you down",
            description:
              "I want you to understand your own numbers. I explain step by step.",
          },
          {
            title: "IRS AFSP Certified",
            description:
              "Continuously trained in federal tax code. Active PTIN.",
          },
        ],
      },
      servicesIndex: {
        title: "Services",
        lead: "Four services designed so your small construction business runs without accounting chaos.",
      },
      contact: {
        title: "Contact",
        lead: "Tell me what you need. The first consultation is free and I respond personally.",
      },
      testimonials: {
        title: "Testimonials",
        lead: "What clients who already put their books in order with 3DK Multi Services have to say.",
        empty: "More client stories coming soon.",
      },
      blog: {
        title: "Blog",
        lead: "Practical guides on bookkeeping, G702/G703 and taxes for contractors.",
        soon: "We're preparing the first articles. Check back soon.",
      },
    },
  },
};
