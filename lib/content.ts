import type { Locale } from "./site";

type Dict = {
  nav: {
    home: string;
    about: string;
    services: string;
    pricing: string;
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
      pricing: "Precios",
      testimonials: "Testimonios",
      blog: "Blog",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      eyebrow: "3DK Multi Services",
      title: "Tu contabilidad clara,",
      titleHighlight: "tus impuestos en orden.",
      subtitle:
        "Bookkeeping, impuestos personales y de negocio, notaría, ITIN, 1099 y aplicaciones G702/G703. 15+ años organizando empresas de construcción para que lleguen a fin de año sin estrés.",
      primaryCta: "Agenda tu consulta",
      secondaryCta: "Ver servicios",
      badges: [
        "IRS AFSP Certificada",
        "QuickBooks Certified",
        "Notaria Pública",
        "Bilingüe ES / EN",
        "15+ años en construcción",
      ],
    },
    stats: [
      { value: "15+", label: "Años en construcción" },
      { value: "AFSP", label: "Certificada IRS · PTIN" },
      { value: "QB", label: "Certificada en QuickBooks" },
      { value: "ES · EN", label: "Atención bilingüe" },
    ],
    services: {
      eyebrow: "Lo que hago por ti",
      title: "Servicios diseñados para constructores y subcontratistas",
      subtitle:
        "No solo hago tus libros. Te enseño cómo funcionan para que tu negocio crezca con control y sin sorpresas.",
      viewAll: "Ver todos los servicios",
      items: [
        {
          slug: "impuestos",
          href: "/servicios/impuestos",
          title: "Preparación de Impuestos",
          description:
            "Impuestos personales y de negocio. Certificada IRS AFSP con PTIN activo. También 1099 y solicitud de ITIN.",
          bullets: [
            "Personales (1040, Schedule C, dependientes)",
            "Negocio (1120, 1120S, 1065)",
            "Preparación de 1099-NEC",
            "Tax ID / ITIN para clientes sin SSN",
          ],
        },
        {
          slug: "bookkeeping",
          href: "/servicios/bookkeeping",
          title: "Bookkeeping",
          description:
            "Organización contable mensual: ingresos, gastos, facturación, cuentas por pagar y por cobrar, conciliación bancaria. Certificada en QuickBooks.",
          bullets: [
            "Facturación y AR / AP",
            "Reconciliación bancaria mensual",
            "Configuración de compañía y QuickBooks",
            "Reportes de P&L y Balance",
          ],
        },
        {
          slug: "g702-g703",
          href: "/servicios/g702-g703",
          title: "G702, G703 y Lien Waivers",
          description:
            "Aplicaciones AIA G702/G703 y lien waivers preparados profesionalmente para que cobres a tiempo.",
          bullets: [
            "Application & Certificate for Payment",
            "Continuation Sheet con line items",
            "Retainage y change orders",
            "Lien waivers (parcial y final)",
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
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Soy Luz Adriana Monsalve. Te ayudo a poner orden en tu negocio.",
      paragraphs: [
        "Soy profesional en preparación de impuestos personales y de negocio, certificada AFSP por el IRS y certificada en QuickBooks. Fundé 3DK Multi Services para enseñarles a pequeñas empresas de construcción cómo organizar sus finanzas y llegar a fin de año sin sorpresas.",
        "Con más de 15 años de experiencia en empresas de construcción, también soy Notary Public, Agente de Bienes Raíces, y tengo Licenciatura en Ciencias y Administración de Empresas en Salud. Atiendo en español e inglés.",
      ],
      credentialsTitle: "Credenciales",
      credentials: [
        {
          title: "IRS AFSP Certified · PTIN activo",
          description:
            "Annual Filing Season Program. Impuestos personales y de negocio, federal y estatal.",
        },
        {
          title: "QuickBooks Certified",
          description:
            "Certificada en QuickBooks Online y Desktop. Setup, catch-up y gestión mensual.",
        },
        {
          title: "Notary Public",
          description:
            "Notaria pública licenciada. Documentos comerciales y personales, español o inglés.",
        },
        {
          title: "Agente de Bienes Raíces",
          description:
            "Licencia activa de Real Estate Agent.",
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
      title: "Clientes que respiran tranquilos con sus números",
      items: [
        {
          quote:
            "Gracias Luz Adriana Monsalve por tomarte el tiempo y explicarme cómo se debe hacer una declaración de taxes, por asegurarte de revisar cada papel que llevaba. No solo me ayudaste con los taxes personales míos, sino también con los de mi papá. Definitivamente 100% recomendable y confiable.",
          author: "Cliente de Preparación de Impuestos",
          role: "2026",
        },
      ],
    },
    contact: {
      eyebrow: "Hablemos",
      title: "Cuéntame qué necesitas y te respondo en menos de 24 horas",
      subtitle:
        "Escríbeme libremente por WhatsApp o el formulario. Para análisis formal, agenda una consulta de $49.99 o $99.99 (acreditable 100% si después contratas un plan).",
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
        title: "Quién es Luz Adriana Monsalve",
        lead: "Fundadora de 3DK Multi Services. Profesional en preparación de impuestos con más de 15 años de experiencia en empresas de construcción. Establecida en Gainesville, Georgia. Atiendo en todos los Estados Unidos.",
        bioTitle: "Mi historia",
        bio: [
          "Empecé 3DK Multi Services porque vi a demasiados contratistas excelentes en su oficio perder dinero —y dormir poco— por culpa de una contabilidad desordenada y de no estar al día con sus impuestos. Mi trabajo es resolver eso.",
          "Hoy ayudo a contratistas, subcontratistas, propietarios de pequeñas empresas y también a personas con sus impuestos individuales: entender sus números, cobrar a tiempo con aplicaciones AIA, declarar correctamente cada año, y planear con tiempo. Atiendo clientes en todo Estados Unidos.",
          "Cuento con certificación AFSP del IRS y PTIN activo, soy QuickBooks Certified, Notary Public, Agente de Bienes Raíces, y tengo Bachelor in Science and Health Administration con concentración en Management. Atiendo en español e inglés.",
          "Además soy autora del libro \"Crecí Sin Permiso\" (Legacy), donde cuento mi propia historia — la de una niña obligada a madurar, sobrevivir y avanzar sola. Esa misma resiliencia es la que llevo a cada cliente que me confía sus números.",
        ],
        missionTitle: "Mi misión",
        mission:
          "Que ningún contratista ni familia pierda dinero ni paz mental por no tener sus números claros. Sistemas simples, impuestos en orden, decisiones con datos.",
        whyTitle: "¿Por qué trabajar conmigo?",
        whyItems: [
          {
            title: "15+ años en construcción",
            description:
              "Conozco G702/G703, retainage, change orders, lien waivers y cómo el flujo real de tu obra impacta tus impuestos.",
          },
          {
            title: "Impuestos personales y de negocio",
            description:
              "Personales (1040 + Schedule C), corporativos (1120, 1120S, 1065), 1099, ITIN, federal y estatal.",
          },
          {
            title: "Certificada IRS AFSP + QuickBooks",
            description:
              "Continuamente actualizada en código tributario federal. PTIN activo. Certified en QuickBooks Online y Desktop.",
          },
          {
            title: "Bilingüe sin compromisos",
            description:
              "Atiendo en español o inglés con la misma profundidad técnica.",
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
      pricing: "Pricing",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "3DK Multi Services",
      title: "Clear bookkeeping,",
      titleHighlight: "stress-free taxes.",
      subtitle:
        "Bookkeeping, personal and business taxes, notary, ITIN, 1099 and AIA G702/G703 applications. 15+ years organizing construction businesses to reach year-end stress-free.",
      primaryCta: "Book your consultation",
      secondaryCta: "See services",
      badges: [
        "IRS AFSP Certified",
        "QuickBooks Certified",
        "Notary Public",
        "Bilingual EN / ES",
        "15+ years in construction",
      ],
    },
    stats: [
      { value: "15+", label: "Years in construction" },
      { value: "AFSP", label: "IRS certified · PTIN" },
      { value: "QB", label: "QuickBooks Certified" },
      { value: "EN · ES", label: "Bilingual service" },
    ],
    services: {
      eyebrow: "What I do for you",
      title: "Services built for contractors and subcontractors",
      subtitle:
        "I don't just do your books — I teach you how they work so your business can grow with control and no surprises.",
      viewAll: "View all services",
      items: [
        {
          slug: "tax-preparation",
          href: "/en/services/tax-preparation",
          title: "Tax Preparation",
          description:
            "Personal and business taxes. IRS AFSP certified with active PTIN. Also 1099 prep and ITIN applications.",
          bullets: [
            "Personal (1040, Schedule C, dependents)",
            "Business (1120, 1120S, 1065)",
            "1099-NEC preparation",
            "Tax ID / ITIN for clients without SSN",
          ],
        },
        {
          slug: "bookkeeping",
          href: "/en/services/bookkeeping",
          title: "Bookkeeping",
          description:
            "Monthly bookkeeping: income, expenses, invoicing, AR/AP and bank reconciliation. QuickBooks Certified.",
          bullets: [
            "Invoicing and AR / AP",
            "Monthly bank reconciliation",
            "Company setup and QuickBooks setup",
            "P&L and Balance Sheet reports",
          ],
        },
        {
          slug: "g702-g703",
          href: "/en/services/g702-g703",
          title: "G702, G703 & Lien Waivers",
          description:
            "Professionally prepared AIA G702/G703 and lien waivers so you get paid on time.",
          bullets: [
            "Application & Certificate for Payment",
            "Continuation Sheet with line items",
            "Retainage and change orders",
            "Lien waivers (partial and final)",
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
      ],
    },
    about: {
      eyebrow: "About me",
      title: "I'm Luz Adriana Monsalve. I bring order to your business.",
      paragraphs: [
        "I'm a professional tax preparer for personal and business taxes, IRS AFSP certified and QuickBooks Certified. I founded 3DK Multi Services to teach small construction businesses how to organize their finances and reach year-end without surprises.",
        "With 15+ years of experience in construction businesses, I'm also a licensed Notary Public, licensed Real Estate Agent, and hold a Bachelor's degree in Health Sciences and Business Administration. I serve in English and Spanish.",
      ],
      credentialsTitle: "Credentials",
      credentials: [
        {
          title: "IRS AFSP Certified · Active PTIN",
          description:
            "Annual Filing Season Program. Personal and business taxes, federal and state.",
        },
        {
          title: "QuickBooks Certified",
          description:
            "Certified in QuickBooks Online and Desktop. Setup, catch-up and monthly management.",
        },
        {
          title: "Notary Public",
          description:
            "Licensed Notary Public. Business and personal documents, English or Spanish.",
        },
        {
          title: "Real Estate Agent",
          description:
            "Active Real Estate Agent license.",
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
      title: "Clients who finally sleep easy about their numbers",
      items: [
        {
          quote:
            "Thank you Luz Adriana Monsalve for taking the time to explain to me how a tax return should be done, and for making sure to review every paper I brought. You didn't just help me with my own personal taxes — you also helped with my dad's. Definitely 100% recommended and trustworthy.",
          author: "Personal Tax Preparation Client",
          role: "2026",
        },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Tell me what you need and I'll respond within 24 hours",
      subtitle:
        "Message me freely via WhatsApp or the form. For a formal analysis, book a $49.99 or $99.99 consultation (100% credited if you later sign up for a plan).",
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
        title: "Who is Luz Adriana Monsalve",
        lead: "Founder of 3DK Multi Services. Professional tax preparer with 15+ years of experience in construction businesses. Based in Gainesville, Georgia. Serving clients across the United States.",
        bioTitle: "My story",
        bio: [
          "I started 3DK Multi Services because I saw too many contractors who were excellent at their craft losing money — and sleep — because of disorganized accounting and being behind on taxes. My job is to fix that.",
          "Today I help contractors, subcontractors, small business owners, and individuals with their personal taxes: understand their numbers, get paid on time with AIA applications, file correctly every year, and plan ahead. I serve clients across all of the United States.",
          "I hold IRS AFSP certification with an active PTIN, I'm QuickBooks Certified, a licensed Notary Public, licensed Real Estate Agent, and I hold a Bachelor in Science and Health Administration with a concentration in Management. I serve in English and Spanish.",
          "I'm also the author of the book \"Crecí Sin Permiso\" (Legacy), where I share my own story — a girl forced to mature, survive and move forward alone. That same resilience is what I bring to every client who trusts me with their numbers.",
        ],
        missionTitle: "My mission",
        mission:
          "That no contractor or family loses money or peace of mind due to unclear numbers. Simple systems, taxes in order, data-driven decisions.",
        whyTitle: "Why work with me?",
        whyItems: [
          {
            title: "15+ years in construction",
            description:
              "I know G702/G703, retainage, change orders, lien waivers and how your real cash flow impacts your taxes.",
          },
          {
            title: "Personal and business taxes",
            description:
              "Personal (1040 + Schedule C), corporate (1120, 1120S, 1065), 1099, ITIN, federal and state.",
          },
          {
            title: "IRS AFSP Certified + QuickBooks",
            description:
              "Continuously trained in federal tax code. Active PTIN. Certified in QuickBooks Online and Desktop.",
          },
          {
            title: "Bilingual, no compromise",
            description:
              "I serve you in English or Spanish with the same technical depth.",
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
