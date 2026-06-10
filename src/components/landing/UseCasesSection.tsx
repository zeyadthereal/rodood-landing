import { Shirt, ShoppingBag, MessageSquare, Headphones, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Shirt,
    title: "Fashion Brands",
    subtitle: "Your most common use case",
    color: "#E1306C",
    bg: "#FFF0F5",
    border: "#E1306C20",
    description:
      "Handle size questions, color availability, delivery timelines, exchange policies, and returns — automatically, in Arabic and English.",
    tags: [
      "Size questions",
      "Color availability",
      "Delivery inquiries",
      "Returns & exchanges",
      "Complaints",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Instagram Stores",
    subtitle: "DM-first businesses",
    color: "#7C3AED",
    bg: "#F1EAFF",
    border: "#7C3AED20",
    description:
      "Never miss an order DM again. AI reads every story reply, inbox message, and tagged comment, then replies instantly.",
    tags: [
      "Order DMs",
      "Story reply handling",
      "Product inquiries",
      "Instant replies",
    ],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Order Teams",
    subtitle: "High-volume order handling",
    color: "#20C997",
    bg: "#E6FFF6",
    border: "#20C99720",
    description:
      "AI handles routine questions so your team focuses on high-value customers, complex orders, and fulfillment.",
    tags: [
      "Order collection",
      "FAQ automation",
      "Team focus on complex cases",
      "Bulk order management",
    ],
  },
  {
    icon: Headphones,
    title: "Support Teams",
    subtitle: "Reduce agent workload",
    color: "#2E53EA",
    bg: "#E9EEFF",
    border: "#2E53EA20",
    description:
      "AI resolves 80-90% of repeated questions. Your agents focus on what actually needs a human — complaints, escalations, VIP customers.",
    tags: [
      "AI deflection",
      "Human escalation",
      "Complaint handling",
      "Team analytics",
    ],
  },
  {
    icon: Building2,
    title: "Agencies",
    subtitle: "Manage multiple brands",
    color: "#F59E0B",
    bg: "#FFFBEB",
    border: "#F59E0B20",
    description:
      "Manage AI support for multiple brand clients from one place. Each brand gets isolated data, custom AI, and separate team access.",
    tags: [
      "Multi-brand management",
      "Isolated data per brand",
      "Client portals",
      "Agency analytics",
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            Use cases
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Made for social-commerce teams.
          </h2>
          <p className="text-lg text-[#64748B]">
            Whether you&apos;re a small Instagram store or an agency managing
            dozens of brands — Rodood.ai is built for how you actually sell.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                className="rounded-2xl border p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                style={{ background: uc.bg, borderColor: uc.border }}
              >
                <div
                  className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm"
                  style={{ border: `1px solid ${uc.color}20` }}
                >
                  <Icon size={20} style={{ color: uc.color }} />
                </div>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-1"
                  style={{ color: uc.color + "BB" }}
                >
                  {uc.subtitle}
                </p>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {uc.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                  {uc.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {uc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-1 rounded-lg bg-white/70 border"
                      style={{ color: uc.color, borderColor: uc.color + "30" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
