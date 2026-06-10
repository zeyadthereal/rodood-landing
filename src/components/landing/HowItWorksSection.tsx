import { Link2, BookOpen, Settings2, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect your channels",
    description:
      "Link WhatsApp, Instagram, or Messenger in minutes. Rodood.ai connects to your existing business accounts.",
    color: "#2E53EA",
    bg: "#E9EEFF",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Add your brand knowledge",
    description:
      "Upload your FAQs, product catalog, size charts, shipping policies, and return rules. Your AI learns your brand.",
    color: "#7C3AED",
    bg: "#F1EAFF",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Customize AI behavior",
    description:
      "Set your tone, handoff rules, and escalation triggers. Define when AI should step back and call a human.",
    color: "#0084FF",
    bg: "#EEF6FF",
  },
  {
    number: "04",
    icon: Zap,
    title: "Go live — AI replies instantly",
    description:
      "From day one, every customer message gets an instant, context-aware reply across all connected channels.",
    color: "#20C997",
    bg: "#E6FFF6",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Monitor and improve",
    description:
      "Review conversations, complaints, and analytics from your portal. Spot patterns and refine your AI over time.",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Launch your AI support in days, not months.
          </h2>
          <p className="text-lg text-[#64748B]">
            No engineering team required. No months of setup. Just connect,
            train, and go live.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#2E53EA] via-[#7C3AED] to-[#F59E0B] opacity-20 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative z-10 bg-white rounded-2xl border border-[#E2E8F0] p-5 hover:shadow-lg hover:border-[#2E53EA]/30 transition-all duration-200 text-center"
                >
                  {/* Step number */}
                  <div
                    className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center mb-4"
                    style={{ background: step.bg }}
                  >
                    <Icon size={20} style={{ color: step.color }} />
                  </div>
                  <div
                    className="text-xs font-bold mb-2"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-sm font-bold text-[#0F172A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2E53EA] text-white font-semibold hover:bg-[#2444C9] transition-all duration-150 shadow-lg shadow-[#2E53EA]/25 hover:shadow-xl hover:shadow-[#2E53EA]/30 hover:-translate-y-0.5"
          >
            Book a demo and see it live
          </a>
        </div>
      </div>
    </section>
  );
}
