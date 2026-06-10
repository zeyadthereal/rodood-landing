import {
  MessageSquare,
  Clock,
  Languages,
  AlertTriangle,
  Inbox,
  TrendingDown,
} from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    title: "Repeated questions all day",
    body: "Your team answers the same size, shipping, and policy questions hundreds of times a day. Every reply is manual.",
    color: "#E1306C",
    bg: "#FFF0F5",
  },
  {
    icon: Inbox,
    title: "Important DMs get buried",
    body: "High-value customers get lost in a sea of unread messages. You never know which DM needs urgent attention.",
    color: "#2E53EA",
    bg: "#E9EEFF",
  },
  {
    icon: Languages,
    title: "Arabic, English, and Franco — all at once",
    body: "Customers write in three languages. Your agents need to switch context constantly just to keep up.",
    color: "#7C3AED",
    bg: "#F1EAFF",
  },
  {
    icon: AlertTriangle,
    title: "Complaints need careful handling",
    body: "One careless response to a complaint can cost you the customer and your reputation. There's no room for error.",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: Clock,
    title: "Slow replies lose sales",
    body: "Customers on Instagram and WhatsApp expect instant responses. A 10-minute delay often means a lost sale.",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    icon: TrendingDown,
    title: "No visibility across channels",
    body: "WhatsApp, Instagram, and Messenger are all separate. There's no single place to see what's happening across all channels.",
    color: "#64748B",
    bg: "#F1F5F9",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Your customers are messaging everywhere.{" "}
            <span className="text-[#64748B] font-normal">
              Your team cannot reply fast enough.
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:border-[#2E53EA]/30 hover:shadow-md transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.bg }}
                >
                  <Icon size={18} style={{ color: item.color }} />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
