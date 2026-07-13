import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
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
import heroLineDesign from "@/assets/hero-line-design.jpg";
import heroLineTurf from "@/assets/hero-line-turf.jpg";
import heroLinePaints from "@/assets/hero-line-paints.jpg";
import heroLineSchools from "@/assets/hero-line-schools.jpg";
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

type LineKey = "design" | "turf" | "paints" | "schools";

function Hero() {
  const { lang } = useI18n();
  const [active, setActive] = useState<LineKey>("design");
  const [slideKey, setSlideKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const lines: Record<LineKey, {
    num: string;
    eyebrow: string;
    title: [string, string];
    desc: string;
    cta: string;
    to: string;
    hash?: string;
    image: string;
    cardTitle: [string, string];
    tabTitle: string;
    icon: typeof Hammer;
    metrics: { value: string; label: string }[];
  }> = {
    design: {
      num: "01",
      eyebrow: lang === "es" ? "Soluciones deportivas integrales" : "Integrated sports solutions",
      title: lang === "es"
        ? ["Diseñamos y construimos", "canchas deportivas"]
        : ["We design and build", "sports courts"],
      desc: lang === "es"
        ? "Proyectos deportivos, escolares e institucionales de alto estándar y larga duración."
        : "Sports, school and institutional projects built to high standards with lasting durability.",
      cta: lang === "es" ? "Diseñar / Cotizar mi cancha" : "Design / Quote my court",
      to: "/disena-tu-cancha",
      image: heroLineDesign,
      cardTitle: lang === "es" ? ["Canchas", "deportivas"] : ["Sports", "courts"],
      tabTitle: lang === "es" ? "Canchas deportivas" : "Sports courts",
      icon: Hammer,
      metrics: [
        { value: "+150", label: lang === "es" ? "Proyectos ejecutados" : "Projects delivered" },
        { value: "+15", label: lang === "es" ? "Años de experiencia" : "Years of experience" },
        { value: "100%", label: lang === "es" ? "Cumplimiento normativo" : "Regulatory compliance" },
      ],
    },
    turf: {
      num: "02",
      eyebrow: lang === "es" ? "Superficies de alto rendimiento" : "High-performance surfaces",
      title: lang === "es"
        ? ["Instalamos pasto sintético", "profesional y duradero"]
        : ["We install synthetic turf", "professional and durable"],
      desc: lang === "es"
        ? "Fibras monofilamento premium, drenaje eficiente y garantía extendida en cada instalación."
        : "Premium monofilament fibers, efficient drainage and extended warranty on every install.",
      cta: lang === "es" ? "Cotizar pasto sintético" : "Quote synthetic turf",
      to: "/servicios",
      hash: "turf",
      image: heroLineTurf,
      cardTitle: lang === "es" ? ["Pasto", "sintético"] : ["Synthetic", "turf"],
      tabTitle: lang === "es" ? "Pasto sintético" : "Synthetic turf",
      icon: Sprout,
      metrics: [
        { value: "60mm", label: lang === "es" ? "Fibra premium" : "Premium fiber" },
        { value: "+80", label: lang === "es" ? "Canchas instaladas" : "Fields installed" },
        { value: "10 años", label: lang === "es" ? "Garantía extendida" : "Extended warranty" },
      ],
    },
    paints: {
      num: "03",
      eyebrow: lang === "es" ? "Recubrimientos deportivos premium" : "Premium sports coatings",
      title: lang === "es"
        ? ["Aplicamos pinturas deportivas", "de máxima durabilidad"]
        : ["We apply sports paints", "with maximum durability"],
      desc: lang === "es"
        ? "Sistema acrílico profesional con acabado antideslizante, alta resistencia UV y colores personalizados."
        : "Professional acrylic system with anti-slip finish, high UV resistance and custom colors.",
      cta: lang === "es" ? "Cotizar recubrimiento" : "Quote coating",
      to: "/servicios",
      hash: "paints",
      image: heroLinePaints,
      cardTitle: lang === "es" ? ["Pinturas", "deportivas"] : ["Sports", "paints"],
      tabTitle: lang === "es" ? "Pinturas deportivas" : "Sports paints",
      icon: PaintBucket,
      metrics: [
        { value: "+250", label: lang === "es" ? "Canchas pintadas" : "Courts painted" },
        { value: "UV+", label: lang === "es" ? "Alta resistencia solar" : "High UV resistance" },
        { value: "12", label: lang === "es" ? "Colores estándar" : "Standard colors" },
      ],
    },
    schools: {
      num: "04",
      eyebrow: lang === "es" ? "Proyectos institucionales y escolares" : "Institutional & school projects",
      title: lang === "es"
        ? ["Construimos espacios escolares", "normados y seguros"]
        : ["We build school spaces", "compliant and safe"],
      desc: lang === "es"
        ? "Superficies certificadas y cumplimiento normativo para colegios, municipios y clubes deportivos."
        : "Certified surfaces and regulatory compliance for schools, municipalities and sports clubs.",
      cta: lang === "es" ? "Solicitar proyecto escolar" : "Request school project",
      to: "/servicios",
      hash: "schools",
      image: heroLineSchools,
      cardTitle: lang === "es" ? ["Proyectos", "escolares"] : ["School", "projects"],
      tabTitle: lang === "es" ? "Proyectos escolares" : "School projects",
      icon: GraduationCap,
      metrics: [
        { value: "+90", label: lang === "es" ? "Instituciones" : "Institutions" },
        { value: "100%", label: lang === "es" ? "Normativa MINEDUC" : "MINEDUC compliance" },
        { value: "+40", label: lang === "es" ? "Municipios" : "Municipalities" },
      ],
    },
  };

  const order: LineKey[] = ["design", "turf", "paints", "schools"];
  const current = lines[active];

  const handleSelect = (key: LineKey) => {
    if (key === active) return;
    setActive(key);
    setSlideKey((k) => k + 1);
  };

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => {
        const idx = order.indexOf(prev);
        return order[(idx + 1) % order.length];
      });
      setSlideKey((k) => k + 1);
    }, 6500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  return (
    <section
      className="relative flex h-[calc(100vh-4rem)] min-h-[640px] w-full flex-col overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient decor */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full opacity-60"
        style={{ background: "radial-gradient(closest-side, rgba(179,218,45,0.22), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[36%] bottom-[18%] hidden h-28 w-28 opacity-50 lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(54,73,89,0.35) 1px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 pt-6 pb-4 sm:px-6 lg:px-10 lg:pt-8 lg:pb-6">
        {/* Main split 40 / 60 */}
        <div className="grid flex-1 items-stretch gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-10">
          {/* LEFT — 40% dynamic content */}
          <div className="relative flex flex-col justify-center py-4">
            <div
              key={`eyebrow-${slideKey}`}
              className="flex items-center gap-3"
              style={{ animation: "hero-text-in 500ms 60ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <span className="h-px w-10 bg-brand" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-brand">
                {current.eyebrow}
              </span>
            </div>

            <h1
              key={`title-${slideKey}`}
              className="mt-6 font-display text-4xl font-black leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]"
              style={{ animation: "hero-text-in 600ms 160ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <span className="block">{current.title[0]}</span>
              <span className="mt-1 block text-brand">{current.title[1]}</span>
            </h1>

            <p
              key={`desc-${slideKey}`}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animation: "hero-text-in 600ms 240ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              {current.desc}
            </p>

            <div
              key={`cta-${slideKey}`}
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{ animation: "hero-text-in 600ms 320ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <Link
                to={current.to}
                hash={current.hash}
                className="group inline-flex items-center gap-3 rounded-2xl bg-brand px-6 py-3.5 font-display text-base font-black text-brand-foreground shadow-[0_18px_40px_-12px_rgba(179,218,45,0.55)] transition-transform hover:-translate-y-0.5"
              >
                <current.icon className="h-5 w-5" />
                {current.cta}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-ink-foreground transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink hover:text-brand"
              >
                {lang === "es" ? "Hablar con un experto" : "Talk to an expert"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Metrics */}
            <div
              key={`metrics-${slideKey}`}
              className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6"
              style={{ animation: "hero-text-in 600ms 400ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              {current.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl font-black leading-none text-ink sm:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 60% integrated visual */}
          <div className="relative min-h-[360px] lg:min-h-0">
            {/* Full-bleed background image cut with diagonal mask */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%, 0 18%)",
              }}
            >
              {order.map((key) => (
                <img
                  key={key}
                  src={lines[key].image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out"
                  style={{ opacity: key === active ? 1 : 0 }}
                />
              ))}
              {/* Tone gradients — brand-first premium composition */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.05) 30%, transparent 55%, rgba(15,27,42,0.35) 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(35deg, rgba(179,218,45,0.28) 0%, transparent 40%)",
                }}
              />
              {/* Thin brand diagonal accent */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(115deg, transparent 11.5%, #B3DA2D 11.5%, #B3DA2D 12%, transparent 12%)",
                }}
              />
            </div>

            {/* Big rotated numeral watermark bridging the two sides */}
            <div
              key={`num-${slideKey}`}
              aria-hidden
              className="pointer-events-none absolute left-[-2%] top-6 select-none font-display text-[9rem] font-black leading-none tracking-tighter text-ink/[0.08] sm:text-[13rem] lg:text-[16rem]"
              style={{ animation: "hero-num-in 700ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              {current.num}
            </div>

            {/* Floating info chip */}
            <div
              key={`chip-${slideKey}`}
              className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-[11px] font-black uppercase tracking-wider text-ink shadow-lg backdrop-blur"
              style={{ animation: "hero-text-in 500ms 300ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-brand-foreground">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              INVERDEP · {current.num}
            </div>

            {/* Bottom-left floating caption card */}
            <div
              key={`cap-${slideKey}`}
              className="absolute bottom-5 left-5 max-w-[240px] rounded-2xl border border-border bg-background/95 p-4 shadow-[0_20px_50px_-20px_rgba(15,27,42,0.35)] backdrop-blur"
              style={{ animation: "hero-text-in 600ms 380ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground">
                  <current.icon className="h-4 w-4" />
                </span>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand">
                  {current.num} · {lang === "es" ? "Línea activa" : "Active line"}
                </div>
              </div>
              <div className="mt-2 font-display text-sm font-black leading-tight text-ink">
                {current.tabTitle}
              </div>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="relative mt-6 border-t border-border pt-4 lg:mt-8 lg:pt-5">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {order.map((key) => {
              const l = lines[key];
              const isActive = key === active;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelect(key)}
                  aria-pressed={isActive}
                  className={`group relative flex items-center gap-2.5 overflow-hidden rounded-full border px-4 py-2.5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:px-5 ${
                    isActive
                      ? "border-brand bg-ink text-ink-foreground shadow-[0_12px_32px_-14px_rgba(15,27,42,0.55)]"
                      : "border-border bg-card text-ink hover:border-brand/50 hover:-translate-y-0.5"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition ${
                      isActive
                        ? "bg-brand text-brand-foreground"
                        : "bg-brand/15 text-ink group-hover:bg-brand group-hover:text-brand-foreground"
                    }`}
                  >
                    <l.icon className="h-3.5 w-3.5" />
                  </span>
                  <span
                    className={`text-[10px] font-black tracking-widest ${
                      isActive ? "text-brand" : "text-brand/80"
                    }`}
                  >
                    {l.num}
                  </span>
                  <span className="font-display text-sm font-black leading-none">
                    {l.tabTitle}
                  </span>
                  {/* Autoplay progress bar */}
                  {isActive && !paused && (
                    <span
                      key={`bar-${slideKey}`}
                      className="absolute inset-x-3 bottom-1 h-[2px] origin-left rounded-full bg-brand"
                      style={{ animation: "hero-progress 6.5s linear both" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
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
