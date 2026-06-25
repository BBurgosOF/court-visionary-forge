import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Layers, PaintBucket, Ruler, Trophy } from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar, Footer, WhatsAppButton } from "./index";

export const Route = createFileRoute("/disena-tu-cancha")({
  component: DesignerPage,
  head: () => ({
    meta: [
      { title: "Diseña tu cancha — INVERDEP" },
      {
        name: "description",
        content:
          "Configura tu cancha deportiva paso a paso: deporte, colores PANTONE, superficie y cotización.",
      },
      { property: "og:title", content: "Diseña tu cancha — INVERDEP" },
      {
        property: "og:description",
        content:
          "Configurador interactivo de canchas deportivas: tenis, básquet, vóley y fútsal.",
      },
    ],
  }),
});

type SportId = "tennis" | "basketball" | "volleyball" | "futsal";

const SPORTS: { id: SportId; tKey: any; dimsKey: any; icon: typeof Trophy }[] = [
  { id: "tennis", tKey: "sport.tennis", dimsKey: "designer.dims.tennis", icon: Trophy },
  { id: "basketball", tKey: "sport.basketball", dimsKey: "designer.dims.basketball", icon: Trophy },
  { id: "volleyball", tKey: "sport.volleyball", dimsKey: "designer.dims.volleyball", icon: Trophy },
  { id: "futsal", tKey: "sport.futsal", dimsKey: "designer.dims.futsal", icon: Trophy },
];

type Pantone = { name: { es: string; en: string }; pantone: string; hex: string };

const OUTER_COLORS: Pantone[] = [
  { name: { es: "Verde Deportivo", en: "Sport Green" }, pantone: "PANTONE 361 C", hex: "#3FA535" },
  { name: { es: "Azul Profundo", en: "Deep Blue" }, pantone: "PANTONE 2945 C", hex: "#1E5B8C" },
  { name: { es: "Gris Pista", en: "Track Grey" }, pantone: "PANTONE 431 C", hex: "#5B6770" },
  { name: { es: "Terracota", en: "Terracotta" }, pantone: "PANTONE 7522 C", hex: "#B07A6A" },
];

const INNER_COLORS: Pantone[] = [
  { name: { es: "Azul Cancha", en: "Court Blue" }, pantone: "PANTONE 285 C", hex: "#1F6FCE" },
  { name: { es: "Rojo Arcilla", en: "Clay Red" }, pantone: "PANTONE 173 C", hex: "#C8552B" },
  { name: { es: "Verde Lima", en: "Lime Green" }, pantone: "PANTONE 376 C", hex: "#7FBE3F" },
  { name: { es: "Negro Pista", en: "Track Black" }, pantone: "PANTONE 426 C", hex: "#1B1B1B" },
];

const LINE_COLORS: Pantone[] = [
  { name: { es: "Blanco", en: "White" }, pantone: "PANTONE 11-0601 TCX", hex: "#FFFFFF" },
  { name: { es: "Amarillo Señal", en: "Signal Yellow" }, pantone: "PANTONE 116 C", hex: "#FFD23F" },
  { name: { es: "Verde Inverdep", en: "Inverdep Green" }, pantone: "PANTONE 382 C", hex: "#B3DA2D" },
  { name: { es: "Negro Pista", en: "Track Black" }, pantone: "PANTONE 426 C", hex: "#0F1B2A" },
];

type Surface = "acrylic" | "turf";

function DesignerPage() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Header />
        <DesignerExperience />
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

function Header() {
  const { t } = useI18n();
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
          <Ruler className="h-3.5 w-3.5" /> {t("designer.eyebrow")}
        </div>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          {t("designer.title")}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{t("designer.subtitle")}</p>
      </div>
    </section>
  );
}

