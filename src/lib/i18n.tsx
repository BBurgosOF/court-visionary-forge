import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, { es: string; en: string }>;

export const dict = {
  "nav.configurator": { es: "Configurador", en: "Configurator" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.paints": { es: "Pinturas", en: "Paints" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.quote": { es: "Solicitar cotización", en: "Get a quote" },

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
  "hero.stat1": { es: "Canchas construidas", en: "Courts built" },
  "hero.stat2": { es: "Años de oficio", en: "Years of craft" },
  "hero.stat3": { es: "Países", en: "Countries" },

  "panel.sport": { es: "Deporte", en: "Sport" },
  "panel.courtColor": { es: "Color de cancha", en: "Court color" },
  "panel.lineColor": { es: "Color de líneas", en: "Line color" },
  "panel.save": { es: "Guardar", en: "Save" },

  "sport.tennis": { es: "Tenis", en: "Tennis" },
  "sport.basketball": { es: "Básquet", en: "Basketball" },
  "sport.volleyball": { es: "Vóley", en: "Volleyball" },
  "sport.futsal": { es: "Fútsal", en: "Futsal" },

  "trust.title": { es: "Confían en nosotros empresas e instituciones", en: "Trusted by companies and institutions" },

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
  "srv.title": { es: "De la primera línea en el plano a la última mano de pintura.", en: "From the first line on paper to the final coat." },
  "srv.desc": {
    es: "Ejecución integral. Un solo equipo, una sola responsabilidad — superficies de ingeniería que mantienen su agarre, color y geometría temporada tras temporada.",
    en: "End-to-end execution. One team, one accountability — engineered surfaces that hold their grip, color and geometry season after season.",
  },
  "srv.inhouse": { es: "Equipo propio", en: "In-house team" },
  "srv.design.t": { es: "Diseño", en: "Design" },
  "srv.design.d": { es: "Mockups 3D, layout y cumplimiento de normativas deportivas.", en: "3D mockups, layout, sport-spec compliance." },
  "srv.build.t": { es: "Construcción", en: "Construction" },
  "srv.build.d": { es: "Base, drenaje, superficie y cerramientos.", en: "Sub-base, drainage, surfacing, fencing." },
  "srv.impl.t": { es: "Implementación", en: "Implementation" },
  "srv.impl.d": { es: "Recubrimientos premium, líneas y acabados.", en: "Premium coatings, line marking, finishing." },
  "srv.maint.t": { es: "Mantenimiento", en: "Maintenance" },
  "srv.maint.d": { es: "Repintado, resurfacing y soporte de por vida.", en: "Resurfacing, repainting, lifetime support." },

  "pnt.eyebrow": { es: "Pinturas deportivas", en: "Sports paints" },
  "pnt.title": { es: "Recubrimientos diseñados para tu juego.", en: "Coatings engineered for the way you play." },
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
  "prj.featuredTitle": { es: "De concreto agrietado a superficie de campeonato.", en: "Cracked concrete to championship surface." },
  "prj.featuredDesc": { es: "Resurfacing total, repintado y rediseño de líneas en 12 días laborables.", en: "Full resurfacing, repainting and line-layout overhaul in 12 working days." },
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
    es: "Cuéntanos sobre tu espacio. Te entregamos un mockup 3D, cronograma y cotización fija en 72 horas.",
    en: "Tell us about your space. We come back with a 3D mockup, timeline and fixed quote within 72 hours.",
  },
  "cta.formTitle": { es: "Solicitar cotización", en: "Get a quote" },
  "cta.name": { es: "Nombre completo", en: "Full name" },
  "cta.contact": { es: "Email o teléfono", en: "Email or phone" },
  "cta.send": { es: "Enviar solicitud", en: "Send request" },
  "cta.paints": { es: "Pinturas deportivas", en: "Sports paints" },

  "ftr.tagline": { es: "Diseño, construcción y recubrimientos de canchas deportivas. Ingeniería para jugar.", en: "Sports court design, construction & coatings. Engineered to play." },
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