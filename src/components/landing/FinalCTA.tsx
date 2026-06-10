import { ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#2E53EA] to-[#7C3AED] rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
          {/* Decorative blobs */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-6">
              <Zap size={13} className="text-[#20C997]" />
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">
                Ready to get started?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Ready to stop losing customers
              <br />
              in your DMs?
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Give your brand an AI support team that replies instantly across
              WhatsApp, Instagram, and Messenger — and knows when to call a
              human.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:hello@rodood.ai?subject=Demo Request"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#2E53EA] font-bold text-sm hover:bg-[#F8FAFC] transition-all duration-150 shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Book a demo
                <ArrowRight size={16} />
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-150"
              >
                Login to portal
              </a>
            </div>

            <p className="text-white/50 text-sm mt-6">
              No credit card required for the demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
