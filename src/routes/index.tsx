import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Building2,
  Cpu,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Hammer,
  Layers,
  MessageCircle,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trophy,
  Workflow,
  Wrench,
} from "lucide-react";
import heroCourt from "@/assets/hero-court.jpg";
import basketballImg from "@/assets/basketball.jpg";
import futsalImg from "@/assets/futsal.jpg";
import volleyballImg from "@/assets/volleyball.jpg";
import paintImg from "@/assets/paint.jpg";
import constructionImg from "@/assets/construction.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import { I18nProvider, useI18n } from "@/lib/i18n";
import inverdepLogo from "@/assets/logo-green.png";
import inverdepLogoBlue from "@/assets/logo-blue.png";
import inverdepLogoWhite from "@/assets/logo-white.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const SPORTS = [
  { id: "tennis", tKey: "sport.tennis", img: heroCourt },
  { id: "basketball", tKey: "sport.basketball", img: basketballImg },
  { id: "volleyball", tKey: "sport.volleyball", img: volleyballImg },
  { id: "futsal", tKey: "sport.futsal", img: futsalImg },
] as const;

const COURT_COLORS = [
  { name: "Inverdep Green", hex: "#B3DA2D" },
  { name: "Deep Slate", hex: "#364959" },
  { name: "Clay Red", hex: "#C8552B" },
  { name: "Ocean Blue", hex: "#1E5B8C" },
];

const LINE_COLORS = ["#FFFFFF", "#B3DA2D", "#FFD23F", "#0F1B2A"];

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <Certifications />
        <WhyDifferent />
        <Configurator />
        <Services />
        <Paints />
        <Projects />
        <Instagram />
        <CTASection />
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

/* ---------------- Navbar ---------------- */
export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={scrolled ? inverdepLogoBlue : inverdepLogo}
            alt="Inverdep"
            className="h-13 w-auto transition-opacity duration-300"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink md:flex">
          <Link to="/disena-tu-cancha" className="hover:text-brand">
            {t("nav.configurator")}
          </Link>
          <Link to="/servicios" className="hover:text-brand">
            {t("nav.services")}
          </Link>
          <a href="/#paints" className="hover:text-brand">
            {t("nav.paints")}
          </a>
          <Link to="/proyectos" className="hover:text-brand">
            {t("nav.projects")}
          </Link>
          <Link to="/nosotros" className="hover:text-brand">
            {t("nav.about")}
          </Link>
          <Link to="/blog" className="hover:text-brand">
            {t("nav.blog")}
          </Link>
          <Link to="/contacto" className="hover:text-brand">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground shadow-[0_8px_24px_-8px_rgba(179,218,45,0.6)] transition-transform hover:-translate-y-0.5"
          >
            {t("nav.quote")} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Language Switcher ---------------- */
