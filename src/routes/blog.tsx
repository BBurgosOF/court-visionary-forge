import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar, Footer, WhatsAppButton } from "./index";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import constructionImg from "@/assets/construction.jpg";
import paintImg from "@/assets/paint.jpg";
import basketballImg from "@/assets/basketball.jpg";
import volleyballImg from "@/assets/volleyball.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — INVERDEP" },
      {
        name: "description",
        content:
          "Novedades, proyectos y noticias del mundo deportivo por INVERDEP.",
      },
      { property: "og:title", content: "Blog — INVERDEP" },
      {
        property: "og:description",
        content: "Descubre lo último en canchas deportivas, construcción y recubrimientos.",
      },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    id: "1",
    titleKey: "blog.p1.title",
    excerptKey: "blog.p1.excerpt",
    dateKey: "blog.p1.date",
    img: project1,
  },
  {
    id: "2",
    titleKey: "blog.p2.title",
    excerptKey: "blog.p2.excerpt",
    dateKey: "blog.p2.date",
    img: basketballImg,
  },
  {
    id: "3",
    titleKey: "blog.p3.title",
    excerptKey: "blog.p3.excerpt",
    dateKey: "blog.p3.date",
    img: volleyballImg,
  },
  {
    id: "4",
    titleKey: "blog.p4.title",
    excerptKey: "blog.p4.excerpt",
    dateKey: "blog.p4.date",
    img: constructionImg,
  },
  {
    id: "5",
    titleKey: "blog.p5.title",
    excerptKey: "blog.p5.excerpt",
    dateKey: "blog.p5.date",
    img: paintImg,
  },
  {
    id: "6",
    titleKey: "blog.p6.title",
    excerptKey: "blog.p6.excerpt",
    dateKey: "blog.p6.date",
    img: project2,
  },
];

function BlogPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <BlogHero />
        <BlogGrid />
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

function BlogHero() {
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
          {t("blog.eyebrow")}
        </span>
        <h1 className="mt-3 font-display text-5xl font-black tracking-tight text-ink sm:text-6xl">
          {t("blog.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {t("blog.subtitle")}
        </p>
      </div>
    </section>
  );
}

function BlogGrid() {
  const { t } = useI18n();
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.img}
                  alt={t(post.titleKey as Parameters<typeof t>[0])}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <time className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  {t(post.dateKey as Parameters<typeof t>[0])}
                </time>
                <h3 className="mt-2 font-display text-xl font-black text-ink">
                  {t(post.titleKey as Parameters<typeof t>[0])}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(post.excerptKey as Parameters<typeof t>[0])}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand transition group-hover:text-brand/80">
                  {t("blog.readMore")} <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
