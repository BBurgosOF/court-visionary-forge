import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Sparkles,
  Sprout,
  PaintRoller,
  GraduationCap,
} from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar, Footer, WhatsAppButton } from "./index";
import constructionImg from "@/assets/construction.jpg";
import heroCourt from "@/assets/hero-court.jpg";
import paintImg from "@/assets/paint.jpg";
import futsalImg from "@/assets/futsal.jpg";
import basketballImg from "@/assets/basketball.jpg";
import volleyballImg from "@/assets/volleyball.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — INVERDEP" },
      {
        name: "description",
        content:
          "Diseño, construcción y mantenimiento de canchas deportivas, pasto sintético, pinturas deportivas y proyectos escolares.",
      },
      { property: "og:title", content: "Servicios — INVERDEP" },
      {
        property: "og:description",
        content:
          "Soluciones integrales para canchas deportivas: construcción, pasto sintético, pinturas y proyectos escolares.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <ServicesHero />
        <QuickNav />
        <ServiceCourts />
        <ServiceTurf />
        <ServicePaints />
        <ServiceSchools />
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

/* ---------------- Hero ---------------- */
function ServicesHero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="court-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-brand/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          <Sparkles className="h-3.5 w-3.5" /> {t("services.eyebrow")}
        </div>
        <h1 className="mt-6 font-display text-5xl font-black tracking-tight sm:text-6xl">
          {t("services.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-foreground/75">
          {t("services.subtitle")}
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
    </section>
  );
}

/* ---------------- Quick Nav ---------------- */
const TABS = [
  { id: "canchas", icon: Hammer, key: "services.s1.tab" as const },
  { id: "pasto", icon: Sprout, key: "services.s2.tab" as const },
  { id: "pinturas", icon: PaintRoller, key: "services.s3.tab" as const },
  { id: "escolares", icon: GraduationCap, key: "services.s4.tab" as const },
];

function QuickNav() {
  const { t } = useI18n();
  const [active, setActive] = useState<string>("canchas");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    TABS.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                isActive
                  ? "border-brand bg-brand text-brand-foreground shadow-[0_8px_24px_-8px_rgba(179,218,45,0.6)]"
                  : "border-border bg-card text-ink hover:border-brand/60 hover:text-ink"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {t(tab.key)}
            </a>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Service block (reusable) ---------------- */
function ServiceBlock({
  id,
  index,
  icon: Icon,
  eyebrow,
  title,
  desc,
  bullets,
  cta,
  ctaHref,
  images,
  reversed = false,
  tone = "light",
}: {
  id: string;
  index: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  ctaHref: string;
  images: { src: string; alt: string }[];
  reversed?: boolean;
  tone?: "light" | "surface" | "ink";
}) {
  const toneClasses =
    tone === "ink"
      ? "bg-ink text-ink-foreground"
      : tone === "surface"
        ? "bg-surface text-foreground"
        : "bg-background text-foreground";

  const isInk = tone === "ink";
  const mutedClass = isInk ? "text-ink-foreground/75" : "text-muted-foreground";

  return (
    <section
      id={id}
      className={`relative scroll-mt-32 overflow-hidden ${toneClasses} py-24 lg:py-32`}
    >
      {isInk && (
        <div className="court-lines pointer-events-none absolute inset-0 opacity-25" />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${
                isInk
                  ? "border border-brand/40 bg-brand/10 text-brand"
                  : "bg-brand/15 text-ink"
              }`}
            >
              {index} · {eyebrow}
            </div>
            <h2 className="mt-5 font-display text-4xl font-black tracking-tight sm:text-5xl">
              {title}
            </h2>
            <p className={`mt-5 text-lg ${mutedClass}`}>{desc}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className={`flex items-start gap-3 rounded-2xl border p-4 text-sm ${
                    isInk
                      ? "border-ink-foreground/10 bg-ink-foreground/[0.04]"
                      : "border-border bg-card"
                  }`}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground shadow-[0_8px_24px_-8px_rgba(179,218,45,0.6)] transition-transform hover:-translate-y-0.5"
              >
                {cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contacto"
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-bold transition hover:border-brand ${
                  isInk
                    ? "border-ink-foreground/20 text-ink-foreground hover:text-brand"
                    : "border-border text-ink hover:text-ink"
                }`}
              >
                <Sparkles className="h-4 w-4" /> {/* generic */}
                <span>{/* quote */}{useI18n().t("nav.quote")}</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-5 grid-rows-5 gap-3 sm:gap-4">
              <div
                className="col-span-3 row-span-5 overflow-hidden rounded-3xl border border-ink/10 shadow-2xl"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="col-span-2 row-span-3 overflow-hidden rounded-3xl border border-ink/10 shadow-xl">
                <img
                  src={images[1]?.src ?? images[0].src}
                  alt={images[1]?.alt ?? images[0].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="col-span-2 row-span-2 grid place-items-center overflow-hidden rounded-3xl bg-brand p-6 text-brand-foreground shadow-xl">
                <div className="text-center">
                  <Icon className="mx-auto h-10 w-10" />
                  <div className="mt-2 font-display text-xs font-black uppercase tracking-[0.2em]">
                    INVERDEP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sections ---------------- */
function ServiceCourts() {
  const { t } = useI18n();
  return (
    <ServiceBlock
      id="canchas"
      index="01"
      icon={Hammer}
      eyebrow={t("services.s1.tab")}
      title={t("services.s1.title")}
      desc={t("services.s1.desc")}
      bullets={[t("services.s1.b1"), t("services.s1.b2"), t("services.s1.b3"), t("services.s1.b4")]}
      cta={t("services.s1.cta")}
      ctaHref="/proyectos"
      images={[
        { src: constructionImg, alt: "Construcción" },
        { src: heroCourt, alt: "Cancha" },
      ]}
      tone="light"
    />
  );
}

function ServiceTurf() {
  const { t } = useI18n();
  return (
    <ServiceBlock
      id="pasto"
      index="02"
      icon={Sprout}
      eyebrow={t("services.s2.tab")}
      title={t("services.s2.title")}
      desc={t("services.s2.desc")}
      bullets={[t("services.s2.b1"), t("services.s2.b2"), t("services.s2.b3"), t("services.s2.b4")]}
      cta={t("services.s2.cta")}
      ctaHref="/contacto"
      images={[
        { src: futsalImg, alt: "Pasto sintético" },
        { src: heroCourt, alt: "Instalación" },
      ]}
      reversed
      tone="surface"
    />
  );
}

function ServicePaints() {
  const { t } = useI18n();
  return (
    <ServiceBlock
      id="pinturas"
      index="03"
      icon={PaintRoller}
      eyebrow={t("services.s3.tab")}
      title={t("services.s3.title")}
      desc={t("services.s3.desc")}
      bullets={[t("services.s3.b1"), t("services.s3.b2"), t("services.s3.b3"), t("services.s3.b4")]}
      cta={t("services.s3.cta")}
      ctaHref="/contacto"
      images={[
        { src: paintImg, alt: "Pintura deportiva" },
        { src: basketballImg, alt: "Cancha pintada" },
      ]}
      tone="ink"
    />
  );
}

function ServiceSchools() {
  const { t } = useI18n();
  return (
    <ServiceBlock
      id="escolares"
      index="04"
      icon={GraduationCap}
      eyebrow={t("services.s4.tab")}
      title={t("services.s4.title")}
      desc={t("services.s4.desc")}
      bullets={[t("services.s4.b1"), t("services.s4.b2"), t("services.s4.b3"), t("services.s4.b4")]}
      cta={t("services.s4.cta")}
      ctaHref="/proyectos"
      images={[
        { src: volleyballImg, alt: "Cancha escolar" },
        { src: basketballImg, alt: "Polideportivo" },
      ]}
      reversed
      tone="light"
    />
  );
}