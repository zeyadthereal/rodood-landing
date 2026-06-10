import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For small brands starting with AI support.",
    featured: false,
    features: [
      "1 channel (WhatsApp or Instagram)",
      "Up to 500 AI replies/month",
      "FAQ & Policy Agent",
      "Basic complaint handling",
      "Human handoff",
      "1 team member",
    ],
    cta: "Book a demo",
    color: "#2E53EA",
    bg: "bg-white",
    border: "border-[#E2E8F0]",
  },
  {
    name: "Growth",
    tagline: "For growing brands with more conversations and team members.",
    featured: true,
    features: [
      "All channels (WhatsApp + Instagram + Messenger)",
      "Up to 5,000 AI replies/month",
      "All AI agents",
      "Advanced complaint & refund handling",
      "Human handoff + team inbox",
      "Up to 5 team members",
      "Analytics dashboard",
    ],
    cta: "Book a demo",
    color: "#fff",
    bg: "bg-gradient-to-br from-[#2E53EA] to-[#7C3AED]",
    border: "border-transparent",
  },
  {
    name: "Custom",
    tagline: "For agencies and larger brands with advanced needs.",
    featured: false,
    features: [
      "Unlimited channels",
      "Unlimited AI replies",
      "All agents + custom agent training",
      "Multi-brand / agency management",
      "Priority support",
      "Custom integrations",
      "Dedicated onboarding",
    ],
    cta: "Contact us",
    color: "#7C3AED",
    bg: "bg-white",
    border: "border-[#E2E8F0]",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-[#64748B]">
            Start small. Scale as your brand grows. No surprises.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${plan.border} ${plan.bg} p-7 flex flex-col ${
                plan.featured ? "shadow-2xl shadow-[#2E53EA]/20 scale-105" : "hover:shadow-lg"
              } transition-all duration-200`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#20C997] text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-extrabold mb-1 ${
                    plan.featured ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.featured ? "text-white/80" : "text-[#64748B]"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.featured ? "#20C997" : "#2E53EA" }}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white/90" : "text-[#334155]"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-150 ${
                  plan.featured
                    ? "bg-white text-[#2E53EA] hover:bg-[#F8FAFC]"
                    : plan.name === "Custom"
                    ? "bg-[#F1EAFF] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white"
                    : "bg-[#E9EEFF] text-[#2E53EA] hover:bg-[#2E53EA] hover:text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#64748B] mt-8">
          All plans include a personalized demo. Pricing is confirmed after
          understanding your volume and needs.
        </p>
      </div>
    </section>
  );
}
