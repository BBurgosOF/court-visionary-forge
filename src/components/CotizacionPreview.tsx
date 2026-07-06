import { useI18n } from "@/lib/i18n";
import { X, FileText, MapPin, Mail, Phone as PhoneIcon, Building2 } from "lucide-react";

export interface QuoteClient {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city?: string;
  region?: string;
}

export interface QuoteProject {
  sport: string;
  surface: string;
  dimensions: string;
  totalArea: number;
  outerColor: string;
  innerColor: string;
  lineColor: string;
  outerPantone?: string;
  innerPantone?: string;
  linePantone?: string;
}

export interface QuoteItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface QuoteData {
  quoteNumber: string;
  date: string;
  client: QuoteClient;
  project: QuoteProject;
  items: QuoteItem[];
  conditions: {
    validity: string;
    paymentTerms: string;
    exclusions: string;
  };
  onClose?: () => void;
}

function fmtMoney(n: number) {
  return n.toLocaleString("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
}

export default function CotizacionPreview({ data }: { data: QuoteData }) {
  const { t } = useI18n();

  const subtotal = data.items.reduce((sum, it) => sum + it.quantity * it.unitPrice, 0);
  const tax = Math.round(subtotal * 0.19);
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div
        className="relative my-8 bg-white shadow-2xl"
        style={{
          width: "210mm",
          minHeight: "297mm",
          fontFamily: "Arial, 'Helvetica Neue', sans-serif",
        }}
      >
        {/* Close button */}
        {data.onClose && (
          <button
            onClick={data.onClose}
            className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-lg hover:bg-gray-50"
            aria-label={t("quote.close")}
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Page content */}
        <div className="flex h-full min-h-[297mm] flex-col p-[20mm]">
          {/* Header */}
          <header className="flex items-start justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#B3DA2D] text-[#364959]">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight text-[#364959]">INVERDEP</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  {t("quote.subbrand")}
                </div>
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-black tracking-tight text-[#364959]">{t("quote.title")}</h1>
              <div className="mt-1 text-sm font-semibold text-gray-500">
                {t("quote.number")}: <span className="text-[#364959]">{data.quoteNumber}</span>
              </div>
              <div className="mt-0.5 text-sm text-gray-500">
                {t("quote.date")}: {data.date}
              </div>
            </div>
          </header>

          {/* Client info */}
          <section className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#B3DA2D]">{t("quote.clientTitle")}</h2>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{t("quote.name")}</div>
                <div className="mt-0.5 text-sm font-semibold text-[#364959]">
                  {data.client.firstName} {data.client.lastName}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{t("quote.email")}</div>
                <div className="mt-0.5 text-sm font-semibold text-[#364959]">{data.client.email}</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{t("quote.phone")}</div>
                <div className="mt-0.5 text-sm font-semibold text-[#364959]">{data.client.phone}</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{t("quote.location")}</div>
                <div className="mt-0.5 text-sm font-semibold text-[#364959]">
                  {data.client.city || "—"} {data.client.region ? `, ${data.client.region}` : ""}
                </div>
              </div>
            </div>
          </section>

          {/* Project characteristics */}
          <section className="mt-6 rounded-xl bg-gray-50 p-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#B3DA2D]">{t("quote.projectTitle")}</h2>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{t("quote.sport")}</div>
                <div className="mt-0.5 text-sm font-semibold text-[#364959]">{data.project.sport}</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{t("quote.surface")}</div>
                <div className="mt-0.5 text-sm font-semibold text-[#364959]">{data.project.surface}</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{t("quote.dimensions")}</div>
                <div className="mt-0.5 text-sm font-semibold text-[#364959]">{data.project.dimensions}</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">{t("quote.area")}</div>
                <div className="mt-0.5 text-sm font-semibold text-[#364959]">{data.project.totalArea.toLocaleString("es-CL")} m²</div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { label: t("quote.outerColor"), color: data.project.outerColor, pantone: data.project.outerPantone },
                { label: t("quote.innerColor"), color: data.project.innerColor, pantone: data.project.innerPantone },
                { label: t("quote.lineColor"), color: data.project.lineColor, pantone: data.project.linePantone },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                  <span
                    className="inline-block h-5 w-5 rounded-full border border-gray-200"
                    style={{ backgroundColor: c.color }}
                  />
                  <div>
                    <div className="text-[11px] font-semibold text-[#364959]">{c.label}</div>
                    <div className="text-[10px] text-gray-400">{c.pantone || "—"}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quote detail table */}
          <section className="mt-6 flex-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#B3DA2D]">{t("quote.detailTitle")}</h2>
            <table className="mt-3 w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#364959]">
                  <th className="py-2 text-left text-xs font-bold uppercase tracking-wider text-gray-500">{t("quote.colItem")}</th>
                  <th className="py-2 text-right text-xs font-bold uppercase tracking-wider text-gray-500">{t("quote.colQty")}</th>
                  <th className="py-2 text-right text-xs font-bold uppercase tracking-wider text-gray-500">{t("quote.colUnit")}</th>
                  <th className="py-2 text-right text-xs font-bold uppercase tracking-wider text-gray-500">{t("quote.colTotal")}</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="py-3 text-[#364959]">{item.description}</td>
                    <td className="py-3 text-right font-semibold text-[#364959]">{item.quantity}</td>
                    <td className="py-3 text-right text-gray-500">{fmtMoney(item.unitPrice)}</td>
                    <td className="py-3 text-right font-bold text-[#364959]">{fmtMoney(item.quantity * item.unitPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Totals */}
          <section className="mt-6 border-t-2 border-[#364959] pt-4">
            <div className="ml-auto w-full max-w-xs">
              <div className="flex justify-between py-1 text-sm text-gray-500">
                <span>{t("quote.subtotal")}</span>
                <span className="font-semibold text-[#364959]">{fmtMoney(subtotal)}</span>
              </div>
              <div className="flex justify-between py-1 text-sm text-gray-500">
                <span>{t("quote.tax")} (19%)</span>
                <span className="font-semibold text-[#364959]">{fmtMoney(tax)}</span>
              </div>
              <div className="mt-2 flex justify-between rounded-lg bg-[#364959] px-4 py-3 text-white">
                <span className="text-sm font-bold uppercase tracking-wider">{t("quote.total")}</span>
                <span className="text-lg font-black">{fmtMoney(total)}</span>
              </div>
            </div>
          </section>

          {/* Commercial conditions */}
          <section className="mt-6 rounded-xl border border-gray-200 p-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#B3DA2D]">{t("quote.conditionsTitle")}</h2>
            <div className="mt-3 space-y-2 text-sm text-[#364959]">
              <p>
                <span className="font-bold">{t("quote.validityLabel")}:</span> {data.conditions.validity}
              </p>
              <p>
                <span className="font-bold">{t("quote.paymentLabel")}:</span> {data.conditions.paymentTerms}
              </p>
              <p>
                <span className="font-bold">{t("quote.exclusionsLabel")}:</span> {data.conditions.exclusions}
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-auto border-t border-gray-200 pt-4 text-[11px] text-gray-400">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1 font-semibold text-[#364959]">
                <Building2 className="h-3 w-3" /> INVERDEP SpA
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" /> contacto@inverdep.cl
              </span>
              <span className="flex items-center gap-1">
                <PhoneIcon className="h-3 w-3" /> +56 9 0000 0000
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Santiago, Chile
              </span>
            </div>
            <div className="mt-2">{t("quote.footerNote")}</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
