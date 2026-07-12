import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const dict = {
  "nav.configurator": { es: "Diseñador", en: "Designer" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.paints": { es: "Pinturas", en: "Paints" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.quote": { es: "Solicitar cotización", en: "Get a quote" },
  "nav.about": { es: "Nosotros", en: "About" },
  "nav.blog": { es: "Blog", en: "Blog" },

  "about.badge": { es: "Quiénes somos", en: "About us" },
  "about.title": { es: "Construimos canchas. Construimos confianza.", en: "We build courts. We build trust." },
  "about.desc": {
    es: "Somos un equipo técnico especializado en el diseño, construcción y recubrimiento de canchas deportivas de alto rendimiento en todo Chile.",
    en: "A specialized technical team designing, building and coating high-performance sports courts across Chile.",
  },
  "about.hero.kicker": { es: "Equipo · Experiencia · Especialización", en: "Team · Experience · Expertise" },

  "about.who.eyebrow": { es: "Quiénes somos", en: "Who we are" },
  "about.who.title": { es: "Especialistas en canchas deportivas.", en: "Sports court specialists." },
  "about.who.p1": {
    es: "Más de una década diseñando, construyendo y recubriendo canchas de alto rendimiento para clubes, colegios y municipios.",
    en: "Over a decade designing, building and coating high-performance courts for clubs, schools and municipalities.",
  },
  "about.who.p2": {
    es: "Trabajamos de forma integral: desde el primer plano hasta la última línea pintada, con equipo propio y materiales premium.",
    en: "We work end-to-end: from the first blueprint to the last painted line, with our own crew and premium materials.",
  },
  "about.who.b1": { es: "Diseño técnico y planimetría", en: "Technical design and planning" },
  "about.who.b2": { es: "Construcción llave en mano", en: "Turnkey construction" },
  "about.who.b3": { es: "Pinturas y pasto sintético", en: "Paints and synthetic turf" },

  "about.ceo.eyebrow": { es: "Liderazgo", en: "Leadership" },
  "about.ceo.title": { es: "Detrás de cada cancha, un equipo con propósito.", en: "Behind every court, a team with purpose." },
  "about.ceo.name": { es: "Rodrigo Pérez", en: "Rodrigo Pérez" },
  "about.ceo.role": { es: "CEO & Fundador", en: "CEO & Founder" },
  "about.ceo.quote": {
    es: "“Una cancha bien hecha cambia comunidades. Por eso cuidamos cada detalle como si fuera la nuestra.”",
    en: "“A well-built court transforms communities. That's why we treat every detail as if it were our own.”",
  },

  "about.props.eyebrow": { es: "Propuesta de valor", en: "Value proposition" },
  "about.props.title": { es: "Por qué eligen INVERDEP.", en: "Why teams choose INVERDEP." },
  "about.props.p1.t": { es: "Calidad certificada", en: "Certified quality" },
  "about.props.p1.d": { es: "Materiales y procesos bajo norma deportiva.", en: "Sport-grade materials and processes." },
  "about.props.p2.t": { es: "Innovación constante", en: "Constant innovation" },
  "about.props.p2.d": { es: "Diseño digital y superficies de última generación.", en: "Digital design and next-gen surfaces." },
  "about.props.p3.t": { es: "Cumplimiento", en: "On-time delivery" },
  "about.props.p3.d": { es: "Plazos y presupuestos respetados, sin sorpresas.", en: "Timelines and budgets respected, no surprises." },
  "about.props.p4.t": { es: "Impacto deportivo", en: "Sports impact" },
  "about.props.p4.d": { es: "Espacios que potencian deporte y educación.", en: "Spaces that elevate sport and education." },

  "about.cta.title": { es: "Conoce lo que hemos construido.", en: "See what we've built." },
  "about.cta.desc": { es: "Explora proyectos reales o descubre cada servicio en detalle.", en: "Browse real projects or discover each service in detail." },
  "about.cta.projects": { es: "Ver proyectos", en: "View projects" },
  "about.cta.services": { es: "Conocer servicios", en: "Our services" },

  "about.stat1.k": { es: "+15", en: "+15" },
  "about.stat1.v": { es: "Años de experiencia", en: "Years of experience" },
  "about.stat2.k": { es: "100%", en: "100%" },
  "about.stat2.v": { es: "Equipo propio", en: "In-house team" },
  "about.stat3.k": { es: "5", en: "5" },
  "about.stat3.v": { es: "Años de garantía", en: "Year warranty" },

  "about.mvv.eyebrow": { es: "Lo que nos mueve", en: "What drives us" },
  "about.mvv.title": { es: "Misión, visión y valores.", en: "Mission, vision and values." },
  "about.mission.t": { es: "Misión", en: "Mission" },
  "about.mission.d": {
    es: "Diseñar y construir espacios deportivos seguros, duraderos y de alto rendimiento que impulsen el deporte en cada comunidad.",
    en: "Design and build safe, durable, high-performance sports spaces that drive sport in every community.",
  },
  "about.vision.t": { es: "Visión", en: "Vision" },
  "about.vision.d": {
    es: "Ser la empresa referente en Latinoamérica en construcción y recubrimiento de canchas deportivas profesionales.",
    en: "Become Latin America's leading company in professional sports court construction and coatings.",
  },
  "about.values.t": { es: "Valores", en: "Values" },
  "about.values.d": {
    es: "Compromiso, calidad técnica, innovación y cercanía con cada cliente — del primer plano al último detalle.",
    en: "Commitment, technical quality, innovation and closeness with every client — from blueprint to final detail.",
  },

  "about.values.eyebrow": { es: "Principios", en: "Principles" },
  "about.values.title": { es: "Lo que defendemos en cada obra.", en: "What we stand for on every project." },
  "about.v1.t": { es: "Calidad", en: "Quality" },
  "about.v1.d": { es: "Materiales premium y estándares deportivos.", en: "Premium materials, sport-grade standards." },
  "about.v2.t": { es: "Compromiso", en: "Commitment" },
  "about.v2.d": { es: "Plazos cumplidos, palabra empeñada.", en: "Deadlines met, word kept." },
  "about.v3.t": { es: "Innovación", en: "Innovation" },
  "about.v3.d": { es: "Diseño, tecnología y mejora continua.", en: "Design, technology, continuous improvement." },
  "about.v4.t": { es: "Seguridad", en: "Safety" },
  "about.v4.d": { es: "Protocolos certificados en cada faena.", en: "Certified protocols on every job site." },

  "about.goals.eyebrow": { es: "Hacia dónde vamos", en: "Where we're heading" },
  "about.goals.title": { es: "Nuestros objetivos.", en: "Our goals." },
  "about.g1.t": { es: "Expansión nacional", en: "National expansion" },
  "about.g1.d": { es: "Llevar canchas profesionales a cada región de Chile.", en: "Bring professional courts to every region of Chile." },
  "about.g2.t": { es: "Sustentabilidad", en: "Sustainability" },
  "about.g2.d": { es: "Materiales y procesos con menor huella ambiental.", en: "Lower-footprint materials and processes." },
  "about.g3.t": { es: "Tecnología deportiva", en: "Sports technology" },
  "about.g3.d": { es: "Superficies inteligentes y diseño digital.", en: "Smart surfaces and digital design." },
  "about.g4.t": { es: "Formación técnica", en: "Technical training" },
  "about.g4.d": { es: "Capacitar nuevos especialistas en construcción deportiva.", en: "Train new specialists in sports construction." },

  "about.cert.eyebrow": { es: "Respaldos", en: "Endorsements" },
  "about.cert.title": { es: "Certificaciones y alianzas.", en: "Certifications and partners." },
  "about.cert.desc": {
    es: "Trabajamos bajo normativas técnicas y deportivas reconocidas, con respaldo de instituciones y fabricantes líderes.",
    en: "We work under recognized technical and sports standards, backed by leading institutions and manufacturers.",
  },
  "about.cert.c1": { es: "Normativa ITF", en: "ITF compliant" },
  "about.cert.c2": { es: "Estándar FIBA", en: "FIBA standard" },
  "about.cert.c3": { es: "ISO 9001", en: "ISO 9001" },
  "about.cert.c4": { es: "Mutual de Seguridad", en: "Safety certified" },
  "about.cert.c5": { es: "Proveedor del Estado", en: "Government supplier" },
  "about.cert.c6": { es: "Garantía 5 años", en: "5-year warranty" },

  "hero.badge": { es: "Innovación en canchas deportivas", en: "Sports court innovation" },
  "hero.title1": { es: "Diseña tu", en: "Design your" },
  "hero.title2": { es: "cancha deportiva.", en: "sports court." },
  "hero.title3": { es: "Nosotros la construimos.", en: "We build it." },
  "hero.desc": {
    es: "Tenis · Básquet · Vóley · Fútsal. Del concepto al primer punto — INVERDEP diseña, construye y recubre canchas de alto rendimiento con pinturas deportivas premium.",
    en: "Tennis · Basketball · Volleyball · Futsal. From concept to first serve — INVERDEP designs, constructs and coats high-performance courts with premium sports paints.",
  },
  "hero.cta1": { es: "Diseña tu cancha", en: "Design your court" },
  "hero.cta2": { es: "Ver proyectos", en: "View projects" },
  "hero.stat1": { es: "Clientes", en: "Clients" },
  "hero.stat2": { es: "Canchas", en: "Courts" },
  "hero.stat3": { es: "Metros cuadrados construidos", en: "Square meters built" },

  "panel.sport": { es: "Deporte", en: "Sport" },
  "panel.courtColor": { es: "Color de cancha", en: "Court color" },
  "panel.lineColor": { es: "Color de líneas", en: "Line color" },
  "panel.save": { es: "Guardar", en: "Save" },

  "sport.tennis": { es: "Tenis", en: "Tennis" },
  "sport.basketball": { es: "Básquet", en: "Basketball" },
  "sport.volleyball": { es: "Vóley", en: "Volleyball" },
  "sport.futsal": { es: "Fútsal", en: "Futsal" },
  "sport.multicourt": { es: "Multicancha", en: "Multi-court" },

  "trust.title": {
    es: "Confían en nosotros empresas e instituciones",
    en: "Trusted by companies and institutions",
  },

  "hero.kicker": { es: "Plataforma INVERDEP", en: "INVERDEP platform" },
  "hero.designer.badge": { es: "Diseñador de canchas", en: "Court Designer" },
  "hero.designer.title": { es: "Diseña tu cancha ahora", en: "Design your court now" },
  "hero.designer.desc": {
    es: "Elige deporte, colores y superficie. Guarda tu diseño y te devolvemos una cotización real.",
    en: "Pick sport, colors and surface. Save your design and get a real quote back.",
  },
  "hero.designer.cta": { es: "Diseña tu cancha ahora", en: "Design your court now" },
  "hero.designer.open": { es: "Abrir configurador completo", en: "Open full configurator" },
  "hero.card1.tag": { es: "Línea principal", en: "Core line" },
  "hero.card1.t": { es: "Diseño y construcción de canchas", en: "Court design & construction" },
  "hero.card1.d": { es: "Tenis, básquet, vóley, fútsal. Llave en mano.", en: "Tennis, basketball, volleyball, futsal. Turnkey." },
  "hero.card2.tag": { es: "Recubrimientos", en: "Coatings" },
  "hero.card2.t": { es: "Pinturas deportivas premium", en: "Premium sports paints" },
  "hero.card2.d": { es: "Sistema acrílico profesional, exterior e interior.", en: "Pro acrylic system, indoor and outdoor." },
  "hero.card3.tag": { es: "Proyectos escolares", en: "School projects" },
  "hero.card3.t": { es: "Espacios normados para colegios", en: "Compliant courts for schools" },
  "hero.card3.d": { es: "Superficies seguras y certificadas.", en: "Safe, certified surfaces." },

  "certs.eyebrow": { es: "Respaldos", en: "Endorsements" },
  "certs.title": {
    es: "Certificaciones y estándares que respaldan nuestro trabajo",
    en: "Certifications and standards that back our work",
  },
  "certs.c1": { es: "Normativa ITF", en: "ITF standard" },
  "certs.c2": { es: "Estándar FIBA", en: "FIBA standard" },
  "certs.c3": { es: "ISO 9001", en: "ISO 9001" },
  "certs.c4": { es: "Mutual de Seguridad", en: "Safety certified" },
  "certs.c5": { es: "Proveedor del Estado", en: "Government supplier" },
  "certs.c6": { es: "Garantía 5 años", en: "5-year warranty" },

  "why.eyebrow": { es: "Por qué somos distintos", en: "Why we're different" },
  "why.title": { es: "Una propuesta diseñada para durar.", en: "A proposition built to last." },
  "why.desc": {
    es: "No somos una constructora más. Somos un equipo especializado en canchas deportivas de alto rendimiento.",
    en: "We're not another construction firm. We're a team specialized in high-performance sports courts.",
  },
  "why.p1.t": { es: "Diseño personalizado y tecnológico", en: "Custom, tech-driven design" },
  "why.p1.d": { es: "Cada cancha se configura digitalmente antes de la primera línea trazada.", en: "Every court is configured digitally before the first line is drawn." },
  "why.p2.t": { es: "Cumplimiento normativo y certificaciones", en: "Regulatory compliance & certifications" },
  "why.p2.d": { es: "Trabajamos bajo estándares deportivos internacionales y normativa local.", en: "We work under international sports standards and local regulations." },
  "why.p3.t": { es: "Experiencia institucional y deportiva", en: "Institutional & sports experience" },
  "why.p3.d": { es: "Municipios, colegios y clubes profesionales ya confían en nosotros.", en: "Municipalities, schools and pro clubs already trust us." },
  "why.p4.t": { es: "Integración total: diseño, obra y mantención", en: "Full integration: design, build & upkeep" },
  "why.p4.d": { es: "Un solo interlocutor de principio a fin, con equipo propio.", en: "A single point of contact end to end, with our own crew." },

  "cfg.badge": { es: "Diseñador de canchas", en: "Court Designer" },
  "cfg.title": { es: "Diseña tu cancha en minutos.", en: "Design your court in minutes." },
  "cfg.desc": {
    es: "Elige deporte, paleta y trazado de líneas. Guarda tu diseño y lo convertimos en una cancha real — con cotización precisa.",
    en: "Pick a sport, palette and line layout. Save your design and we turn it into a real court — with a precise quote attached.",
  },
  "cfg.open": { es: "Abrir configurador completo", en: "Open full configurator" },
  "cfg.configurable": { es: "Configurable", en: "Configurable" },
  "cfg.customize": { es: "Personalizar", en: "Customize" },
  "other.badge": { es: "Otras líneas de negocio", en: "Other business lines" },
  "other.title": { es: "Soluciones complementarias.", en: "Complementary solutions." },
  "other.desc": {
    es: "Servicios especializados que potencian cada proyecto deportivo, desde superficies hasta espacios escolares.",
    en: "Specialized services that strengthen every sports project, from surfaces to school spaces.",
  },
  "other.cta": { es: "Conocer servicio", en: "Learn more" },
  "other.turf.t": { es: "Pasto sintético", en: "Synthetic turf" },
  "other.turf.d": {
    es: "Superficies de alto rendimiento para fútbol y multicancha.",
    en: "High-performance surfaces for football and multi-sport courts.",
  },
  "other.paint.t": { es: "Pinturas deportivas", en: "Sports paints" },
  "other.paint.d": {
    es: "Acabados técnicos resistentes con líneas reglamentarias precisas.",
    en: "Durable technical finishes with precise regulation lines.",
  },
  "other.school.t": { es: "Proyectos escolares", en: "School projects" },
  "other.school.d": {
    es: "Canchas seguras y normadas para establecimientos educacionales.",
    en: "Safe, compliant courts for educational institutions.",
  },

  "srv.eyebrow": { es: "Qué hacemos", en: "What we do" },
  "srv.title": {
    es: "De la primera línea en el plano a la última mano de pintura.",
    en: "From the first line on paper to the final coat.",
  },
  "srv.desc": {
    es: "Ejecución integral. Un solo equipo, una sola responsabilidad — superficies de ingeniería que mantienen su agarre, color y geometría temporada tras temporada.",
    en: "End-to-end execution. One team, one accountability — engineered surfaces that hold their grip, color and geometry season after season.",
  },
  "srv.inhouse": { es: "Equipo propio", en: "In-house team" },
  "srv.design.t": { es: "Diseño", en: "Design" },
  "srv.design.d": {
    es: "Mockups 3D, layout y cumplimiento de normativas deportivas.",
    en: "3D mockups, layout, sport-spec compliance.",
  },
  "srv.build.t": { es: "Construcción", en: "Construction" },
  "srv.build.d": {
    es: "Base, drenaje, superficie y cerramientos.",
    en: "Sub-base, drainage, surfacing, fencing.",
  },
  "srv.impl.t": { es: "Implementación", en: "Implementation" },
  "srv.impl.d": {
    es: "Recubrimientos premium, líneas y acabados.",
    en: "Premium coatings, line marking, finishing.",
  },
  "srv.maint.t": { es: "Mantenimiento", en: "Maintenance" },
  "srv.maint.d": {
    es: "Repintado, resurfacing y soporte de por vida.",
    en: "Resurfacing, repainting, lifetime support.",
  },

  "pnt.eyebrow": { es: "Pinturas deportivas", en: "Sports paints" },
  "pnt.title": {
    es: "Recubrimientos diseñados para tu juego.",
    en: "Coatings engineered for the way you play.",
  },
  "pnt.desc": {
    es: "Nuestra línea complementaria de pinturas entrega el agarre, profundidad de color y durabilidad de una instalación profesional — interior o exterior, cualquier clima.",
    en: "Our complementary paint line delivers the grip, color depth and durability of a professional facility — indoor or outdoor, every climate.",
  },
  "pnt.f1": { es: "Acabado antideslizante texturizado", en: "Anti-slip textured finish" },
  "pnt.f2": { es: "Resistente a UV y a la intemperie", en: "UV & weather resistant" },
  "pnt.f3": { es: "Fórmulas para interior y exterior", en: "Indoor and outdoor formulas" },
  "pnt.f4": { es: "Colores a medida", en: "Custom color matching" },
  "pnt.cta": { es: "Cotizar pintura", en: "Request paint quote" },
  "pnt.product": { es: "Sistema acrílico Pro", en: "Pro acrylic system" },

  "prj.eyebrow": { es: "Proyectos", en: "Projects" },
  "prj.title": { es: "Antes, después — y aún jugando.", en: "Before, after — and still playing." },
  "prj.all": { es: "Todos los proyectos", en: "All projects" },
  "prj.beforeafter": { es: "Antes / Después", en: "Before / After" },
  "prj.featured": { es: "Proyecto destacado", en: "Featured project" },
  "prj.featuredTitle": {
    es: "De concreto agrietado a superficie de campeonato.",
    en: "Cracked concrete to championship surface.",
  },
  "prj.featuredDesc": {
    es: "Resurfacing total, repintado y rediseño de líneas en 12 días laborables.",
    en: "Full resurfacing, repainting and line-layout overhaul in 12 working days.",
  },
  "prj.m1": { es: "Tiempo de obra", en: "Build time" },
  "prj.m2": { es: "Superficie", en: "Surface" },
  "prj.m3": { es: "Clase de agarre", en: "Grip class" },
  "prj.p1": { es: "Complejo de tenis estadio", en: "Stadium Tennis Complex" },
  "prj.p2": { es: "Cancha urbana de básquet", en: "Urban Basketball Court" },
  "prj.p3": { es: "Arena municipal de fútsal", en: "Municipal Futsal Arena" },

  "ig.title": { es: "En las canchas, cada semana.", en: "On the courts, every week." },
  "ig.follow": { es: "Seguir en Instagram", en: "Follow on Instagram" },
  "ig.view": { es: "Ver proyecto", en: "View project" },

  "cta.warranty": { es: "Garantía estructural de 5 años", en: "5-year structural warranty" },
  "cta.title": { es: "¿Listos para empezar la obra?", en: "Ready to break ground?" },
  "cta.desc": {
    es: "Cuéntanos sobre tu espacio. Te entregamos un cronograma y cotización en 72 horas.",
    en: "Tell us about your space. We come back with a timeline and quote within 72 hours.",
  },
  "cta.formTitle": { es: "Solicitar cotización", en: "Get a quote" },
  "cta.name": { es: "Nombre completo", en: "Full name" },
  "cta.contact": { es: "Email o teléfono", en: "Email or phone" },
  "cta.send": { es: "Enviar solicitud", en: "Send request" },
  "cta.paints": { es: "Pinturas deportivas", en: "Sports paints" },

  "ftr.tagline": {
    es: "Diseño, construcción y recubrimientos de canchas deportivas. Ingeniería para jugar.",
    en: "Sports court design, construction & coatings. Engineered to play.",
  },
  "ftr.courts": { es: "Canchas", en: "Courts" },
  "ftr.company": { es: "Empresa", en: "Company" },
  "ftr.resources": { es: "Recursos", en: "Resources" },
  "ftr.about": { es: "Nosotros", en: "About" },
  "ftr.careers": { es: "Trabaja con nosotros", en: "Careers" },
  "ftr.warranty": { es: "Garantía", en: "Warranty" },
  "ftr.maintenance": { es: "Mantenimiento", en: "Maintenance" },
  "ftr.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
  "ftr.built": { es: "Diseñado y construido en casa.", en: "Designed and built in-house." },

  "wa.aria": { es: "Chatear por WhatsApp", en: "Chat on WhatsApp" },

  "contact.title": { es: "Contáctanos", en: "Contact us" },
  "contact.eyebrow": { es: "Hablemos", en: "Let's talk" },
  "contact.desc": {
    es: "Cuéntanos sobre tu proyecto. Te respondemos con un plan y cotización en 72 horas.",
    en: "Tell us about your project. We reply with a plan and quote within 72 hours.",
  },
  "contact.form.title": { es: "Solicitar cotización", en: "Request a quote" },
  "contact.form.name": { es: "Nombre", en: "Name" },
  "contact.form.email": { es: "Correo electrónico", en: "Email" },
  "contact.form.phone": { es: "Teléfono", en: "Phone" },
  "contact.form.message": { es: "Mensaje", en: "Message" },
  "contact.form.send": { es: "Solicitar cotización", en: "Request a quote" },
  "contact.form.sent": { es: "¡Gracias! Te contactaremos pronto.", en: "Thanks! We'll be in touch shortly." },
  "contact.info.title": { es: "Información de contacto", en: "Contact information" },
  "contact.info.phone": { es: "Teléfonos", en: "Phone" },
  "contact.info.email": { es: "Correo", en: "Email" },
  "contact.info.address": { es: "Dirección", en: "Address" },
  "contact.info.addressValue": { es: "Santiago, Chile", en: "Santiago, Chile" },
  "contact.info.hours": { es: "Horario de atención", en: "Business hours" },
  "contact.info.hoursValue": {
    es: "Lunes a Viernes · 9:00 – 18:00",
    en: "Monday to Friday · 9:00 – 18:00",
  },
  "contact.map.title": { es: "Dónde estamos", en: "Where we are" },
  "contact.map.desc": {
    es: "Operamos en todo Chile desde nuestra base en Santiago.",
    en: "We operate across Chile from our base in Santiago.",
  },

  "projects.eyebrow": { es: "Portafolio", en: "Portfolio" },
  "projects.title": { es: "Proyectos", en: "Projects" },
  "projects.subtitle": {
    es: "Canchas diseñadas y construidas para alto rendimiento.",
    en: "Courts designed and built for high performance.",
  },
  "projects.all": { es: "Todos", en: "All" },
  "projects.client": { es: "Cliente", en: "Client" },
  "projects.before": { es: "Antes", en: "Before" },
  "projects.after": { es: "Después", en: "After" },
  "projects.drag": { es: "Arrastra para comparar", en: "Drag to compare" },

  "projects.t1.name": { es: "Club de Tenis Las Condes", en: "Las Condes Tennis Club" },
  "projects.t1.client": { es: "Municipalidad de Las Condes", en: "Las Condes Municipality" },
  "projects.t1.desc": {
    es: "Resurfacing completo y repintado de dos canchas outdoor con sistema acrílico Pro.",
    en: "Full resurfacing and repainting of two outdoor courts with Pro acrylic system.",
  },
  "projects.t2.name": { es: "Academia Providencia Tenis", en: "Providencia Tennis Academy" },
  "projects.t2.client": { es: "Municipalidad de Providencia", en: "Providencia Municipality" },
  "projects.t2.desc": {
    es: "Construcción de cancha de tenis con base permeable y trazado ITF.",
    en: "Tennis court build with permeable base and ITF line layout.",
  },

  "projects.b1.name": { es: "Polideportivo La Florida", en: "La Florida Sports Center" },
  "projects.b1.client": { es: "Municipalidad de La Florida", en: "La Florida Municipality" },
  "projects.b1.desc": {
    es: "Recubrimiento deportivo, líneas FIBA y nuevo diseño cromático corporativo.",
    en: "Sports coating, FIBA lines and new corporate color scheme.",
  },
  "projects.b2.name": { es: "Cancha Urbana Pedro Aguirre Cerda", en: "PAC Urban Court" },
  "projects.b2.client": { es: "Municipalidad de Pedro Aguirre Cerda", en: "Pedro Aguirre Cerda Municipality" },
  "projects.b2.desc": {
    es: "Renovación integral de cancha de barrio con superficie antideslizante.",
    en: "Full neighborhood court renovation with anti-slip surface.",
  },

  "projects.v1.name": { es: "Gimnasio Municipal Tomé", en: "Tomé Municipal Gym" },
  "projects.v1.client": { es: "Municipalidad de Tomé", en: "Tomé Municipality" },
  "projects.v1.desc": {
    es: "Cancha indoor multiuso con líneas de vóleibol y acabado de alto agarre.",
    en: "Multi-use indoor court with volleyball lines and high-grip finish.",
  },

  "projects.f1.name": { es: "Arena Futsal San Ignacio", en: "San Ignacio Futsal Arena" },
  "projects.f1.client": { es: "Colegio San Ignacio", en: "San Ignacio School" },
  "projects.f1.desc": {
    es: "Construcción completa de cancha de fútsal con cerramiento y drenaje.",
    en: "Full futsal court build with fencing and drainage.",
  },
  "projects.f2.name": { es: "Cancha Sintética La Florida", en: "La Florida Synthetic Court" },
  "projects.f2.client": { es: "Municipalidad de La Florida", en: "La Florida Municipality" },
  "projects.f2.desc": {
    es: "Reemplazo de superficie y rediseño de líneas para uso comunitario.",
    en: "Surface replacement and line redesign for community use.",
  },

  "services.eyebrow": { es: "Qué hacemos", en: "What we do" },
  "services.title": { es: "Servicios", en: "Services" },
  "services.subtitle": {
    es: "Soluciones integrales para el diseño y construcción de canchas deportivas.",
    en: "End-to-end solutions for the design and construction of sports courts.",
  },
  "services.nav.title": { es: "Navegación rápida", en: "Quick navigation" },

  "services.s1.tab": { es: "Canchas deportivas", en: "Sports courts" },
  "services.s1.title": {
    es: "Diseño, construcción y mantenimiento de canchas deportivas",
    en: "Sports court design, construction and maintenance",
  },
  "services.s1.desc": {
    es: "Ejecución integral de canchas profesionales: desde el levantamiento topográfico y la base, hasta el recubrimiento final y mantenimiento periódico. Un solo equipo responsable de cada etapa.",
    en: "End-to-end execution of professional courts: from survey and sub-base to final coating and periodic maintenance. One team accountable for every stage.",
  },
  "services.s1.b1": { es: "Diseño 3D y cumplimiento ITF / FIBA.", en: "3D design with ITF / FIBA compliance." },
  "services.s1.b2": { es: "Base, drenaje, superficie y cerramientos.", en: "Sub-base, drainage, surface and fencing." },
  "services.s1.b3": { es: "Mantenimiento, repintado y resurfacing.", en: "Maintenance, repainting and resurfacing." },
  "services.s1.b4": { es: "Garantía estructural de 5 años.", en: "5-year structural warranty." },
  "services.s1.cta": { es: "Ver proyectos", en: "View projects" },

  "services.s2.tab": { es: "Pasto sintético", en: "Synthetic turf" },
  "services.s2.title": { es: "Pasto sintético deportivo", en: "Sports synthetic turf" },
  "services.s2.desc": {
    es: "Instalación de pasto sintético de alta densidad para uso deportivo intensivo. Diseñado para resistir, lucir y rendir temporada tras temporada.",
    en: "High-density synthetic turf installation for intensive sports use. Built to endure, look and perform season after season.",
  },
  "services.s2.b1": { es: "Fibras resistentes a UV e intemperie.", en: "UV and weather resistant fibers." },
  "services.s2.b2": { es: "Bajo mantenimiento, alto rendimiento.", en: "Low maintenance, high performance." },
  "services.s2.b3": { es: "Drenaje integrado y base nivelada.", en: "Integrated drainage and level sub-base." },
  "services.s2.b4": { es: "Fútbol, fútsal y áreas multiuso.", en: "Football, futsal and multi-use areas." },
  "services.s2.cta": { es: "Solicitar información", en: "Request information" },

  "services.s3.tab": { es: "Pinturas deportivas", en: "Sports paints" },
  "services.s3.title": { es: "Pinturas deportivas indoor y outdoor", en: "Indoor & outdoor sports paints" },
  "services.s3.desc": {
    es: "Recubrimientos acrílicos profesionales con agarre texturizado, color profundo y durabilidad de instalación deportiva — interior o exterior, cualquier clima.",
    en: "Professional acrylic coatings with textured grip, deep color and pro-grade durability — indoor or outdoor, every climate.",
  },
  "services.s3.b1": { es: "Acabado antideslizante texturizado.", en: "Anti-slip textured finish." },
  "services.s3.b2": { es: "Resistente a UV y a la intemperie.", en: "UV and weather resistant." },
  "services.s3.b3": { es: "Fórmulas indoor y outdoor.", en: "Indoor and outdoor formulas." },
  "services.s3.b4": { es: "Colores a medida.", en: "Custom color matching." },
  "services.s3.cta": { es: "Cotizar pinturas", en: "Request paint quote" },

  "services.s4.tab": { es: "Proyectos escolares", en: "School projects" },
  "services.s4.title": { es: "Proyectos escolares e institucionales", en: "School and institutional projects" },
  "services.s4.desc": {
    es: "Canchas seguras y duraderas para colegios e instituciones educativas. Cumplimos normativa, plazos y presupuestos públicos con la misma calidad técnica de obras profesionales.",
    en: "Safe and durable courts for schools and educational institutions. We meet regulations, deadlines and public budgets with the same technical quality as professional builds.",
  },
  "services.s4.b1": { es: "Superficies seguras y antideslizantes.", en: "Safe, anti-slip surfaces." },
  "services.s4.b2": { es: "Cumplimiento de normativa escolar.", en: "Compliance with school regulations." },
  "services.s4.b3": { es: "Materiales durables y fáciles de mantener.", en: "Durable, easy-to-maintain materials." },
  "services.s4.b4": { es: "Experiencia con municipalidades y colegios.", en: "Experience with municipalities and schools." },
  "services.s4.cta": { es: "Ver soluciones para colegios", en: "View school solutions" },

  "designer.eyebrow": { es: "Diseñador interactivo", en: "Interactive designer" },
  "designer.title": { es: "Diseña tu cancha", en: "Design your court" },
  "designer.subtitle": {
    es: "Configura tu cancha deportiva y solicita tu cotización.",
    en: "Configure your sports court and request your quote.",
  },

  "designer.step1.eyebrow": { es: "Paso 1", en: "Step 1" },
  "designer.step1.title": { es: "Elige el tipo de superficie", en: "Choose the surface type" },
  "designer.step1.desc": {
    es: "La superficie define qué deportes están disponibles para configurar.",
    en: "The surface determines which sports are available to configure.",
  },

  "designer.dims.label": { es: "Dimensiones", en: "Dimensions" },
  "designer.dims.locked": { es: "No disponible para esta superficie", en: "Not available for this surface" },
  "designer.dims.width": { es: "Ancho (m)", en: "Width (m)" },
  "designer.dims.height": { es: "Largo (m)", en: "Length (m)" },
  "designer.dims.area": { es: "Área total", en: "Total area" },
  "designer.dims.reset": { es: "Restablecer estándar", en: "Reset to standard" },

  "designer.step2.eyebrow": { es: "Paso 2", en: "Step 2" },
  "designer.step2.title": { es: "Selecciona tu deporte", en: "Select your sport" },
  "designer.step2.desc": {
    es: "Los deportes se habilitan según la superficie elegida.",
    en: "Sports are enabled based on the chosen surface.",
  },

  "designer.step3.eyebrow": { es: "Paso 3", en: "Step 3" },
  "designer.step3.title": { es: "Define las dimensiones", en: "Set the dimensions" },
  "designer.step3.desc": {
    es: "Ajusta ancho y largo a la medida de tu proyecto.",
    en: "Adjust width and length to fit your project.",
  },
  "designer.color.outer": { es: "Fondo exterior", en: "Outer surface" },
  "designer.color.inner": { es: "Fondo interior", en: "Inner playing area" },
  "designer.color.lines": { es: "Líneas de la cancha", en: "Court lines" },

  "designer.step4.eyebrow": { es: "Paso 4", en: "Step 4" },
  "designer.step4.title": { es: "Personaliza los colores", en: "Customize the colors" },
  "designer.step4.desc": {
    es: "Paleta deportiva en formato PANTONE.",
    en: "Sport palette in PANTONE format.",
  },
  "designer.surface.acrylic": { es: "Pintura acrílica", en: "Acrylic paint" },
  "designer.surface.acrylic.d": {
    es: "Recubrimiento deportivo profesional, agarre texturizado.",
    en: "Professional sports coating with textured grip.",
  },
  "designer.surface.turf": { es: "Pasto sintético", en: "Synthetic turf" },
  "designer.surface.turf.d": {
    es: "Fibra de alta densidad, ideal para fútsal y multiuso.",
    en: "High-density fiber, ideal for futsal and multi-use.",
  },

  "designer.step5.eyebrow": { es: "Paso 5", en: "Step 5" },
  "designer.step5.title": { es: "Vista de tu cancha", en: "Your court preview" },
  "designer.step5.desc": {
    es: "Añade un logo PNG y ajústalo directamente sobre la cancha.",
    en: "Add a PNG logo and drag or resize it directly on the court.",
  },
  "designer.logo.title": { es: "Logo personalizado", en: "Custom logo" },
  "designer.logo.help": {
    es: "Sube un archivo PNG con fondo transparente. Arrástralo y redimensiónalo desde la esquina.",
    en: "Upload a PNG with transparent background. Drag it and resize from the corner.",
  },
  "designer.logo.upload": { es: "Subir logo PNG", en: "Upload PNG logo" },
  "designer.logo.change": { es: "Cambiar logo", en: "Change logo" },
  "designer.logo.remove": { es: "Quitar logo", en: "Remove logo" },
  "designer.logo.included": { es: "Logo incluido", en: "Logo included" },
  "designer.logo.notIncluded": { es: "Sin logo", en: "No logo" },

  "designer.step6.eyebrow": { es: "Paso 6", en: "Step 6" },
  "designer.step6.title": { es: "Resumen de tu configuración", en: "Your configuration summary" },

  "designer.step7.eyebrow": { es: "Paso 7", en: "Step 7" },
  "designer.step7.title": { es: "Solicita tu cotización", en: "Request your quote" },
  "designer.step7.desc": {
    es: "Te respondemos con un plan y cotización en 72 horas.",
    en: "We reply with a plan and quote within 72 hours.",
  },
  "designer.sum.logo": { es: "Logo", en: "Logo" },
  "quote.logoItem": { es: "Adicional: aplicación de logo personalizado", en: "Add-on: custom logo application" },
  "designer.sum.sport": { es: "Deporte", en: "Sport" },
  "designer.sum.dims": { es: "Dimensiones", en: "Dimensions" },
  "designer.sum.outer": { es: "Fondo exterior", en: "Outer surface" },
  "designer.sum.inner": { es: "Fondo interior", en: "Inner area" },
  "designer.sum.lines": { es: "Líneas", en: "Lines" },
  "designer.sum.surface": { es: "Superficie", en: "Surface" },
  "designer.form.firstName": { es: "Nombre", en: "First name" },
  "designer.form.lastName": { es: "Apellido", en: "Last name" },
  "designer.form.email": { es: "Correo electrónico", en: "Email" },
  "designer.form.phone": { es: "Teléfono", en: "Phone" },
  "designer.form.message": { es: "Mensaje", en: "Message" },
  "designer.form.send": { es: "Solicitar cotización", en: "Request a quote" },
  "designer.form.sent": { es: "¡Gracias! Te contactaremos pronto.", en: "Thanks! We'll be in touch shortly." },

  "blog.eyebrow": { es: "Noticias", en: "News" },
  "blog.title": { es: "Blog", en: "Blog" },
  "blog.subtitle": {
    es: "Novedades, proyectos y noticias del mundo deportivo.",
    en: "Updates, projects and news from the sports world.",
  },
  "blog.readMore": { es: "Leer más", en: "Read more" },

  "blog.p1.title": { es: "Cómo elegir la superficie ideal para tu cancha", en: "How to choose the ideal surface for your court" },
  "blog.p1.excerpt": {
    es: "Comparamos acrílico, pasto sintético y hormigón por durabilidad, agarre y mantenimiento.",
    en: "We compare acrylic, synthetic turf and concrete for durability, grip and maintenance.",
  },
  "blog.p1.date": { es: "15 Jun 2026", en: "Jun 15, 2026" },

  "blog.p2.title": { es: "Nueva cancha urbana en La Florida", en: "New urban court in La Florida" },
  "blog.p2.excerpt": {
    es: "Entregamos una cancha de básquetbol con recubrimiento deportivo y líneas FIBA.",
    en: "We delivered a basketball court with sports coating and FIBA lines.",
  },
  "blog.p2.date": { es: "10 Jun 2026", en: "Jun 10, 2026" },

  "blog.p3.title": { es: "Mantenimiento de canchas de vóleibol: guía práctica", en: "Volleyball court maintenance: a practical guide" },
  "blog.p3.excerpt": {
    es: "Consejos para prolongar la vida útil de tu superficie deportiva indoor y outdoor.",
    en: "Tips to extend the lifespan of your indoor and outdoor sports surface.",
  },
  "blog.p3.date": { es: "28 May 2026", en: "May 28, 2026" },

  "blog.p4.title": { es: "Lo que define una cancha de alto rendimiento", en: "What defines a high-performance court" },
  "blog.p4.excerpt": {
    es: "Desde el drenaje hasta el último trazo: los detalles técnicos que marcan la diferencia.",
    en: "From drainage to the final line: the technical details that make the difference.",
  },
  "blog.p4.date": { es: "15 May 2026", en: "May 15, 2026" },

  "blog.p5.title": { es: "Colores PANTONE en pinturas deportivas", en: "PANTONE colors in sports paints" },
  "blog.p5.excerpt": {
    es: "Cómo logramos acabados precisos y duraderos usando referencias de color estándar.",
    en: "How we achieve precise and durable finishes using standard color references.",
  },
  "blog.p5.date": { es: "3 May 2026", en: "May 3, 2026" },

  "blog.p6.title": { es: "Proyecto destacado: resurfacing en 12 días", en: "Featured project: resurfacing in 12 days" },
  "blog.p6.excerpt": {
    es: "Transformamos una superficie agrietada en una cancha de campeonato en tiempo récord.",
    en: "We transformed a cracked surface into a championship court in record time.",
  },
  "blog.p6.date": { es: "20 Abr 2026", en: "Apr 20, 2026" },

  "quote.title": { es: "Cotización", en: "Quotation" },
  "quote.subbrand": { es: "Diseño · Construcción · Recubrimientos", en: "Design · Construction · Coatings" },
  "quote.number": { es: "Nº", en: "No." },
  "quote.date": { es: "Fecha", en: "Date" },
  "quote.close": { es: "Cerrar", en: "Close" },
  "quote.clientTitle": { es: "Datos del cliente", en: "Client details" },
  "quote.name": { es: "Nombre", en: "Name" },
  "quote.email": { es: "Correo electrónico", en: "Email" },
  "quote.phone": { es: "Teléfono", en: "Phone" },
  "quote.location": { es: "Ciudad / Región", en: "City / Region" },
  "quote.projectTitle": { es: "Características del proyecto", en: "Project characteristics" },
  "quote.sport": { es: "Deporte", en: "Sport" },
  "quote.surface": { es: "Superficie", en: "Surface" },
  "quote.dimensions": { es: "Dimensiones", en: "Dimensions" },
  "quote.area": { es: "Área total", en: "Total area" },
  "quote.outerColor": { es: "Fondo exterior", en: "Outer surface" },
  "quote.innerColor": { es: "Fondo interior", en: "Inner area" },
  "quote.lineColor": { es: "Líneas", en: "Lines" },
  "quote.detailTitle": { es: "Detalle de la cotización", en: "Quote detail" },
  "quote.colItem": { es: "Ítem", en: "Item" },
  "quote.colQty": { es: "Cantidad", en: "Quantity" },
  "quote.colUnit": { es: "Valor unitario", en: "Unit price" },
  "quote.colTotal": { es: "Total", en: "Total" },
  "quote.subtotal": { es: "Neto", en: "Net" },
  "quote.tax": { es: "IVA", en: "VAT" },
  "quote.total": { es: "Total", en: "Total" },
  "quote.conditionsTitle": { es: "Condiciones comerciales", en: "Commercial conditions" },
  "quote.validityLabel": { es: "Validez", en: "Validity" },
  "quote.paymentLabel": { es: "Forma de pago", en: "Payment terms" },
  "quote.exclusionsLabel": { es: "Exclusiones", en: "Exclusions" },
  "quote.footerNote": { es: "Cotización referencial sujeta a visita técnica y condiciones del terreno.", en: "Reference quote subject to technical visit and site conditions." },
  "quote.btnPreview": { es: "Ver cotización", en: "View quote" },
  "quote.btnGenerate": { es: "Generar cotización", en: "Generate quote" },

  "projects.hero.m1.k": { es: "+150", en: "+150" },
  "projects.hero.m1.v": { es: "Proyectos entregados", en: "Delivered projects" },
  "projects.hero.m2.k": { es: "12", en: "12" },
  "projects.hero.m2.v": { es: "Disciplinas", en: "Sports disciplines" },
  "projects.hero.m3.k": { es: "Nacional", en: "Nationwide" },
  "projects.hero.m3.v": { es: "Cobertura", en: "Coverage" },
  "projects.hero.m4.k": { es: "+15", en: "+15" },
  "projects.hero.m4.v": { es: "Años de experiencia", en: "Years of experience" },

  "services.hero.explore": { es: "Explora nuestras líneas", en: "Explore our lines" },
  "services.s1.hero": { es: "Diseño, construcción y remodelación de canchas outdoor e indoor.", en: "Design, construction and renovation of outdoor and indoor courts." },
  "services.s2.hero": { es: "Instalación de pasto sintético premium para fútbol y multiuso.", en: "Premium synthetic turf installation for football and multi-use fields." },
  "services.s3.hero": { es: "Pinturas acrílicas deportivas de alto tráfico y larga duración.", en: "High-traffic, long-lasting acrylic sports paints." },
  "services.s4.hero": { es: "Proyectos deportivos escolares y municipales llave en mano.", en: "Turnkey school and municipal sports projects." },

  "about.hero.metric1.k": { es: "+150", en: "+150" },
  "about.hero.metric1.v": { es: "Proyectos", en: "Projects" },
  "about.hero.metric2.k": { es: "+15", en: "+15" },
  "about.hero.metric2.v": { es: "Años", en: "Years" },
  "about.hero.metric3.k": { es: "100%", en: "100%" },
  "about.hero.metric3.v": { es: "Equipo propio", en: "In-house team" },

  "blog.hero.featured": { es: "Artículo destacado", en: "Featured article" },
  "blog.hero.read": { es: "Leer artículo", en: "Read article" },
  "blog.hero.latest": { es: "Última publicación", en: "Latest post" },

  "contact.hero.reply": { es: "Respuesta en 72h", en: "72h reply time" },
  "contact.hero.phone": { es: "+56 9 0000 0000", en: "+56 9 0000 0000" },
  "contact.hero.email": { es: "contacto@inverdep.cl", en: "contacto@inverdep.cl" },
} satisfies Dict;

type Key = keyof typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "es",
  setLang: () => {},
  t: (k) => dict[k].es,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const t = (k: Key) => dict[k][lang];
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