function DesignerExperience() {
  const { t, lang } = useI18n();
  const [sport, setSport] = useState<SportId>("tennis");
  const [outer, setOuter] = useState<Pantone>(OUTER_COLORS[0]);
  const [inner, setInner] = useState<Pantone>(INNER_COLORS[0]);
  const [line, setLine] = useState<Pantone>(LINE_COLORS[0]);
  const [surface, setSurface] = useState<Surface>("acrylic");

  const surfaceOptions = useMemo<Surface[]>(
    () => (sport === "futsal" ? ["acrylic", "turf"] : ["acrylic"]),
    [sport],
  );

  // Force valid surface when sport changes
  if (!surfaceOptions.includes(surface)) {
    setSurface("acrylic");
  }

  const dims = t(
    ({
      tennis: "designer.dims.tennis",
      basketball: "designer.dims.basketball",
      volleyball: "designer.dims.volleyball",
      futsal: "designer.dims.futsal",
    } as const)[sport],
  );

  return (
    <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Step1 sport={sport} setSport={setSport} />
      <Step2 sport={sport} outer={outer} inner={inner} line={line} dims={dims} surface={surface} />
      <Step3
        outer={outer}
        inner={inner}
        line={line}
        setOuter={setOuter}
        setInner={setInner}
        setLine={setLine}
      />
      <Step4 surface={surface} setSurface={setSurface} options={surfaceOptions} />
      <Step5 sport={sport} dims={dims} outer={outer} inner={inner} line={line} surface={surface} lang={lang} />
      <Step6 />
    </div>
  );
}

