import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Image as ImageIcon,
  Layers,
  PaintBucket,
  Ruler,
  Trash2,
  Trophy,
  Upload,
} from "lucide-react";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Navbar, Footer, WhatsAppButton } from "./index";
import CotizacionPreview, { type QuoteData } from "@/components/CotizacionPreview";

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

type SportId = "tennis" | "basketball" | "volleyball" | "futsal" | "multicourt";
type Surface = "acrylic" | "turf";

type SportDef = {
  id: SportId;
  tKey: any;
  standard: { w: number; h: number };
  bg: string; // CSS background for the card
  pattern: string; // decorative overlay
};

const SPORTS: SportDef[] = [
  {
    id: "tennis",
    tKey: "sport.tennis",
    standard: { w: 23.77, h: 10.97 },
    bg: "linear-gradient(135deg,#1E5B8C 0%, #2E7DB8 100%)",
    pattern:
      "radial-gradient(circle at 20% 30%, #d9f45a 0 6px, transparent 7px), radial-gradient(circle at 78% 72%, #d9f45a 0 6px, transparent 7px), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0 40%, transparent 60%)",
  },
  {
    id: "basketball",
    tKey: "sport.basketball",
    standard: { w: 28, h: 15 },
    bg: "linear-gradient(135deg,#B8541F 0%, #E07A2C 100%)",
    pattern:
      "repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0 2px, transparent 2px 14px), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.35) 0 26px, transparent 27px)",
  },
  {
    id: "volleyball",
    tKey: "sport.volleyball",
    standard: { w: 18, h: 9 },
    bg: "linear-gradient(135deg,#1F6FCE 0%, #7FBE3F 100%)",
    pattern:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 24px)",
  },
  {
    id: "futsal",
    tKey: "sport.futsal",
    standard: { w: 40, h: 20 },
    bg: "linear-gradient(135deg,#0F5F2E 0%, #2CA55A 100%)",
    pattern:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 24px, rgba(0,0,0,0.08) 24px 48px)",
  },
  {
    id: "multicourt",
    tKey: "sport.multicourt",
    standard: { w: 32, h: 19 },
    bg: "linear-gradient(135deg,#364959 0%, #5B7386 100%)",
    pattern:
      "linear-gradient(90deg, rgba(179,218,45,0.25) 0 33%, rgba(31,111,206,0.25) 33% 66%, rgba(200,85,43,0.25) 66% 100%)",
  },
];

const SPORT_MAP: Record<SportId, SportDef> = SPORTS.reduce((acc, s) => {
  acc[s.id] = s;
  return acc;
}, {} as Record<SportId, SportDef>);

const SURFACE_SPORTS: Record<Surface, SportId[]> = {
  acrylic: ["tennis", "basketball", "volleyball", "futsal", "multicourt"],
  turf: ["futsal"],
};

const LOGO_PRICE = 180000; // CLP additional

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

