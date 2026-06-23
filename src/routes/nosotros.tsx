import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Compass,
  Flag,
  Globe2,
  GraduationCap,
  Heart,
  Leaf,
  Lightbulb,
  Medal,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar, Footer, WhatsAppButton } from "./index";
import constructionImg from "@/assets/construction.jpg";
import heroCourt from "@/assets/hero-court.jpg";
import basketballImg from "@/assets/basketball.jpg";
import paintImg from "@/assets/paint.jpg";

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
        <MissionVisionValues />
        <Values />
        <Goals />
        <Certifications />
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

/* ---------------- Hero ---------------- */
function AboutHero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="court-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-24 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-8 lg:pt-28 lg:pb-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            <Sparkles className="h-3.5 w-3.5" /> {t("about.badge")}
          </div>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {t("about.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/75">{t("about.desc")}</p>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              { k: t("about.stat1.k"), v: t("about.stat1.v") },
              { k: t("about.stat2.k"), v: t("about.stat2.v") },
              { k: t("about.stat3.k"), v: t("about.stat3.v") },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-black text-brand">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-ink-foreground/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden rounded-[32px] border border-ink-foreground/10 shadow-2xl"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
          >
            <img
              src={constructionImg}
              alt="INVERDEP team"
              className="h-full w-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-brand p-5 text-brand-foreground shadow-2xl sm:-left-6">
            <div className="font-display text-3xl font-black">INVERDEP</div>
            <div className="text-xs font-semibold uppercase tracking-wider">
              {t("srv.inhouse")}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
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
    <section className="relative overflow-hidden py-24 lg:py-32">
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

/* ---------------- Values (principles strip) ---------------- */
function Values() {
  const { t } = useI18n();
  const items = [
    { icon: Medal, title: t("about.v1.t"), desc: t("about.v1.d") },
    { icon: ShieldCheck, title: t("about.v2.t"), desc: t("about.v2.d") },
    { icon: Lightbulb, title: t("about.v3.t"), desc: t("about.v3.d") },
    { icon: ShieldCheck, title: t("about.v4.t"), desc: t("about.v4.d") },
  ];
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-0 court-lines opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
            >
              <img
                src={heroCourt}
                alt="Court"
                loading="lazy"
                className="h-full w-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand p-5 text-brand-foreground shadow-2xl sm:-right-6">
              <Trophy className="h-7 w-7" />
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              {t("about.values.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
              {t("about.values.title")}
            </h2>
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

/* ---------------- Goals ---------------- */
function Goals() {
  const { t } = useI18n();
  const goals = [
    { icon: Globe2, title: t("about.g1.t"), desc: t("about.g1.d"), img: heroCourt },
    { icon: Leaf, title: t("about.g2.t"), desc: t("about.g2.d"), img: paintImg },
    { icon: Flag, title: t("about.g3.t"), desc: t("about.g3.d"), img: basketballImg },
    { icon: GraduationCap, title: t("about.g4.t"), desc: t("about.g4.d"), img: constructionImg },
  ];
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink">
            {t("about.goals.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {t("about.goals.title")}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((g, i) => (
            <article
              key={g.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                  0{i + 1}
                </div>
                <div className="absolute inset-x-5 bottom-5 text-ink-foreground">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-brand-foreground">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-black">{g.title}</h3>
                  <p className="mt-1 text-sm text-ink-foreground/80">{g.desc}</p>
                </div>
              </div>
            </article>
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
    <section className="relative overflow-hidden py-24 lg:py-32">
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
