import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar, Footer, WhatsAppButton } from "./index";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — INVERDEP" },
      {
        name: "description",
        content:
          "Contacta a INVERDEP: cotizaciones para diseño, construcción y recubrimiento de canchas deportivas en Chile.",
      },
      { property: "og:title", content: "Contacto — INVERDEP" },
      {
        property: "og:description",
        content:
          "Solicita tu cotización. Respondemos en 72 horas con un plan a medida para tu proyecto deportivo.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <ContactHeader />
        <ContactMain />
        <MapSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

function ContactHeader() {
  const { t } = useI18n();
  const chips = [
    { icon: Phone, label: t("contact.hero.phone") },
    { icon: Mail, label: t("contact.hero.email") },
    { icon: Clock, label: t("contact.hero.reply") },
  ];
  return (
    <section className="border-b border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:py-14 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {t("contact.eyebrow")}
          </div>
          <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {t("contact.desc")}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 lg:justify-end">
          {chips.map((c) => (
            <li
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-brand/60"
            >
              <c.icon className="h-4 w-4 text-brand" />
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactMain() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:px-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-xl sm:p-8">
      <h2 className="font-display text-2xl font-black text-ink">{t("contact.form.title")}</h2>
      {sent ? (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand/40 bg-brand/10 p-5 text-sm text-ink">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand" />
          <p className="font-medium">{t("contact.form.sent")}</p>
        </div>
      ) : (
        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {t("contact.form.name")}
              </span>
              <input required maxLength={100} className={inputCls} />
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {t("contact.form.phone")}
              </span>
              <input type="tel" maxLength={30} className={inputCls} />
            </label>
          </div>
          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t("contact.form.email")}
            </span>
            <input type="email" required maxLength={255} className={inputCls} />
          </label>
          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {t("contact.form.message")}
            </span>
            <textarea required maxLength={1000} rows={5} className={inputCls + " resize-none"} />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-brand-foreground shadow-[0_8px_24px_-8px_rgba(179,218,45,0.6)] transition-transform hover:-translate-y-0.5"
          >
            {t("contact.form.send")} <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}

function ContactInfo() {
  const { t } = useI18n();
  const items = [
    { icon: Phone, label: t("contact.info.phone"), value: "+56 9 0000 0000" },
    { icon: Mail, label: t("contact.info.email"), value: "contacto@inverdep.cl" },
    { icon: MapPin, label: t("contact.info.address"), value: t("contact.info.addressValue") },
    { icon: Clock, label: t("contact.info.hours"), value: t("contact.info.hoursValue") },
  ];
  return (
    <aside className="rounded-3xl border border-border bg-ink p-6 text-ink-foreground sm:p-8">
      <h2 className="font-display text-xl font-black">{t("contact.info.title")}</h2>
      <ul className="mt-6 grid gap-5">
        {items.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-ink-foreground/60">
                {label}
              </div>
              <div className="mt-0.5 text-sm font-semibold">{value}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function MapSection() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border/60 bg-surface/40 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-black text-ink sm:text-3xl">
          {t("contact.map.title")}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {t("contact.map.desc")}
        </p>
        <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-xl">
          <iframe
            title="INVERDEP — Santiago, Chile"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-70.75%2C-33.55%2C-70.55%2C-33.40&layer=mapnik&marker=-33.45%2C-70.65"
            className="h-[360px] w-full sm:h-[440px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}