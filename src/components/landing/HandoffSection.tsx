import { Users, Zap, ArrowRight, MessageCircle } from "lucide-react";

export default function HandoffSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
              Human Handoff
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-5">
              AI handles the routine.{" "}
              <span className="gradient-text">Humans handle the sensitive.</span>
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
              Your team can take over any conversation instantly, reply
              manually, and re-enable AI when they&apos;re done. You stay in
              full control — always.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                {
                  icon: Zap,
                  color: "#20C997",
                  text: "AI handles FAQs, product questions, and routine replies automatically.",
                },
                {
                  icon: Users,
                  color: "#2E53EA",
                  text: "One click to take over any conversation as a human agent.",
                },
                {
                  icon: ArrowRight,
                  color: "#7C3AED",
                  text: "Re-enable AI when the sensitive part is resolved.",
                },
                {
                  icon: MessageCircle,
                  color: "#F59E0B",
                  text: "Full conversation history visible to both AI and human agents.",
                },
              ].map(({ icon: Icon, color, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: color + "1A" }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="text-sm text-[#334155] leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Handoff UI Mockup */}
          <div className="flex justify-center lg:justify-end">
            <HandoffMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function HandoffMockup() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Chat window */}
      <div className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] overflow-hidden">
        {/* Chat header */}
        <div className="px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E9EEFF] flex items-center justify-center">
              <span className="text-[#2E53EA] font-bold text-sm">N</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A]">Nour Khalid</p>
              <p className="text-[10px] text-[#64748B]">via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 bg-[#FAFAFA]">
          {/* Customer */}
          <div className="flex justify-end">
            <div className="bg-[#E9EEFF] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
              <p className="text-xs text-[#0F172A]">
                عايزة ارجع الطلب بتاعي، مش زي ما اتقلتلي
              </p>
            </div>
          </div>

          {/* AI reply */}
          <div className="flex items-end gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2E53EA] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[9px] font-bold">AI</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm border border-[#E2E8F0] px-3 py-2 max-w-[80%]">
              <p className="text-xs text-[#334155]">
                أنا عارفة إنك مش راضية، هتساعدك في فتح بلاغ. ممكن تبعتيلي صور
                المنتج؟
              </p>
            </div>
          </div>

          {/* Customer with photo */}
          <div className="flex justify-end">
            <div className="bg-[#E9EEFF] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
              <div className="w-24 h-16 bg-[#CBD5E1] rounded-lg mb-1 flex items-center justify-center">
                <span className="text-[10px] text-[#64748B]">📷 photo.jpg</span>
              </div>
              <p className="text-xs text-[#0F172A]">شوفي كده</p>
            </div>
          </div>
        </div>

        {/* Status bar — AI Active */}
        <div className="px-4 py-2.5 bg-white border-t border-[#E2E8F0] flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#20C997]">
            <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
            AI Active
          </span>
          <button className="text-[11px] font-bold text-white bg-[#2E53EA] px-3 py-1 rounded-lg hover:bg-[#2444C9] transition-colors">
            Take over →
          </button>
        </div>
      </div>

      {/* After takeover state */}
      <div className="bg-white rounded-2xl shadow-lg border border-[#2E53EA]/30 overflow-hidden">
        <div className="px-4 py-3 bg-[#E9EEFF] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2E53EA] flex items-center justify-center">
              <Users size={12} className="text-white" />
            </div>
            <span className="text-xs font-semibold text-[#2E53EA]">
              Human Takeover — Ahmed (Support)
            </span>
          </div>
          <span className="text-[10px] text-[#64748B]">now</span>
        </div>
        <div className="p-4">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-[#2E53EA] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[9px] font-bold">A</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm border border-[#E2E8F0] px-3 py-2 flex-1">
              <p className="text-xs text-[#334155]">
                أهلاً نور، أنا أحمد من فريق الدعم. هفتح ليكي بلاغ الاسترجاع
                دلوقتي.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-2.5 bg-[#FAFAFA] border-t border-[#E2E8F0] flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#2E53EA]">
            <span className="w-2 h-2 rounded-full bg-[#2E53EA]" />
            Human Active
          </span>
          <button className="text-[11px] font-bold text-[#20C997] bg-[#E6FFF6] px-3 py-1 rounded-lg hover:bg-[#20C997] hover:text-white transition-colors">
            Re-enable AI
          </button>
        </div>
      </div>
    </div>
  );
}
