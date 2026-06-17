import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Hammer,
  Layers,
  MessageCircle,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Sparkles,
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
      <TrustBar />
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
function Navbar() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-ink-foreground">
            <span className="h-3 w-3 rounded-sm bg-brand" />
          </span>
          <span className="font-display text-xl font-black tracking-tight text-ink">
            INVER<span className="text-brand">DEP</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink md:flex">
          <a href="#configurator" className="hover:text-brand">{t("nav.configurator")}</a>
          <a href="#services" className="hover:text-brand">{t("nav.services")}</a>
          <a href="#paints" className="hover:text-brand">{t("nav.paints")}</a>
          <a href="#projects" className="hover:text-brand">{t("nav.projects")}</a>
          <a href="#contact" className="hover:text-brand">{t("nav.contact")}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
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
function Hero() {
  const { t } = useI18n();
  const [sport, setSport] = useState<(typeof SPORTS)[number]["id"]>("tennis");
  const [courtColor, setCourtColor] = useState(COURT_COLORS[0].hex);
  const [lineColor, setLineColor] = useState(LINE_COLORS[0]);

  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="court-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-28 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pt-28 lg:pb-36">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Sports court innovation
          </div>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {t("hero.title1")} <span className="relative inline-block">
              <span className="relative z-10 text-brand">{t("hero.title2")}</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand/20" />
            </span>
            <br />{t("hero.title3")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/75">{t("hero.desc")}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#configurator"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground shadow-[0_12px_40px_-10px_rgba(179,218,45,0.7)] transition-transform hover:-translate-y-0.5"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-7 py-3.5 text-sm font-bold text-ink-foreground hover:border-brand hover:text-brand"
            >
              {t("hero.cta2")}
            </a>
          </div>
          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "240+", v: t("hero.stat1") },
              { k: "18", v: t("hero.stat2") },
              { k: "9", v: t("hero.stat3") },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-black text-brand">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-foreground/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - configurator mock */}
        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Court image */}
            <div
              className="absolute inset-0 overflow-hidden rounded-[32px] border border-ink-foreground/10 shadow-2xl"
              style={{ backgroundColor: courtColor }}
            >
              <img
                src={SPORTS.find((s) => s.id === sport)!.img}
                alt={`${sport} court preview`}
                className="h-full w-full object-cover mix-blend-luminosity opacity-90"
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ backgroundColor: courtColor, opacity: 0.55 }}
              />
              {/* Synthetic line overlay */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="8" y="8" width="84" height="84" fill="none" stroke={lineColor} strokeWidth="0.6" />
                <line x1="50" y1="8" x2="50" y2="92" stroke={lineColor} strokeWidth="0.4" />
                <line x1="8" y1="50" x2="92" y2="50" stroke={lineColor} strokeWidth="0.4" />
                <circle cx="50" cy="50" r="9" fill="none" stroke={lineColor} strokeWidth="0.4" />
              </svg>
            </div>

            {/* Floating panel: sport */}
            <div className="float-slow absolute -left-6 top-8 w-56 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-xl sm:-left-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{t("panel.sport")}</span>
                <span className="h-2 w-2 rounded-full bg-brand" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-1.5">
                {SPORTS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSport(s.id)}
                    className={`rounded-lg px-2 py-1.5 text-xs font-semibold transition ${
                      sport === s.id
                        ? "bg-ink text-ink-foreground"
                        : "bg-muted text-ink hover:bg-muted/70"
                    }`}
                  >
                    {t(s.tKey)}
                  </button>
                ))}
              </div>
            </div>

            {/* Floating panel: court color */}
            <div
              className="float-slow absolute -right-4 top-32 w-52 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-xl sm:-right-8"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{t("panel.courtColor")}</span>
              <div className="mt-3 flex gap-2">
                {COURT_COLORS.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setCourtColor(c.hex)}
                    className={`h-8 w-8 rounded-full border-2 transition ${
                      courtColor === c.hex ? "border-ink scale-110" : "border-transparent"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Floating panel: line color */}
            <div
              className="float-slow absolute -left-4 bottom-6 w-56 rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-xl sm:-left-12"
              style={{ animationDelay: "0.75s" }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{t("panel.lineColor")}</span>
              <div className="mt-3 flex items-center gap-2">
                {LINE_COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setLineColor(c)}
                    className={`h-7 w-7 rounded-md border transition ${
                      lineColor === c ? "ring-2 ring-brand ring-offset-2 ring-offset-card" : "border-border"
                    }`}
                    style={{ backgroundColor: c }}
                    aria-label={c}
                  />
                ))}
                <button className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1.5 text-[11px] font-bold text-brand-foreground">
                  {t("panel.save")} <CheckCircle2 className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bleeding court line decoration */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
    </section>
  );
}

/* ---------------- Trust Bar ---------------- */
function TrustBar() {
  const { t } = useI18n();
  const logos = ["FEDETENIS", "OLIMPIC", "MUNICIPAL", "CLUB ANDES", "LIGA PRO", "ACADEMIA 360"];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {t("trust.title")}
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l}
              className="text-center font-display text-sm font-black tracking-[0.15em] text-muted-foreground/70 transition hover:text-ink"
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Configurator ---------------- */
function Configurator() {
  const { t } = useI18n();
  return (
    <section id="configurator" className="relative overflow-hidden py-24 lg:py-32">
      <div className="court-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
              <Ruler className="h-3.5 w-3.5 text-ink" /> {t("cfg.badge")}
            </div>
            <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {t("cfg.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("cfg.desc")}</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
          >
            {t("cfg.open")} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPORTS.map((s, i) => (
            <article
              key={s.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={t(s.tKey)}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                  0{i + 1}
                </div>
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="font-display text-2xl font-black text-background">{t(s.tKey)}</h3>
                  <div className="mt-3 flex items-center gap-2">
                    {COURT_COLORS.slice(0, 4).map((c) => (
                      <span
                        key={c.hex}
                        className="h-5 w-5 rounded-full border-2 border-background/40"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("cfg.configurable")}
                </span>
                <button className="inline-flex items-center gap-1 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-brand-foreground">
                  {t("cfg.customize")} <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </article>
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
              <img src={constructionImg} alt={t("srv.build.t")} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand p-5 text-brand-foreground shadow-2xl sm:-right-6">
              <div className="font-display text-3xl font-black">100%</div>
              <div className="text-xs font-semibold uppercase tracking-wider">{t("srv.inhouse")}</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">{t("srv.eyebrow")}</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">{t("srv.title")}</h2>
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
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Inverdep Paints™</div>
                  <div className="text-sm font-bold text-ink">{t("pnt.product")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">{t("pnt.eyebrow")}</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">{t("pnt.title")}</h2>
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
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">{t("prj.eyebrow")}</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">{t("prj.title")}</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-ink hover:text-brand">
            {t("prj.all")} →
          </a>
        </div>

        {/* Before / after feature */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          <div className="grid gap-0 md:grid-cols-[1.4fr_1fr]">
            <div className="relative">
              <img src={project1} alt={t("prj.beforeafter")} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase text-brand-foreground">
                {t("prj.beforeafter")}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("prj.featured")}
                </span>
                <h3 className="mt-2 font-display text-3xl font-black text-ink">{t("prj.featuredTitle")}</h3>
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
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.v}</div>
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
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
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
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">@inverdep</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
              On the courts, every week.
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-semibold text-ink hover:text-brand sm:block">
            Follow on Instagram →
          </a>
        </div>
        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {tiles.map((t, i) => (
            <a
              key={i}
              href="#"
              className={`group relative overflow-hidden rounded-2xl ${t.span}`}
            >
              <img src={t.img} alt="Instagram post" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/60" />
              <span className="absolute inset-0 grid place-items-center text-xs font-bold uppercase tracking-wider text-ink-foreground opacity-0 transition group-hover:opacity-100">
                View project →
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
  return (
    <section id="contact" className="relative overflow-hidden bg-brand text-brand-foreground">
      <div className="absolute inset-0 court-lines opacity-30" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            <ShieldCheck className="h-3.5 w-3.5" /> 5-year structural warranty
          </div>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1] tracking-tight sm:text-6xl">
            Ready to break ground?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-brand-foreground/80">
            Tell us about your space. We come back with a 3D mockup, timeline and fixed quote
            within 72 hours.
          </p>
        </div>
        <div className="rounded-3xl border border-ink/15 bg-background p-6 text-foreground shadow-2xl sm:p-8">
          <h3 className="font-display text-xl font-black text-ink">Get a quote</h3>
          <form className="mt-5 grid gap-3">
            <input className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Full name" />
            <input className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand" placeholder="Email or phone" />
            <select className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-brand">
              <option>Sport — Tennis</option>
              <option>Basketball</option>
              <option>Volleyball</option>
              <option>Futsal</option>
              <option>Sports paints</option>
            </select>
            <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-ink-foreground hover:bg-ink/90">
              Send request <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-black">
              INVER<span className="text-brand">DEP</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink-foreground/65">
              Sports court design, construction & coatings. Engineered to play.
            </p>
          </div>
          {[
            { h: "Courts", l: ["Tennis", "Basketball", "Volleyball", "Futsal"] },
            { h: "Company", l: ["About", "Projects", "Careers", "Contact"] },
            { h: "Resources", l: ["Configurator", "Sports paints", "Maintenance", "Warranty"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="text-xs font-bold uppercase tracking-wider text-brand">{c.h}</div>
              <ul className="mt-4 space-y-2 text-sm text-ink-foreground/75">
                {c.l.map((i) => (
                  <li key={i}><a href="#" className="hover:text-brand">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} INVERDEP. All rights reserved.</span>
          <span>Designed and built in-house.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- WhatsApp Button ---------------- */
function WhatsAppButton() {
  return (
    <a
      href="#contact"
      aria-label="Chat on WhatsApp"
      className="pulse-ring fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-foreground shadow-2xl transition hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
