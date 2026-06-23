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

  "about.badge": { es: "Quiénes somos", en: "About us" },
  "about.title": { es: "Construimos canchas. Construimos confianza.", en: "We build courts. We build trust." },
  "about.desc": {
    es: "Somos un equipo técnico especializado en el diseño, construcción y recubrimiento de canchas deportivas de alto rendimiento en todo Chile.",
    en: "A specialized technical team designing, building and coating high-performance sports courts across Chile.",
  },
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

  "trust.title": {
    es: "Confían en nosotros empresas e instituciones",
    en: "Trusted by companies and institutions",
  },

  "cfg.badge": { es: "Diseñador de canchas", en: "Court Designer" },
  "cfg.title": { es: "Diseña tu cancha en minutos.", en: "Design your court in minutes." },
  "cfg.desc": {
    es: "Elige deporte, paleta y trazado de líneas. Guarda tu diseño y lo convertimos en una cancha real — con cotización precisa.",
    en: "Pick a sport, palette and line layout. Save your design and we turn it into a real court — with a precise quote attached.",
  },
  "cfg.open": { es: "Abrir configurador completo", en: "Open full configurator" },
  "cfg.configurable": { es: "Configurable", en: "Configurable" },
  "cfg.customize": { es: "Personalizar", en: "Customize" },

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
