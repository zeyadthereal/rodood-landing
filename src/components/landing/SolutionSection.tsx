import {
  Zap,
  BookOpen,
  Package,
  ClipboardList,
  AlertOctagon,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI replies instantly",
    body: "Every message gets an instant, context-aware response — day or night, across all connected channels.",
    color: "#2E53EA",
    bg: "#E9EEFF",
  },
  {
    icon: BookOpen,
    title: "Answers FAQs and policies",
    body: "Upload your shipping policy, return rules, and brand FAQs once. AI answers them correctly every time.",
    color: "#7C3AED",
    bg: "#F1EAFF",
  },
  {
    icon: Package,
    title: "Handles product and size questions",
    body: "AI knows your catalog, size guides, colors, and availability — so every product question gets a real answer.",
    color: "#0084FF",
    bg: "#EEF6FF",
  },
  {
    icon: ClipboardList,
    title: "Collects order details",
    body: "When a customer wants to place or track an order, AI gathers all necessary details before passing to your team.",
    color: "#20C997",
    bg: "#E6FFF6",
  },
  {
    icon: AlertOctagon,
    title: "Creates complaint tickets",
    body: "Complaints are handled with care. AI collects the details, creates a structured ticket, and escalates to humans.",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: Users,
    title: "Hands off to humans when needed",
    body: "Your team can take over any conversation with one click. AI steps back — and re-activates when you're done.",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            The solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Rodood.ai gives your brand{" "}
            <span className="gradient-text">an AI support team.</span>
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Connect your channels, upload your brand knowledge, and let AI
            agents handle the first reply while your team stays in control.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:bg-white hover:border-[#2E53EA]/30 hover:shadow-lg transition-all duration-200"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: f.bg }}
                >
                  <Icon size={20} style={{ color: f.color }} />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
