import { BookOpen, Package, Ruler, ShoppingCart, AlertOctagon, Users, ArrowRight } from "lucide-react";

const agents = [
  {
    icon: BookOpen,
    name: "FAQ & Policy Agent",
    description:
      "Answers shipping, return, exchange, and payment policy questions instantly — in Arabic, English, or Franco.",
    color: "#2E53EA",
    bg: "#E9EEFF",
    tag: "Most used",
  },
  {
    icon: Package,
    name: "Product Agent",
    description:
      "Knows your catalog. Answers product availability, colors, descriptions, and delivery timelines.",
    color: "#7C3AED",
    bg: "#F1EAFF",
    tag: null,
  },
  {
    icon: Ruler,
    name: "Size Guide Agent",
    description:
      "Handles size questions for every product category. Gives personalized recommendations based on measurements.",
    color: "#0084FF",
    bg: "#EEF6FF",
    tag: "Fashion brands",
  },
  {
    icon: ShoppingCart,
    name: "Order Assistant",
    description:
      "Collects name, address, phone, and order details from customers to prepare for fulfillment.",
    color: "#20C997",
    bg: "#E6FFF6",
    tag: null,
  },
  {
    icon: AlertOctagon,
    name: "Complaint & Refund Agent",
    description:
      "Collects complaint details, gathers evidence, creates a structured ticket, and escalates to your team for review.",
    color: "#F59E0B",
    bg: "#FFFBEB",
    tag: "Safety-first",
  },
  {
    icon: Users,
    name: "Human Handoff Agent",
    description:
      "Detects when a conversation needs a human — sensitive issues, frustrated customers, complex requests — and escalates.",
    color: "#EF4444",
    bg: "#FEF2F2",
    tag: null,
  },
];

export default function AgentsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            AI Agents
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Specialized AI agents for real support workflows.
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Each agent handles a specific part of your customer journey. A
            central router decides who handles each conversation.
          </p>
        </div>

        {/* Agent cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.name}
                className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:bg-white hover:shadow-lg hover:border-[#2E53EA]/20 transition-all duration-200 relative group"
              >
                {agent.tag && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ color: agent.color, background: agent.bg }}
                  >
                    {agent.tag}
                  </span>
                )}
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: agent.bg }}
                >
                  <Icon size={20} style={{ color: agent.color }} />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2 pr-16">
                  {agent.name}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {agent.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust note */}
        <div className="bg-[#FFFBEB] border border-[#F59E0B]/30 rounded-2xl p-5 flex items-start gap-4 max-w-2xl mx-auto">
          <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertOctagon size={18} className="text-[#F59E0B]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#92400E] mb-1">
              Sensitive cases are always escalated to humans.
            </p>
            <p className="text-sm text-[#78350F] leading-relaxed">
              Rodood.ai does not guess on refunds, serious complaints, or
              uncertain cases. These are collected, structured, and handed to
              your team for review — never resolved automatically.
            </p>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <FlowStep label="Customer message" bg="#E9EEFF" color="#2E53EA" />
            <ArrowRight size={16} className="text-[#CBD5E1]" />
            <FlowStep label="AI Router" bg="#F1EAFF" color="#7C3AED" badge="Smart" />
            <ArrowRight size={16} className="text-[#CBD5E1]" />
            <FlowStep label="Specialist Agent" bg="#E9EEFF" color="#2E53EA" />
            <ArrowRight size={16} className="text-[#CBD5E1]" />
            <FlowStep label="Human if needed" bg="#E6FFF6" color="#20C997" badge="Safe" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({
  label,
  bg,
  color,
  badge,
}: {
  label: string;
  bg: string;
  color: string;
  badge?: string;
}) {
  return (
    <div
      className="relative px-4 py-2.5 rounded-xl border font-semibold text-center min-w-[120px]"
      style={{ background: bg, color, borderColor: color + "30" }}
    >
      {badge && (
        <span
          className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-white border"
          style={{ color, borderColor: color + "50" }}
        >
          {badge}
        </span>
      )}
      {label}
    </div>
  );
}
