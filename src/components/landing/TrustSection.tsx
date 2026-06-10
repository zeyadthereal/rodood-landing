import { ShieldCheck, Users, Lock, AlertOctagon, Key, FileText } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Tenant-isolated data",
    body: "Each brand's conversations, tickets, and knowledge are strictly isolated. No data shared between accounts.",
    color: "#2E53EA",
    bg: "#E9EEFF",
  },
  {
    icon: Users,
    title: "Human handoff — always available",
    body: "Any conversation can be taken over by a human agent at any time. AI never blocks human access.",
    color: "#20C997",
    bg: "#E6FFF6",
  },
  {
    icon: Lock,
    title: "Role-based access control",
    body: "Agents see only what they need. Admins manage team permissions, channel access, and brand settings.",
    color: "#7C3AED",
    bg: "#F1EAFF",
  },
  {
    icon: AlertOctagon,
    title: "No automatic refund approval",
    body: "Rodood.ai collects complaint details and escalates. Your team approves or rejects every refund decision.",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: Key,
    title: "Secure platform credentials",
    body: "WhatsApp, Instagram, and Messenger credentials are stored securely and never exposed to third parties.",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    icon: FileText,
    title: "Audit-ready conversation history",
    body: "Every message, AI decision, and human takeover is logged. Full history available for review and compliance.",
    color: "#0084FF",
    bg: "#EEF6FF",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            Safety &amp; Control
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Built with control, safety, and privacy in mind.
          </h2>
          <p className="text-lg text-[#64748B]">
            Your brand is always in control. AI works for you — not around you.
          </p>
        </div>

        {/* Points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustPoints.map((tp) => {
            const Icon = tp.icon;
            return (
              <div
                key={tp.title}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-md hover:border-[#2E53EA]/20 transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: tp.bg }}
                >
                  <Icon size={18} style={{ color: tp.color }} />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {tp.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {tp.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