function buildQuoteData(
  sport: SportId,
  outer: Pantone,
  inner: Pantone,
  line: Pantone,
  surface: Surface,
  width: number,
  height: number,
  hasLogo: boolean,
  form: Record<string, string>,
  t: (k: any) => string,
  lang: "es" | "en",
): QuoteData {
  const area = Math.max(1, Math.round(width * height));
  const dims = `${fmtNum(width, lang)} m × ${fmtNum(height, lang)} m`;
  const surfaceLabel = surface === "acrylic" ? t("designer.surface.acrylic") : t("designer.surface.turf");
  const sportLabel = t(SPORT_MAP[sport].tKey);
  const basePrice =
    sport === "futsal"
      ? 85000
      : sport === "basketball"
      ? 72000
      : sport === "tennis"
      ? 68000
      : sport === "multicourt"
      ? 78000
      : 65000;
  const items: QuoteData["items"] = [
    {
      description: `${lang === "es" ? "Provisión e instalación" : "Supply and installation"} — ${sportLabel.toLowerCase()} (${surfaceLabel.toLowerCase()})`,
      quantity: 1,
      unitPrice: basePrice * area,
    },
    {
      description: lang === "es" ? "Trazado de líneas reglamentarias" : "Regulation line marking",
      quantity: 1,
      unitPrice: Math.round(basePrice * area * 0.08),
    },
    {
      description: lang === "es" ? "Gastos generales y logística" : "General expenses and logistics",
      quantity: 1,
      unitPrice: Math.round(basePrice * area * 0.12),
    },
  ];
  if (hasLogo) {
    items.push({
      description: t("quote.logoItem"),
      quantity: 1,
      unitPrice: LOGO_PRICE,
    });
  }

  return {
    quoteNumber: `INV-${Date.now().toString().slice(-6)}`,
    date: new Date().toLocaleDateString(lang === "es" ? "es-CL" : "en-US"),
    client: {
      firstName: form.firstName || "",
      lastName: form.lastName || "",
      email: form.email || "",
      phone: form.phone || "",
    },
    project: {
      sport: sportLabel,
      surface: surfaceLabel,
      dimensions: dims,
      totalArea: area,
      outerColor: outer.hex,
      innerColor: inner.hex,
      lineColor: line.hex,
      outerPantone: outer.pantone,
      innerPantone: inner.pantone,
      linePantone: line.pantone,
    },
    items,
    conditions: {
      validity:
        lang === "es"
          ? "30 días corridos desde fecha de emisión"
          : "30 calendar days from issuance date",
      paymentTerms: lang === "es" ? "50% inicio — 50% entrega" : "50% start — 50% delivery",
      exclusions:
        lang === "es"
          ? "Movimiento de tierra, permisos municipales y obras civiles mayores"
          : "Earthworks, municipal permits and major civil works",
    },
  };
}

function fmtNum(n: number, lang: "es" | "en") {
  return n.toLocaleString(lang === "es" ? "es-CL" : "en-US", { maximumFractionDigits: 2 });
}

function DesignerExperience() {
  const { t, lang } = useI18n();
  const [surface, setSurface] = useState<Surface>("acrylic");
  const [sport, setSport] = useState<SportId>("tennis");
  const [width, setWidth] = useState<number>(SPORT_MAP.tennis.standard.w);
  const [height, setHeight] = useState<number>(SPORT_MAP.tennis.standard.h);
  const [outer, setOuter] = useState<Pantone>(OUTER_COLORS[0]);
  const [inner, setInner] = useState<Pantone>(INNER_COLORS[0]);
  const [line, setLine] = useState<Pantone>(LINE_COLORS[0]);
  const [logo, setLogo] = useState<LogoState | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const allowedSports = SURFACE_SPORTS[surface];

  // If current sport is not allowed by the surface, snap to first allowed.
  useEffect(() => {
    if (!allowedSports.includes(sport)) {
      const next = allowedSports[0];
      setSport(next);
      setWidth(SPORT_MAP[next].standard.w);
      setHeight(SPORT_MAP[next].standard.h);
    }
  }, [surface, allowedSports, sport]);

  const dims = `${fmtNum(width, lang)} m × ${fmtNum(height, lang)} m`;

  const handlePreview = () => {
    const data = buildQuoteData(
      sport,
      outer,
      inner,
      line,
      surface,
      width,
      height,
      !!logo,
      formValues,
      t,
      lang,
    );
    setQuoteData(data);
    setShowPreview(true);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <StepSurface surface={surface} setSurface={setSurface} />
      <StepSport
        surface={surface}
        sport={sport}
        onPick={(id) => {
          setSport(id);
          setWidth(SPORT_MAP[id].standard.w);
          setHeight(SPORT_MAP[id].standard.h);
        }}
      />
      <StepDimensions
        sport={sport}
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
      <StepColors
        outer={outer}
        inner={inner}
        line={line}
        setOuter={setOuter}
        setInner={setInner}
        setLine={setLine}
      />
      <StepPreview
        sport={sport}
        outer={outer}
        inner={inner}
        line={line}
        dims={dims}
        surface={surface}
        logo={logo}
        setLogo={setLogo}
      />
      <StepSummary
        sport={sport}
        dims={dims}
        outer={outer}
        inner={inner}
        line={line}
        surface={surface}
        hasLogo={!!logo}
        lang={lang}
      />
      <StepForm formValues={formValues} setFormValues={setFormValues} onPreview={handlePreview} />
      {showPreview && quoteData && (
        <CotizacionPreview data={{ ...quoteData, onClose: () => setShowPreview(false) }} />
      )}
    </div>
  );
}