function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-border bg-surface p-0.5 text-[11px] font-bold uppercase tracking-wider"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={l === "es" ? "Español" : "English"}
          className={`rounded-full px-2.5 py-1 transition ${
            lang === l ? "bg-ink text-ink-foreground" : "text-muted-foreground hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

/* ---------------- Hero ---------------- */
function SportCourtLines({ sport, color }: { sport: string; color: string }) {
  const sw = 0.6;
  const common = {
    fill: "none" as const,
    stroke: color,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { transition: "stroke 500ms ease" },
  };
  return (
    <svg
      className="absolute inset-0 h-full w-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {sport === "tennis" && (
        <g {...common}>
          <rect x="10" y="14" width="80" height="72" rx="0.5" />
          <rect x="14" y="14" width="72" height="72" />
          <line x1="14" y1="30" x2="86" y2="30" />
          <line x1="14" y1="70" x2="86" y2="70" />
          <line x1="50" y1="30" x2="50" y2="70" />
          <line x1="50" y1="14" x2="50" y2="18" />
          <line x1="50" y1="82" x2="50" y2="86" />
          <line x1="48" y1="50" x2="52" y2="50" strokeWidth={sw * 1.2} />
        </g>
      )}
      {sport === "basketball" && (
        <g {...common}>
          <rect x="8" y="12" width="84" height="76" />
          <line x1="50" y1="12" x2="50" y2="88" />
          <circle cx="50" cy="50" r="9" />
          <path d="M8,28 Q24,50 8,72" />
          <path d="M92,28 Q76,50 92,72" />
          <rect x="8" y="40" width="14" height="20" />
          <rect x="78" y="40" width="14" height="20" />
          <circle cx="22" cy="50" r="1.2" fill={color} />
          <circle cx="78" cy="50" r="1.2" fill={color} />
        </g>
      )}
      {sport === "volleyball" && (
        <g {...common}>
          <rect x="12" y="20" width="76" height="60" />
          <line x1="50" y1="14" x2="50" y2="86" strokeWidth={sw * 1.4} />
          <line x1="32" y1="20" x2="32" y2="80" strokeDasharray="1.2 1.2" />
          <line x1="68" y1="20" x2="68" y2="80" strokeDasharray="1.2 1.2" />
        </g>
      )}
      {sport === "futsal" && (
        <g {...common}>
          <rect x="8" y="14" width="84" height="72" />
          <line x1="50" y1="14" x2="50" y2="86" />
          <circle cx="50" cy="50" r="10" />
          <path d="M8,38 Q20,50 8,62" />
          <path d="M92,38 Q80,50 92,62" />
          <line x1="8" y1="32" x2="14" y2="32" />
          <line x1="14" y1="32" x2="14" y2="68" />
          <line x1="8" y1="68" x2="14" y2="68" />
          <line x1="92" y1="32" x2="86" y2="32" />
          <line x1="86" y1="32" x2="86" y2="68" />
          <line x1="92" y1="68" x2="86" y2="68" />
        </g>
      )}
    </svg>
  );
}

function Hero() {
type LineKey = "design" | "turf" | "paints" | "schools";

function Hero() {
  const { lang } = useI18n();
  const [active, setActive] = useState<LineKey>("design");
  const [phase, setPhase] = useState<"in" | "out">("in");

  const lines: Record<LineKey, {
    tag: string;
    title: [string, string, string]; // pre, accent, post
    subtitle: string;
    desc: string;
    cta: string;
    to: string;
    hash?: string;
    image: string;
    icon: typeof Hammer;
    sport: "tennis" | "basketball" | "volleyball" | "futsal";
    accent: string;
  }> = {
    design: {
      tag: lang === "es" ? "Línea principal" : "Main line",
      title: lang === "es"
        ? ["Diseñamos y ", "construimos", " tu cancha deportiva."]
        : ["We design and ", "build", " your sports court."],
      subtitle: lang === "es" ? "Tenis · Básquet · Vóley · Fútsal" : "Tennis · Basketball · Volleyball · Futsal",
      desc: lang === "es"
        ? "Proyectos llave en mano con estándares internacionales, materiales premium y equipo propio en cada obra."
        : "Turnkey projects built to international standards with premium materials and our own crew on every site.",
      cta: lang === "es" ? "Diseñar mi cancha" : "Design my court",
      to: "/disena-tu-cancha",
      image: heroCourt,
      icon: Hammer,
      sport: "tennis",
      accent: "#B3DA2D",
    },
    turf: {
      tag: lang === "es" ? "Superficies" : "Surfaces",
      title: lang === "es"
        ? ["Pasto sintético ", "profesional", " para alto rendimiento."]
        : ["Professional ", "synthetic turf", " built for performance."],
      subtitle: lang === "es" ? "Fútbol · Multiuso · Escolar" : "Football · Multi-use · Schools",
      desc: lang === "es"
        ? "Fibras monofilamento de última generación, drenaje eficiente y garantía extendida en cada instalación."
        : "Next-gen monofilament fibers, efficient drainage and extended warranty on every install.",
      cta: lang === "es" ? "Cotizar mi cancha" : "Get a quote",
      to: "/servicios",
      hash: "turf",
      image: futsalImg,
      icon: Sprout,
      sport: "futsal",
      accent: "#7BC96F",
    },
    paints: {
      tag: lang === "es" ? "Recubrimientos" : "Coatings",
      title: lang === "es"
        ? ["Pinturas deportivas ", "premium", " que rinden más."]
        : ["Premium ", "sports paints", " that last longer."],
      subtitle: lang === "es" ? "Sistema acrílico · Exterior e interior" : "Acrylic system · Indoor and outdoor",
      desc: lang === "es"
        ? "Sistemas acrílicos profesionales con acabado antideslizante, alta durabilidad UV y colores personalizados."
        : "Professional acrylic systems with anti-slip finish, high UV durability and custom color matching.",
      cta: lang === "es" ? "Cotizar recubrimiento" : "Quote coating",
      to: "/servicios",
      hash: "paints",
      image: paintImg,
      icon: PaintBucket,
      sport: "basketball",
      accent: "#B3DA2D",
    },
    schools: {
      tag: lang === "es" ? "Institucional" : "Institutional",
      title: lang === "es"
        ? ["Proyectos ", "escolares", " normados y seguros."]
        : ["School ", "projects", " compliant and safe."],
      subtitle: lang === "es" ? "Colegios · Municipios · Clubes" : "Schools · Cities · Clubs",
      desc: lang === "es"
        ? "Superficies certificadas, cumplimiento normativo y espacios pensados para el desarrollo deportivo escolar."
        : "Certified surfaces, regulatory compliance and spaces designed for school sports development.",
      cta: lang === "es" ? "Solicitar proyecto" : "Request project",
      to: "/servicios",
      hash: "schools",
      image: basketballImg,
      icon: GraduationCap,
      sport: "basketball",
      accent: "#B3DA2D",
    },
  };

  const cardOrder: LineKey[] = ["design", "turf", "paints", "schools"];
  const current = lines[active];

  const handleSelect = (key: LineKey) => {
    if (key === active) return;
    setPhase("out");
    window.setTimeout(() => {
      setActive(key);
      setPhase("in");
    }, 220);
  };

  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col overflow-hidden bg-ink text-ink-foreground"
    >
      {/* Ambient background — swaps with active accent */}
      <div className="court-lines pointer-events-none absolute inset-0 opacity-25" />
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full blur-3xl transition-colors duration-700"
        style={{ backgroundColor: `${current.accent}33` }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[520px] w-[520px] rounded-full blur-3xl transition-colors duration-700"
        style={{ backgroundColor: `${current.accent}1a` }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-10 pb-6 sm:px-6 lg:px-8 lg:pt-14 lg:pb-10">
        {/* Main split: dynamic text + visual composition */}
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          {/* Text side (dynamic) */}
          <div
            key={active + "-text"}
            className={`transition-all duration-500 ${
              phase === "in" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                borderColor: `${current.accent}55`,
                backgroundColor: `${current.accent}14`,
                color: current.accent,
              }}
            >
              <current.icon className="h-3.5 w-3.5" /> {current.tag}
            </div>
            <h1 className="mt-6 font-display text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {current.title[0]}
              <span style={{ color: current.accent }}>{current.title[1]}</span>
              <span className="text-ink-foreground/90">{current.title[2]}</span>
            </h1>
            <p className="mt-5 text-base font-medium uppercase tracking-[0.14em] text-ink-foreground/60 sm:text-lg">
              {current.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
              {current.desc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to={current.to}
                hash={current.hash}
                className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-black uppercase tracking-wider text-brand-foreground shadow-[0_18px_50px_-12px_rgba(179,218,45,0.65)] transition-transform hover:-translate-y-0.5 sm:text-base"
                style={{ backgroundColor: current.accent }}
              >
                {current.cta}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-ink-foreground transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/proyectos"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-5 py-3 text-sm font-semibold text-ink-foreground/85 transition hover:border-ink-foreground/60"
              >
                {lang === "es" ? "Ver proyectos" : "See projects"} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Compact stats */}
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              {[
                { k: "100", v: lang === "es" ? "Clientes" : "Clients" },
                { k: "500", v: lang === "es" ? "Canchas" : "Courts" },
                { k: "500K", v: lang === "es" ? "m² construidos" : "m² built" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.04] px-4 py-3">
                  <div className="font-display text-xl font-black text-brand sm:text-2xl">{s.k}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-foreground/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side (dynamic) */}
          <div className="relative h-[340px] w-full sm:h-[420px] lg:h-[560px]">
            <div
              key={active + "-visual"}
              className={`absolute inset-0 transition-all duration-500 ${
                phase === "in" ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
              }`}
            >
              {/* Layered composition */}
              <div className="absolute inset-0 overflow-hidden rounded-[32px] border border-ink-foreground/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]">
                <img
                  src={current.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${current.accent}55 0%, transparent 50%, rgba(15,27,42,0.7) 100%)`,
                  }}
                />
                <div className="pointer-events-none absolute inset-0 opacity-25" style={{
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0 1px, transparent 1px 6px)",
                }} />
              </div>

              {/* Floating court diagram badge */}
              <div
                className="absolute -bottom-6 -left-4 hidden w-[240px] rounded-2xl border p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:block"
                style={{
                  backgroundColor: "rgba(15,27,42,0.75)",
                  borderColor: `${current.accent}44`,
                }}
              >
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-ink-foreground/60">
                  <Cpu className="h-3.5 w-3.5" style={{ color: current.accent }} />
                  {lang === "es" ? "Plataforma INVERDEP" : "INVERDEP platform"}
                </div>
                <div className="mt-3 aspect-[16/10] w-full overflow-hidden rounded-lg" style={{ backgroundColor: current.accent }}>
                  <div className="relative h-full w-full">
                    <SportCourtLines sport={current.sport} color="#ffffff" />
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-bold text-ink-foreground">
                  {lang === "es" ? "Configurable en tiempo real" : "Real-time configurable"}
                </div>
              </div>

              {/* Floating tag */}
              <div
                className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-ink shadow"
                style={{ backgroundColor: current.accent }}
              >
                {current.tag}
              </div>
            </div>
          </div>
        </div>

        {/* Business-line cards strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:mt-12 lg:grid-cols-4">
          {cardOrder.map((key) => {
            const l = lines[key];
            const isActive = key === active;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSelect(key)}
                aria-pressed={isActive}
                className={`group relative flex items-start gap-3 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActive
                    ? "border-brand bg-ink-foreground/[0.08] shadow-[0_20px_50px_-20px_rgba(179,218,45,0.6)] -translate-y-1"
                    : "border-ink-foreground/10 bg-ink-foreground/[0.03] hover:-translate-y-0.5 hover:border-ink-foreground/25 hover:bg-ink-foreground/[0.06]"
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition ${
                    isActive ? "bg-brand text-brand-foreground" : "bg-ink-foreground/10 text-ink-foreground/70 group-hover:text-ink-foreground"
                  }`}
                >
                  <l.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className={`text-[10px] font-black uppercase tracking-wider ${isActive ? "text-brand" : "text-ink-foreground/50"}`}>
                    {l.tag}
                  </div>
                  <div className="mt-1 truncate font-display text-sm font-black leading-tight text-ink-foreground sm:text-base">
                    {l.title[1].charAt(0).toUpperCase() + l.title[1].slice(1)}
                  </div>
                  <div className="mt-0.5 hidden truncate text-[11px] text-ink-foreground/60 sm:block">
                    {l.subtitle}
                  </div>
                </div>
                <ChevronRight
                  className={`mt-1 h-4 w-4 shrink-0 transition ${
                    isActive ? "text-brand translate-x-0.5" : "text-ink-foreground/40 group-hover:text-ink-foreground/70"
                  }`}
                />
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
    </section>
  );
}

/* ---------------- Editorial Card (hero) ---------------- */
function EditorialCard({
  image, tag, title, desc, to, hash, tone,
}: {
  image: string; tag: string; title: string; desc: string;
  to: string; hash?: string; tone: "dark" | "brand" | "light";
}) {
  const toneCls =
    tone === "brand"
      ? "bg-brand text-brand-foreground"
      : tone === "light"
      ? "bg-card text-ink"
      : "bg-ink-foreground/[0.06] text-ink-foreground";
  return (
    <Link
      to={to}
      hash={hash}
      className={`group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-3xl border border-ink-foreground/10 p-5 transition hover:-translate-y-0.5 ${toneCls}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25 transition group-hover:opacity-40"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: tone === "brand" ? "multiply" : "overlay",
        }}
      />
      <div className="relative">
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${tone === "brand" ? "bg-ink text-ink-foreground" : tone === "light" ? "bg-ink/10 text-ink" : "bg-brand/20 text-brand"}`}>
          {tag}
        </span>
        <h3 className="mt-3 font-display text-xl font-black leading-tight sm:text-2xl">{title}</h3>
        <p className={`mt-1.5 text-sm ${tone === "brand" ? "text-brand-foreground/80" : tone === "light" ? "text-muted-foreground" : "text-ink-foreground/70"}`}>
          {desc}
        </p>
      </div>
      <div className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
        Ver más <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

/* ---------------- Certifications ---------------- */
function Certifications() {
  const { t } = useI18n();
  const items = [
    { icon: Trophy, label: t("certs.c1") },
    { icon: Award, label: t("certs.c2") },
    { icon: BadgeCheck, label: t("certs.c3") },
    { icon: ShieldCheck, label: t("certs.c4") },
    { icon: Building2, label: t("certs.c5") },
    { icon: CheckCircle2, label: t("certs.c6") },
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            {t("certs.eyebrow")}
          </span>
          <h2 className="mt-2 max-w-2xl font-display text-2xl font-black tracking-tight text-ink sm:text-3xl">
            {t("certs.title")}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((it) => (
            <div
              key={it.label}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-5 text-center transition hover:-translate-y-0.5 hover:border-brand/60 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-ink transition group-hover:bg-brand group-hover:text-brand-foreground">
                <it.icon className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Different (value proposition) ---------------- */
function WhyDifferent() {
  const { t } = useI18n();
  const pillars = [
    { icon: Cpu, t: t("why.p1.t"), d: t("why.p1.d") },
    { icon: ShieldCheck, t: t("why.p2.t"), d: t("why.p2.d") },
    { icon: Trophy, t: t("why.p3.t"), d: t("why.p3.d") },
    { icon: Workflow, t: t("why.p4.t"), d: t("why.p4.d") },
  ];
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              {t("why.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {t("why.title")}
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">{t("why.desc")}</p>
            <div className="mt-6 h-1 w-24 rounded-full bg-brand" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.t}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl"
              >
                <div className="absolute right-4 top-4 text-[10px] font-black uppercase tracking-wider text-ink/25">
                  0{i + 1}
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-black leading-tight text-ink">
                  {p.t}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Configurator ---------------- */
function Configurator() {
  const { t } = useI18n();
  const lines = [
    {
      icon: Sprout,
      title: t("other.turf.t"),
      desc: t("other.turf.d"),
      to: "/servicios",
      hash: "turf",
    },
    {
      icon: PaintBucket,
      title: t("other.paint.t"),
      desc: t("other.paint.d"),
      to: "/servicios",
      hash: "paints",
    },
    {
      icon: GraduationCap,
      title: t("other.school.t"),
      desc: t("other.school.d"),
      to: "/servicios",
      hash: "schools",
    },
  ];
  return (
    <section id="configurator" className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            <Layers className="h-3.5 w-3.5 text-ink" /> {t("other.badge")}
          </div>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {t("other.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("other.desc")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {lines.map((l) => (
            <Link
              key={l.title}
              to={l.to}
              hash={l.hash}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/15 text-ink transition group-hover:bg-brand group-hover:text-brand-foreground">
                <l.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-black text-ink">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition group-hover:text-brand">
                {t("other.cta")} <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const { t } = useI18n();
  const items = [
    { icon: Ruler, title: t("srv.design.t"), desc: t("srv.design.d") },
    { icon: Hammer, title: t("srv.build.t"), desc: t("srv.build.d") },
    { icon: Layers, title: t("srv.impl.t"), desc: t("srv.impl.d") },
    { icon: Wrench, title: t("srv.maint.t"), desc: t("srv.maint.d") },
  ];
  return (
    <section id="services" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 court-lines opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
            >
              <img
                src={constructionImg}
                alt={t("srv.build.t")}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand p-5 text-brand-foreground shadow-2xl sm:-right-6">
              <div className="font-display text-3xl font-black">100%</div>
              <div className="text-xs font-semibold uppercase tracking-wider">
                {t("srv.inhouse")}
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              {t("srv.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
              {t("srv.title")}
            </h2>
            <p className="mt-4 text-ink-foreground/70">{t("srv.desc")}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="group rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.03] p-5 transition hover:border-brand/60 hover:bg-ink-foreground/[0.06]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-brand-foreground">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{it.title}</h3>
                  <p className="mt-1 text-sm text-ink-foreground/65">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Paints ---------------- */
function Paints() {
  const { t } = useI18n();
  const features = [t("pnt.f1"), t("pnt.f2"), t("pnt.f3"), t("pnt.f4")];
  return (
    <section id="paints" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-8 -top-8 hidden h-40 w-40 rounded-full bg-brand/30 blur-3xl lg:block" />
            <img
              src={paintImg}
              alt={t("pnt.eyebrow")}
              loading="lazy"
              className="relative w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-border bg-card p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <PaintBucket className="h-6 w-6 text-brand" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Inverdep Paints™
                  </div>
                  <div className="text-sm font-bold text-ink">{t("pnt.product")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
              {t("pnt.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {t("pnt.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("pnt.desc")}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-ink-foreground hover:bg-ink/90"
            >
              {t("pnt.cta")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  const { t } = useI18n();
  const projects = [
    { img: project2, title: t("prj.p1"), sport: t("sport.tennis"), year: "2025" },
    { img: basketballImg, title: t("prj.p2"), sport: t("sport.basketball"), year: "2024" },
    { img: futsalImg, title: t("prj.p3"), sport: t("sport.futsal"), year: "2024" },
  ];
  return (
    <section id="projects" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
              {t("prj.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {t("prj.title")}
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-ink hover:text-brand">
            {t("prj.all")} →
          </a>
        </div>

        {/* Before / after feature */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          <div className="grid gap-0 md:grid-cols-[1.4fr_1fr]">
            <div className="relative">
              <img
                src={project1}
                alt={t("prj.beforeafter")}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase text-brand-foreground">
                {t("prj.beforeafter")}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("prj.featured")}
                </span>
                <h3 className="mt-2 font-display text-3xl font-black text-ink">
                  {t("prj.featuredTitle")}
                </h3>
                <p className="mt-3 text-muted-foreground">{t("prj.featuredDesc")}</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  { k: "12d", v: t("prj.m1") },
                  { k: "320m²", v: t("prj.m2") },
                  { k: "A+", v: t("prj.m3") },
                ].map((m) => (
                  <div key={m.v}>
                    <div className="font-display text-xl font-black text-ink">{m.k}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase text-brand-foreground">
                {p.sport}
              </span>
              <div className="absolute inset-x-5 bottom-5 text-ink-foreground">
                <div className="text-xs uppercase tracking-wider opacity-70">{p.year}</div>
                <h3 className="mt-1 font-display text-xl font-black">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Instagram ---------------- */
function Instagram() {
  const { t } = useI18n();
  const tiles = [
    { img: heroCourt, span: "row-span-2" },
    { img: paintImg, span: "" },
    { img: basketballImg, span: "" },
    { img: constructionImg, span: "row-span-2" },
    { img: futsalImg, span: "" },
    { img: project2, span: "" },
    { img: volleyballImg, span: "col-span-2" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
              @inverdep
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {t("ig.title")}
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-semibold text-ink hover:text-brand sm:block">
            {t("ig.follow")} →
          </a>
        </div>
        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {tiles.map((tile, i) => (
            <a
              key={i}
              href="#"
              className={`group relative overflow-hidden rounded-2xl ${tile.span}`}
            >
              <img
                src={tile.img}
                alt="Instagram"
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/60" />
              <span className="absolute inset-0 grid place-items-center text-xs font-bold uppercase tracking-wider text-ink-foreground opacity-0 transition group-hover:opacity-100">
                {t("ig.view")} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTASection() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative overflow-hidden bg-brand text-brand-foreground">
      <div className="absolute inset-0 court-lines opacity-30" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            <ShieldCheck className="h-3.5 w-3.5" /> {t("cta.warranty")}
          </div>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1] tracking-tight sm:text-6xl">
            {t("cta.title")}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-brand-foreground/80">{t("cta.desc")}</p>
        </div>
        <div className="rounded-3xl border border-ink/15 bg-background p-6 text-foreground shadow-2xl sm:p-8">
          <h3 className="font-display text-xl font-black text-ink">{t("cta.formTitle")}</h3>
          <form className="mt-5 grid gap-3">
            <input
              className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand"
              placeholder={t("cta.name")}
            />
            <input
              className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand"
              placeholder={t("cta.contact")}
            />
            <select className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand">
              <option>{t("sport.tennis")}</option>
              <option>{t("sport.basketball")}</option>
              <option>{t("sport.volleyball")}</option>
              <option>{t("sport.futsal")}</option>
              <option>{t("cta.paints")}</option>
            </select>
            <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-ink-foreground hover:bg-ink/90">
              {t("cta.send")} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-black">
              <img src={inverdepLogoWhite} alt="Inverdep" className="h-13 w-auto" />
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink-foreground/65">{t("ftr.tagline")}</p>
          </div>
          {[
            {
              h: t("ftr.courts"),
              l: [
                t("sport.tennis"),
                t("sport.basketball"),
                t("sport.volleyball"),
                t("sport.futsal"),
              ],
            },
            {
              h: t("ftr.company"),
              l: [t("ftr.about"), t("nav.projects"), t("ftr.careers"), t("nav.contact")],
            },
            {
              h: t("ftr.resources"),
              l: [t("nav.configurator"), t("pnt.eyebrow"), t("ftr.maintenance"), t("ftr.warranty")],
            },
          ].map((c) => (
            <div key={c.h}>
              <div className="text-xs font-bold uppercase tracking-wider text-brand">{c.h}</div>
              <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-brand">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} INVERDEP. {t("ftr.rights")}
          </span>
          <span>{t("ftr.built")}</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- WhatsApp Button ---------------- */
export function WhatsAppButton() {
  const { t } = useI18n();
  return (
    <a
      href="#contact"
      aria-label={t("wa.aria")}
      className="pulse-ring fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-foreground shadow-2xl transition hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
