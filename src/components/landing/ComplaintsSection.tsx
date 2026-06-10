import { CheckCircle2, AlertOctagon, ShieldCheck } from "lucide-react";

const checklist = [
  "Collects customer name and phone number",
  "Collects order number",
  "Asks for complaint description",
  "Requests a photo when relevant",
  "Creates a structured complaint ticket",
  "Escalates to human team for review",
  "Never approves or rejects refunds automatically",
];

export default function ComplaintsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Complaint ticket mockup */}
          <div className="flex justify-center lg:justify-start order-last lg:order-first">
            <ComplaintMockup />
          </div>

          {/* Right: Copy */}
          <div>
            <p className="text-sm font-semibold text-[#F59E0B] uppercase tracking-widest mb-3">
              Complaint Handling
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-5">
              Handle complaints safely,{" "}
              <span className="text-[#F59E0B]">not randomly.</span>
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
              Rodood.ai collects every detail your team needs — order numbers,
              photos, descriptions — before creating a structured ticket and
              escalating it to a human for review. No guessing, no shortcuts.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {checklist.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      i === checklist.length - 1
                        ? "bg-[#FEF3C7]"
                        : "bg-[#E6FFF6]"
                    }`}
                  >
                    <CheckCircle2
                      size={12}
                      className={
                        i === checklist.length - 1
                          ? "text-[#F59E0B]"
                          : "text-[#20C997]"
                      }
                    />
                  </div>
                  <span
                    className={`text-sm leading-relaxed ${
                      i === checklist.length - 1
                        ? "font-semibold text-[#92400E]"
                        : "text-[#334155]"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Key trust note */}
            <div className="bg-[#FEF2F2] border border-[#EF4444]/20 rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck size={18} className="text-[#EF4444] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#991B1B] leading-relaxed">
                <strong>Rodood.ai never approves refunds automatically.</strong>{" "}
                All refund and return decisions are made by your team, with full
                context from the AI-collected complaint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplaintMockup() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Ticket card */}
      <div className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] overflow-hidden">
        <div className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertOctagon size={14} className="text-white" />
            <span className="text-white font-semibold text-sm">
              Complaint Ticket #1042
            </span>
          </div>
          <span className="text-white/80 text-xs font-medium bg-white/20 px-2 py-0.5 rounded-full">
            Escalated
          </span>
        </div>

        <div className="p-4 space-y-3">
          <TicketRow label="Customer" value="Nour Khalid" />
          <TicketRow label="Phone" value="+20 1XX XXX XXXX" />
          <TicketRow label="Order #" value="ORD-2024-8821" />
          <TicketRow label="Channel" value="WhatsApp" chip="#20C997" />

          <div>
            <p className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wide mb-1">
              Description
            </p>
            <p className="text-xs text-[#334155] bg-[#F8FAFC] rounded-lg p-2.5 leading-relaxed">
              Customer received wrong size (XL instead of M). Requesting
              exchange or refund. Photo evidence attached.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wide mb-1">
              Evidence
            </p>
            <div className="flex gap-2">
              <div className="w-14 h-14 bg-[#F1F5F9] rounded-lg flex items-center justify-center border border-[#E2E8F0]">
                <span className="text-[10px] text-[#64748B]">📷</span>
              </div>
              <div className="w-14 h-14 bg-[#F1F5F9] rounded-lg flex items-center justify-center border border-[#E2E8F0]">
                <span className="text-[10px] text-[#64748B]">📷</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
            <span className="text-[10px] text-[#64748B]">
              Awaiting team review
            </span>
            <button className="text-[11px] font-bold text-white bg-[#2E53EA] px-3 py-1.5 rounded-lg">
              Review →
            </button>
          </div>
        </div>
      </div>

      {/* AI message that collected this */}
      <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2E53EA] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[9px] font-bold">AI</span>
          </div>
          <div>
            <p className="text-xs text-[#334155] leading-relaxed">
              Complaint collected. Ticket #1042 created and escalated to
              support team. Your team will review and respond.
            </p>
            <div className="mt-2 flex items-center gap-1">
              <CheckCircle2 size={11} className="text-[#20C997]" />
              <span className="text-[10px] text-[#20C997] font-medium">
                No automatic decision made
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TicketRow({
  label,
  value,
  chip,
}: {
  label: string;
  value: string;
  chip?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wide">
        {label}
      </span>
      {chip ? (
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ color: chip, background: chip + "1A" }}
        >
          {value}
        </span>
      ) : (
        <span className="text-xs font-medium text-[#0F172A]">{value}</span>
      )}
    </div>
  );
}
