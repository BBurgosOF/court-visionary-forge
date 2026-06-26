import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Award,
  ArrowRight,
  CheckCircle2,
  Compass,
  Flag,
  Heart,
  Lightbulb,
  Medal,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar, Footer, WhatsAppButton } from "./index";
import constructionImg from "@/assets/construction.jpg";
import ceoImg from "@/assets/ceo.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — INVERDEP" },
      {
        name: "description",
        content:
          "Conoce a INVERDEP: especialistas en diseño, construcción y recubrimiento de canchas deportivas de alto rendimiento.",
      },
      { property: "og:title", content: "Nosotros — INVERDEP" },
      {
        property: "og:description",
        content:
          "Misión, visión, valores y objetivos del equipo técnico detrás de las canchas INVERDEP.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <AboutHero />
        <WhoWeAre />
        <CeoBlock />
        <MissionVisionValues />
        <ValueProps />
        <Certifications />
        <FinalCta />
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

/* ---------------- Hero (minimal) ---------------- */
function AboutHero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="court-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          <Sparkles className="h-3.5 w-3.5" /> {t("about.hero.kicker")}
        </div>
        <div className="mt-5 grid items-end gap-6 lg:grid-cols-[1.4fr_1fr]">
          <h1 className="font-display text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {t("about.badge")}
          </h1>
          <p className="max-w-md text-base text-ink-foreground/70 lg:text-right">
            {t("about.desc")}
          </p>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-ink-foreground/15" />
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> INVERDEP
          </span>
          <span className="h-px flex-1 bg-ink-foreground/15" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Quiénes somos (2 col) ---------------- */
function WhoWeAre() {
  const { t } = useI18n();
  const bullets = [t("about.who.b1"), t("about.who.b2"), t("about.who.b3")];
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              {t("about.who.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {t("about.who.title")}
            </h2>
            <p className="mt-5 text-muted-foreground">{t("about.who.p1")}</p>
            <p className="mt-3 text-muted-foreground">{t("about.who.p2")}</p>
            <ul className="mt-7 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-ink">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand/15 text-brand">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                { k: t("about.stat1.k"), v: t("about.stat1.v") },
                { k: t("about.stat2.k"), v: t("about.stat2.v") },
                { k: t("about.stat3.k"), v: t("about.stat3.v") },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl font-black text-ink">{s.k}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src={constructionImg}
                alt="INVERDEP en obra"
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-brand p-4 text-brand-foreground shadow-2xl sm:block">
              <div className="font-display text-2xl font-black">+15</div>
              <div className="text-[11px] font-semibold uppercase tracking-wider">
                {t("about.stat1.v")}
              </div>
            </div>
            <div className="absolute -top-5 -right-5 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
              <div className="flex items-center gap-2 text-ink">
                <Trophy className="h-5 w-5 text-brand" />
                <span className="font-display text-sm font-black uppercase tracking-wider">
                  {t("about.stat2.v")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CEO ---------------- */
function CeoBlock() {
  const { t } = useI18n();
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
            {t("about.ceo.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">
            {t("about.ceo.title")}
          </h2>
        </div>
        <article className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-xl md:grid-cols-[1fr_1.3fr]">
          <div className="relative">
            <img
              src={ceoImg}
              alt={t("about.ceo.name")}
              loading="lazy"
              width={896}
              height={1152}
              className="h-full w-full object-cover md:aspect-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent md:hidden" />
          </div>
          <div className="relative flex flex-col justify-between gap-8 p-8 sm:p-10">
            <Quote className="h-10 w-10 text-brand/40" />
            <p className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
              {t("about.ceo.quote")}
            </p>
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <div className="h-12 w-1 rounded-full bg-brand" />
              <div>
                <div className="font-display text-lg font-black text-ink">
                  {t("about.ceo.name")}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("about.ceo.role")}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ---------------- Mission · Vision · Values cards ---------------- */
function MissionVisionValues() {
  const { t } = useI18n();
  const cards = [
    { icon: Target, title: t("about.mission.t"), desc: t("about.mission.d"), accent: "bg-brand text-brand-foreground" },
    { icon: Compass, title: t("about.vision.t"), desc: t("about.vision.d"), accent: "bg-ink text-ink-foreground" },
    { icon: Heart, title: t("about.values.t"), desc: t("about.values.d"), accent: "bg-brand text-brand-foreground" },
  ];
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="court-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
            {t("about.mvv.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {t("about.mvv.title")}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${c.accent}`}>
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-black text-ink">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.desc}</p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/30" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Value Propositions ---------------- */
function ValueProps() {
  const { t } = useI18n();
  const items = [
    { icon: Medal, title: t("about.props.p1.t"), desc: t("about.props.p1.d") },
    { icon: Lightbulb, title: t("about.props.p2.t"), desc: t("about.props.p2.d") },
    { icon: ShieldCheck, title: t("about.props.p3.t"), desc: t("about.props.p3.d") },
    { icon: TrendingUp, title: t("about.props.p4.t"), desc: t("about.props.p4.d") },
  ];
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 court-lines opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
            {t("about.props.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {t("about.props.title")}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.03] p-6 transition hover:-translate-y-1 hover:border-brand/60 hover:bg-ink-foreground/[0.06]"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-brand-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-xs font-black text-ink-foreground/30">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-1 text-sm text-ink-foreground/65">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certifications ---------------- */
function Certifications() {
  const { t } = useI18n();
  const certs = [
    { icon: Award, label: t("about.cert.c1") },
    { icon: Medal, label: t("about.cert.c2") },
    { icon: CheckCircle2, label: t("about.cert.c3") },
    { icon: ShieldCheck, label: t("about.cert.c4") },
    { icon: Flag, label: t("about.cert.c5") },
    { icon: Trophy, label: t("about.cert.c6") },
  ];
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
            {t("about.cert.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {t("about.cert.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("about.cert.desc")}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <div
              key={c.label}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-ink transition group-hover:bg-brand group-hover:text-brand-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-base font-bold text-ink">{c.label}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  INVERDEP
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  const { t } = useI18n();
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/15 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                <Rocket className="h-3.5 w-3.5 text-brand" /> {t("about.badge")}
              </div>
              <h3 className="mt-4 font-display text-2xl font-black tracking-tight text-ink sm:text-3xl">
                {t("about.cta.title")}
              </h3>
              <p className="mt-2 text-muted-foreground">{t("about.cta.desc")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                to="/proyectos"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-ink-foreground transition hover:bg-brand hover:text-brand-foreground"
              >
                {t("about.cta.projects")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-bold text-ink transition hover:border-brand/60 hover:text-brand"
              >
                {t("about.cta.services")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