/* ---------------- Step 1 ---------------- */
function Step1({ sport, setSport }: { sport: SportId; setSport: (s: SportId) => void }) {
  const { t } = useI18n();
  return (
    <section>
      <StepHeader eyebrowKey="designer.step1.eyebrow" titleKey="designer.step1.title" descKey="designer.step1.desc" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SPORTS.map((s) => {
          const active = sport === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSport(s.id)}
              className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition ${
                active
                  ? "border-brand bg-brand/5 shadow-[0_12px_40px_-16px_rgba(179,218,45,0.6)]"
                  : "border-border bg-card hover:-translate-y-0.5 hover:border-brand/50"
              }`}
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl transition ${
                  active ? "bg-brand text-brand-foreground" : "bg-muted text-ink"
                }`}
              >
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{t(s.tKey)}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("designer.dims.label")}
              </p>
              <p className="mt-0.5 text-sm text-ink/80">{t(s.dimsKey)}</p>
              {active && (
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-foreground">
                  <CheckCircle2 className="h-3 w-3" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Step 2 — Court Visual ---------------- */
function Step2({
  sport,
  outer,
  inner,
  line,
  dims,
  surface,
}: {
  sport: SportId;
  outer: Pantone;
  inner: Pantone;
  line: Pantone;
  dims: string;
  surface: Surface;
}) {
  const { t, lang } = useI18n();
  return (
    <section>
      <StepHeader eyebrowKey="designer.step2.eyebrow" titleKey="designer.step2.title" descKey="designer.step2.desc" />
      <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-ink p-6 sm:p-10">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl">
          <CourtVisual sport={sport} outer={outer.hex} inner={inner.hex} line={line.hex} />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-ink-foreground/80">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {dims}
          </div>
          <div className="text-xs text-ink-foreground/60">
            {t("designer.sum.surface")}: {" "}
            <span className="font-semibold text-ink-foreground">
              {surface === "acrylic" ? t("designer.surface.acrylic") : t("designer.surface.turf")}
            </span>
          </div>
          <div className="text-xs text-ink-foreground/60">
            {outer.name[lang]} · {inner.name[lang]} · {line.name[lang]}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourtVisual({
  sport,
  outer,
  inner,
  line,
}: {
  sport: SportId;
  outer: string;
  inner: string;
  line: string;
}) {
  // Outer pad area + inner playing rectangle. Inner color sits inside playing rect.
  // Use one SVG with sport-specific layout.
  const sw = 0.4;
  const common = {
    fill: "none" as const,
    stroke: line,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { transition: "stroke 400ms ease" },
  };
  return (
    <div className="relative h-full w-full" style={{ backgroundColor: outer, transition: "background-color 400ms ease" }}>
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 55%), radial-gradient(circle at 75% 80%, rgba(0,0,0,0.4), transparent 60%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 75" preserveAspectRatio="none">
        {/* Inner playing area */}
        {sport === "tennis" && (
          <>
            <rect x="14" y="12" width="72" height="51" fill={inner} style={{ transition: "fill 400ms ease" }} />
            <g {...common}>
              <rect x="14" y="12" width="72" height="51" />
              <rect x="18" y="12" width="64" height="51" />
              <line x1="18" y1="24" x2="82" y2="24" />
              <line x1="18" y1="51" x2="82" y2="51" />
              <line x1="50" y1="24" x2="50" y2="51" />
              <line x1="50" y1="12" x2="50" y2="15" />
              <line x1="50" y1="60" x2="50" y2="63" />
              <line x1="48" y1="37.5" x2="52" y2="37.5" strokeWidth={sw * 1.4} />
            </g>
          </>
        )}
        {sport === "basketball" && (
          <>
            <rect x="10" y="10" width="80" height="55" fill={inner} style={{ transition: "fill 400ms ease" }} />
            <g {...common}>
              <rect x="10" y="10" width="80" height="55" />
              <line x1="50" y1="10" x2="50" y2="65" />
              <circle cx="50" cy="37.5" r="7" />
              <path d="M10,22 Q24,37.5 10,53" />
              <path d="M90,22 Q76,37.5 90,53" />
              <rect x="10" y="29" width="12" height="17" />
              <rect x="78" y="29" width="12" height="17" />
            </g>
          </>
        )}
        {sport === "volleyball" && (
          <>
            <rect x="16" y="15" width="68" height="45" fill={inner} style={{ transition: "fill 400ms ease" }} />
            <g {...common}>
              <rect x="16" y="15" width="68" height="45" />
              <line x1="50" y1="10" x2="50" y2="65" strokeWidth={sw * 1.5} />
              <line x1="34" y1="15" x2="34" y2="60" strokeDasharray="1.2 1.2" />
              <line x1="66" y1="15" x2="66" y2="60" strokeDasharray="1.2 1.2" />
            </g>
          </>
        )}
        {sport === "futsal" && (
          <>
            <rect x="10" y="10" width="80" height="55" fill={inner} style={{ transition: "fill 400ms ease" }} />
            <g {...common}>
              <rect x="10" y="10" width="80" height="55" />
              <line x1="50" y1="10" x2="50" y2="65" />
              <circle cx="50" cy="37.5" r="7" />
              <path d="M10,25 Q22,37.5 10,50" />
              <path d="M90,25 Q78,37.5 90,50" />
              <line x1="10" y1="24" x2="16" y2="24" />
              <line x1="16" y1="24" x2="16" y2="51" />
              <line x1="10" y1="51" x2="16" y2="51" />
              <line x1="90" y1="24" x2="84" y2="24" />
              <line x1="84" y1="24" x2="84" y2="51" />
              <line x1="90" y1="51" x2="84" y2="51" />
            </g>
          </>
        )}
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
    </div>
  );
}

/* ---------------- Step 3 — Colors ---------------- */
function Step3({
  outer,
  inner,
  line,
  setOuter,
  setInner,
  setLine,
}: {
  outer: Pantone;
  inner: Pantone;
  line: Pantone;
  setOuter: (p: Pantone) => void;
  setInner: (p: Pantone) => void;
  setLine: (p: Pantone) => void;
}) {
  return (
    <section>
      <StepHeader eyebrowKey="designer.step3.eyebrow" titleKey="designer.step3.title" descKey="designer.step3.desc" />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <ColorPicker labelKey="designer.color.outer" options={OUTER_COLORS} value={outer} onChange={setOuter} />
        <ColorPicker labelKey="designer.color.inner" options={INNER_COLORS} value={inner} onChange={setInner} />
        <ColorPicker labelKey="designer.color.lines" options={LINE_COLORS} value={line} onChange={setLine} />
      </div>
    </section>
  );
}

function ColorPicker({
  labelKey,
  options,
  value,
  onChange,
}: {
  labelKey: any;
  options: Pantone[];
  value: Pantone;
  onChange: (p: Pantone) => void;
}) {
  const { t, lang } = useI18n();
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        <PaintBucket className="h-3.5 w-3.5" />
        {t(labelKey)}
      </div>
      <div className="mt-3">
        <div className="font-display text-xl font-bold text-ink">{value.name[lang]}</div>
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">{value.pantone}</div>
      </div>
      <div className="mt-5 flex items-center gap-3">
        {options.map((c) => {
          const active = c.hex === value.hex;
          return (
            <button
              key={c.pantone}
              type="button"
              onClick={() => onChange(c)}
              aria-label={c.name[lang]}
              className={`h-11 w-11 rounded-full border-2 transition ${
                active ? "border-ink scale-110 shadow-md" : "border-border hover:scale-105"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Step 4 — Surface ---------------- */
function Step4({
  surface,
  setSurface,
  options,
}: {
  surface: Surface;
  setSurface: (s: Surface) => void;
  options: Surface[];
}) {
  const { t } = useI18n();
  const all: { id: Surface; tKey: any; dKey: any }[] = [
    { id: "acrylic", tKey: "designer.surface.acrylic", dKey: "designer.surface.acrylic.d" },
    { id: "turf", tKey: "designer.surface.turf", dKey: "designer.surface.turf.d" },
  ];
  return (
    <section>
      <StepHeader eyebrowKey="designer.step4.eyebrow" titleKey="designer.step4.title" descKey="designer.step4.desc" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {all.map((s) => {
          const available = options.includes(s.id);
          const active = surface === s.id;
          return (
            <button
              key={s.id}
              type="button"
              disabled={!available}
              onClick={() => available && setSurface(s.id)}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition ${
                !available
                  ? "cursor-not-allowed border-dashed border-border bg-muted/40 opacity-50"
                  : active
                  ? "border-brand bg-brand/5 shadow-[0_12px_40px_-16px_rgba(179,218,45,0.6)]"
                  : "border-border bg-card hover:-translate-y-0.5 hover:border-brand/50"
              }`}
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl ${
                  active ? "bg-brand text-brand-foreground" : "bg-muted text-ink"
                }`}
              >
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{t(s.tKey)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(s.dKey)}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Step 5 — Summary ---------------- */
function Step5({
  sport,
  dims,
  outer,
  inner,
  line,
  surface,
  lang,
}: {
  sport: SportId;
  dims: string;
  outer: Pantone;
  inner: Pantone;
  line: Pantone;
  surface: Surface;
  lang: "es" | "en";
}) {
  const { t } = useI18n();
  const sportLabel = t(SPORTS.find((s) => s.id === sport)!.tKey);
  const rows: { label: string; value: string; swatch?: string }[] = [
    { label: t("designer.sum.sport"), value: sportLabel },
    { label: t("designer.sum.dims"), value: dims },
    { label: t("designer.sum.outer"), value: `${outer.name[lang]} — ${outer.pantone}`, swatch: outer.hex },
    { label: t("designer.sum.inner"), value: `${inner.name[lang]} — ${inner.pantone}`, swatch: inner.hex },
    { label: t("designer.sum.lines"), value: `${line.name[lang]} — ${line.pantone}`, swatch: line.hex },
    {
      label: t("designer.sum.surface"),
      value: surface === "acrylic" ? t("designer.surface.acrylic") : t("designer.surface.turf"),
    },
  ];
  return (
    <section>
      <StepHeader eyebrowKey="designer.step5.eyebrow" titleKey="designer.step5.title" />
      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <dl className="divide-y divide-border">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[200px_1fr] sm:items-center">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{r.label}</dt>
              <dd className="flex items-center gap-3 text-sm font-semibold text-ink">
                {r.swatch && (
                  <span
                    className="inline-block h-5 w-5 rounded-full border border-border"
                    style={{ backgroundColor: r.swatch }}
                  />
                )}
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------- Step 6 — Form ---------------- */
function Step6() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <section>
      <StepHeader eyebrowKey="designer.step6.eyebrow" titleKey="designer.step6.title" descKey="designer.step6.desc" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field name="firstName" label={t("designer.form.firstName")} required />
          <Field name="lastName" label={t("designer.form.lastName")} required />
          <Field name="email" label={t("designer.form.email")} type="email" required />
          <Field name="phone" label={t("designer.form.phone")} type="tel" />
        </div>
        <div className="mt-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {t("designer.form.message")}
          </label>
          <textarea
            name="message"
            rows={4}
            maxLength={1000}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
          />
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          {sent ? (
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
              <CheckCircle2 className="h-4 w-4" /> {t("designer.form.sent")}
            </p>
          ) : (
            <span />
          )}
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground shadow-[0_12px_40px_-10px_rgba(179,218,45,0.7)] transition-transform hover:-translate-y-0.5"
          >
            {t("designer.form.send")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={200}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
    </label>
  );
}

/* ---------------- Shared Step Header ---------------- */
function StepHeader({
  eyebrowKey,
  titleKey,
  descKey,
}: {
  eyebrowKey: any;
  titleKey: any;
  descKey?: any;
}) {
  const { t } = useI18n();
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">{t(eyebrowKey)}</span>
      <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">
        {t(titleKey)}
      </h2>
      {descKey && <p className="mt-3 text-muted-foreground">{t(descKey)}</p>}
    </div>
  );
}