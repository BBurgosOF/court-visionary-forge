import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar, Footer, WhatsAppButton } from "./index";
import heroCourt from "@/assets/hero-court.jpg";
import basketballImg from "@/assets/basketball.jpg";
import futsalImg from "@/assets/futsal.jpg";
import volleyballImg from "@/assets/volleyball.jpg";
import constructionImg from "@/assets/construction.jpg";
import paintImg from "@/assets/paint.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — INVERDEP" },
      {
        name: "description",
        content:
          "Canchas de tenis, básquetbol, vóleibol y fútsal diseñadas y construidas por INVERDEP.",
      },
      { property: "og:title", content: "Proyectos — INVERDEP" },
      {
        property: "og:description",
        content: "Resultados reales: antes y después de cada cancha que entregamos.",
      },
    ],
  }),
  component: ProyectosPage,
});

type SportId = "tennis" | "basketball" | "volleyball" | "futsal";

type Project = {
  id: string;
  sport: SportId;
  nameKey: string;
  clientKey: string;
  descKey: string;
  before: string;
  after: string;
};

const PROJECTS: Project[] = [
  {
    id: "t1",
    sport: "tennis",
    nameKey: "projects.t1.name",
    clientKey: "projects.t1.client",
    descKey: "projects.t1.desc",
    before: constructionImg,
    after: project1,
  },
  {
    id: "t2",
    sport: "tennis",
    nameKey: "projects.t2.name",
    clientKey: "projects.t2.client",
    descKey: "projects.t2.desc",
    before: paintImg,
    after: heroCourt,
  },
  {
    id: "b1",
    sport: "basketball",
    nameKey: "projects.b1.name",
    clientKey: "projects.b1.client",
    descKey: "projects.b1.desc",
    before: constructionImg,
    after: basketballImg,
  },
  {
    id: "b2",
    sport: "basketball",
    nameKey: "projects.b2.name",
    clientKey: "projects.b2.client",
    descKey: "projects.b2.desc",
    before: paintImg,
    after: project2,
  },
  {
    id: "v1",
    sport: "volleyball",
    nameKey: "projects.v1.name",
    clientKey: "projects.v1.client",
    descKey: "projects.v1.desc",
    before: constructionImg,
    after: volleyballImg,
  },
  {
    id: "f1",
    sport: "futsal",
    nameKey: "projects.f1.name",
    clientKey: "projects.f1.client",
    descKey: "projects.f1.desc",
    before: constructionImg,
    after: futsalImg,
  },
  {
    id: "f2",
    sport: "futsal",
    nameKey: "projects.f2.name",
    clientKey: "projects.f2.client",
    descKey: "projects.f2.desc",
    before: paintImg,
    after: project1,
  },
];

const FILTERS: { id: "all" | SportId; tKey: string }[] = [
  { id: "all", tKey: "projects.all" },
  { id: "tennis", tKey: "sport.tennis" },
  { id: "basketball", tKey: "sport.basketball" },
  { id: "volleyball", tKey: "sport.volleyball" },
  { id: "futsal", tKey: "sport.futsal" },
];

function ProyectosPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <ProjectsHero />
        <ProjectsList />
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

function ProjectsHero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
          {t("projects.eyebrow")}
        </span>
        <h1 className="mt-3 font-display text-5xl font-black tracking-tight text-ink sm:text-6xl">
          {t("projects.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {t("projects.subtitle")}
        </p>
      </div>
    </section>
  );
}

function ProjectsList() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<"all" | SportId>("all");
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.sport === filter);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-ink text-ink-foreground shadow-md"
                    : "border border-border bg-card text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {t(f.tKey as Parameters<typeof t>[0])}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  const sportLabel = t(`sport.${project.sport}` as Parameters<typeof t>[0]);
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="relative">
        <BeforeAfter before={project.before} after={project.after} />
        <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-foreground shadow">
          {sportLabel}
        </span>
      </div>
      <div className="p-6">
        <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          {t("projects.client")}: {t(project.clientKey as Parameters<typeof t>[0])}
        </div>
        <h3 className="mt-1 font-display text-2xl font-black text-ink">
          {t(project.nameKey as Parameters<typeof t>[0])}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {t(project.descKey as Parameters<typeof t>[0])}
        </p>
      </div>
    </article>
  );
}

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const { t } = useI18n();
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => dragging.current && update(e.clientX);
    const onTouch = (e: TouchEvent) =>
      dragging.current && e.touches[0] && update(e.touches[0].clientX);
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden bg-ink"
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        if (e.touches[0]) update(e.touches[0].clientX);
      }}
    >
      <img src={after} alt={t("projects.after")} className="absolute inset-0 h-full w-full object-cover" />
      <span className="absolute right-3 top-3 z-10 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-foreground">
        {t("projects.after")}
      </span>
      <img
        src={before}
        alt={t("projects.before")}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span
        className="absolute left-3 top-3 z-10 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-foreground"
        style={{ opacity: pos > 12 ? 1 : 0 }}
      >
        {t("projects.before")}
      </span>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white text-ink shadow-lg ring-2 ring-brand">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(6 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}