/* ---------------- Step 1 — Surface ---------------- */
function StepSurface({
  surface,
  setSurface,
}: {
  surface: Surface;
  setSurface: (s: Surface) => void;
}) {
  const { t } = useI18n();
  const all: { id: Surface; tKey: any; dKey: any }[] = [
    { id: "acrylic", tKey: "designer.surface.acrylic", dKey: "designer.surface.acrylic.d" },
    { id: "turf", tKey: "designer.surface.turf", dKey: "designer.surface.turf.d" },
  ];
  return (
    <section>
      <StepHeader
        eyebrowKey="designer.step1.eyebrow"
        titleKey="designer.step1.title"
        descKey="designer.step1.desc"
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {all.map((s) => {
          const active = surface === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSurface(s.id)}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition ${
                active
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

/* ---------------- Step 2 — Sport (filtered by surface) ---------------- */
function StepSport({
  surface,
  sport,
  onPick,
}: {
  surface: Surface;
  sport: SportId;
  onPick: (s: SportId) => void;
}) {
  const { t } = useI18n();
  const allowed = SURFACE_SPORTS[surface];
  return (
    <section>
      <StepHeader
        eyebrowKey="designer.step2.eyebrow"
        titleKey="designer.step2.title"
        descKey="designer.step2.desc"
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SPORTS.map((s) => {
          const available = allowed.includes(s.id);
          const active = sport === s.id;
          return (
            <button
              key={s.id}
              type="button"
              disabled={!available}
              onClick={() => available && onPick(s.id)}
              className={`group relative overflow-hidden rounded-2xl border text-left transition ${
                !available
                  ? "cursor-not-allowed border-dashed border-border opacity-45"
                  : active
                  ? "border-brand shadow-[0_12px_40px_-16px_rgba(179,218,45,0.6)]"
                  : "border-border hover:-translate-y-0.5 hover:border-brand/60"
              }`}
            >
              <div
                className="relative h-32 w-full"
                style={{ background: s.bg }}
              >
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: s.pattern, backgroundSize: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-lg bg-white/85 text-ink shadow">
                  <Trophy className="h-4 w-4" />
                </div>
                {active && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-foreground">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                )}
              </div>
              <div className="bg-card p-4">
                <h3 className="font-display text-lg font-bold text-ink">{t(s.tKey)}</h3>
                {!available && (
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("designer.dims.locked")}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Step 3 — Custom dimensions ---------------- */
function StepDimensions({
  sport,
  width,
  height,
  setWidth,
  setHeight,
}: {
  sport: SportId;
  width: number;
  height: number;
  setWidth: (n: number) => void;
  setHeight: (n: number) => void;
}) {
  const { t, lang } = useI18n();
  const std = SPORT_MAP[sport].standard;
  const area = Math.max(0, width * height);
  return (
    <section>
      <StepHeader
        eyebrowKey="designer.step3.eyebrow"
        titleKey="designer.step3.title"
        descKey="designer.step3.desc"
      />
      <div className="mt-8 grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
        <NumField
          label={t("designer.dims.width")}
          value={width}
          min={4}
          max={80}
          step={0.1}
          onChange={setWidth}
        />
        <NumField
          label={t("designer.dims.height")}
          value={height}
          min={4}
          max={60}
          step={0.1}
          onChange={setHeight}
        />
        <button
          type="button"
          onClick={() => {
            setWidth(std.w);
            setHeight(std.h);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted px-4 py-3 text-xs font-bold uppercase tracking-wider text-ink transition hover:border-brand hover:text-brand"
        >
          <Ruler className="h-4 w-4" />
          {t("designer.dims.reset")}
        </button>
        <div className="lg:col-span-3">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {t("designer.dims.area")}
          </div>
          <div className="mt-1 font-display text-2xl font-black text-ink">
            {area.toLocaleString(lang === "es" ? "es-CL" : "en-US", { maximumFractionDigits: 1 })} m²
          </div>
        </div>
      </div>
    </section>
  );
}

function NumField({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          const n = parseFloat(e.target.value);
          if (!Number.isNaN(n)) onChange(Math.min(max, Math.max(min, n)));
        }}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-lg font-semibold text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
    </label>
  );
}

/* ---------------- Step 5 — Court Preview + Logo ---------------- */
type LogoState = {
  src: string;
  // Position + size as percentages of the court container.
  x: number;
  y: number;
  w: number;
};

function StepPreview({
  sport,
  outer,
  inner,
  line,
  dims,
  surface,
  logo,
  setLogo,
}: {
  sport: SportId;
  outer: Pantone;
  inner: Pantone;
  line: Pantone;
  dims: string;
  surface: Surface;
  logo: LogoState | null;
  setLogo: (l: LogoState | null) => void;
}) {
  const { t, lang } = useI18n();
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (f: File | null | undefined) => {
    if (!f) return;
    if (!/png$/i.test(f.type) && !/\.png$/i.test(f.name)) return;
    const url = URL.createObjectURL(f);
    setLogo({ src: url, x: 50, y: 50, w: 24 });
  };

  return (
    <section>
      <StepHeader
        eyebrowKey="designer.step5.eyebrow"
        titleKey="designer.step5.title"
        descKey="designer.step5.desc"
      />
      <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-ink p-6 sm:p-10">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl">
          <CourtVisual sport={sport} outer={outer.hex} inner={inner.hex} line={line.hex} />
          {logo && <LogoOverlay logo={logo} setLogo={setLogo} />}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink-foreground/80">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {dims}
            </div>
            <div className="text-xs text-ink-foreground/60">
              {t("designer.sum.surface")}:{" "}
              <span className="font-semibold text-ink-foreground">
                {surface === "acrylic" ? t("designer.surface.acrylic") : t("designer.surface.turf")}
              </span>
            </div>
            <div className="text-xs text-ink-foreground/60">
              {outer.name[lang]} · {inner.name[lang]} · {line.name[lang]}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <input
              ref={fileRef}
              type="file"
              accept="image/png"
              className="hidden"
              onChange={(e) => onFile(e.target.files?.[0])}
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-foreground shadow"
            >
              {logo ? <ImageIcon className="h-4 w-4" /> : <Upload className="h-4 w-4" />}
              {logo ? t("designer.logo.change") : t("designer.logo.upload")}
            </button>
            {logo && (
              <button
                type="button"
                onClick={() => setLogo(null)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink-foreground/80 hover:bg-white/10"
              >
                <Trash2 className="h-4 w-4" />
                {t("designer.logo.remove")}
              </button>
            )}
          </div>
        </div>

        <p className="mt-3 text-[11px] text-ink-foreground/50">{t("designer.logo.help")}</p>
      </div>
    </section>
  );
}

function LogoOverlay({
  logo,
  setLogo,
}: {
  logo: LogoState;
  setLogo: (l: LogoState | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef({ mode: null as "drag" | "resize" | null, startX: 0, startY: 0, orig: logo });

  const onDown = (mode: "drag" | "resize") => (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    stateRef.current = { mode, startX: e.clientX, startY: e.clientY, orig: logo };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const onMove = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (!s.mode || !containerRef.current) return;
    const rect = containerRef.current.parentElement!.getBoundingClientRect();
    const dx = ((e.clientX - s.startX) / rect.width) * 100;
    const dy = ((e.clientY - s.startY) / rect.height) * 100;
    if (s.mode === "drag") {
      setLogo({
        ...s.orig,
        x: Math.min(100, Math.max(0, s.orig.x + dx)),
        y: Math.min(100, Math.max(0, s.orig.y + dy)),
      });
    } else {
      const w = Math.min(90, Math.max(6, s.orig.w + dx));
      setLogo({ ...s.orig, w });
    }
  };

  const onUp = (e: React.PointerEvent) => {
    stateRef.current.mode = null;
    (e.target as Element).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={onMove}
      onPointerUp={onUp}
      className="absolute select-none"
      style={{
        left: `${logo.x}%`,
        top: `${logo.y}%`,
        width: `${logo.w}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none",
      }}
    >
      <img
        src={logo.src}
        alt="Logo"
        draggable={false}
        onPointerDown={onDown("drag")}
        className="pointer-events-auto block w-full cursor-move drop-shadow-lg"
        style={{ userSelect: "none" }}
      />
      <span
        onPointerDown={onDown("resize")}
        className="pointer-events-auto absolute -bottom-2 -right-2 h-4 w-4 cursor-nwse-resize rounded-sm border-2 border-brand bg-white shadow"
        aria-label="resize"
      />
    </div>
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
        {sport === "multicourt" && (
          <>
            <rect x="10" y="10" width="80" height="55" fill={inner} style={{ transition: "fill 400ms ease" }} />
            <g {...common}>
              <rect x="10" y="10" width="80" height="55" />
              <line x1="50" y1="10" x2="50" y2="65" />
              <circle cx="50" cy="37.5" r="7" />
              <rect x="18" y="14" width="64" height="47" strokeDasharray="1.2 1.2" />
              <line x1="18" y1="37.5" x2="82" y2="37.5" strokeDasharray="1.2 1.2" />
            </g>
          </>
        )}
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
    </div>
  );
}

/* ---------------- Step 4 — Colors ---------------- */
function StepColors({
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
      <StepHeader eyebrowKey="designer.step4.eyebrow" titleKey="designer.step4.title" descKey="designer.step4.desc" />
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

/* ---------------- Step 6 — Summary ---------------- */
function StepSummary({
  sport,
  dims,
  outer,
  inner,
  line,
  surface,
  hasLogo,
  lang,
}: {
  sport: SportId;
  dims: string;
  outer: Pantone;
  inner: Pantone;
  line: Pantone;
  surface: Surface;
  hasLogo: boolean;
  lang: "es" | "en";
}) {
  const { t } = useI18n();
  const sportLabel = t(SPORT_MAP[sport].tKey);
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
    {
      label: t("designer.sum.logo"),
      value: hasLogo ? t("designer.logo.included") : t("designer.logo.notIncluded"),
    },
  ];
  return (
    <section>
      <StepHeader eyebrowKey="designer.step6.eyebrow" titleKey="designer.step6.title" />
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

/* ---------------- Step 7 — Form ---------------- */
function StepForm({
  formValues,
  setFormValues,
  onPreview,
}: {
  formValues: Record<string, string>;
  setFormValues: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onPreview: () => void;
}) {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const update = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <StepHeader eyebrowKey="designer.step7.eyebrow" titleKey="designer.step7.title" descKey="designer.step7.desc" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            name="firstName"
            label={t("designer.form.firstName")}
            required
            value={formValues.firstName || ""}
            onChange={(v) => update("firstName", v)}
          />
          <Field
            name="lastName"
            label={t("designer.form.lastName")}
            required
            value={formValues.lastName || ""}
            onChange={(v) => update("lastName", v)}
          />
          <Field
            name="email"
            label={t("designer.form.email")}
            type="email"
            required
            value={formValues.email || ""}
            onChange={(v) => update("email", v)}
          />
          <Field
            name="phone"
            label={t("designer.form.phone")}
            type="tel"
            value={formValues.phone || ""}
            onChange={(v) => update("phone", v)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {t("designer.form.message")}
          </label>
          <textarea
            name="message"
            rows={4}
            maxLength={1000}
            value={formValues.message || ""}
            onChange={(e) => update("message", e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
          />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {sent ? (
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
              <CheckCircle2 className="h-4 w-4" /> {t("designer.form.sent")}
            </p>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onPreview}
              className="group inline-flex items-center gap-2 rounded-full border-2 border-brand bg-transparent px-6 py-3 text-sm font-bold text-brand transition hover:bg-brand/5"
            >
              <Eye className="h-4 w-4" />
              {t("quote.btnPreview")}
            </button>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground shadow-[0_12px_40px_-10px_rgba(179,218,45,0.7)] transition-transform hover:-translate-y-0.5"
            >
              {t("designer.form.send")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
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
  value,
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
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