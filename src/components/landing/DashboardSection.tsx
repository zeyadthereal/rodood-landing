import { MessageCircle, Zap, Users, AlertOctagon, TrendingUp, Clock } from "lucide-react";

const stats = [
  { icon: MessageCircle, label: "Active Chats", value: "24", trend: "+8 today", trendColor: "#20C997", color: "#2E53EA", bg: "#E9EEFF" },
  { icon: Zap, label: "AI Handled", value: "347", trend: "94% of total", trendColor: "#2E53EA", color: "#7C3AED", bg: "#F1EAFF" },
  { icon: Users, label: "Human Handled", value: "22", trend: "6% of total", trendColor: "#64748B", color: "#0084FF", bg: "#EEF6FF" },
  { icon: AlertOctagon, label: "Complaints", value: "8", trend: "3 resolved today", trendColor: "#20C997", color: "#F59E0B", bg: "#FFFBEB" },
  { icon: TrendingUp, label: "Escalation Rate", value: "6%", trend: "↓ from 14% last week", trendColor: "#20C997", color: "#EF4444", bg: "#FEF2F2" },
  { icon: Clock, label: "Avg Response", value: "1.8s", trend: "AI-powered", trendColor: "#7C3AED", color: "#20C997", bg: "#E6FFF6" },
];

const topQuestions = [
  { q: "What's the return policy?", count: 47 },
  { q: "Do you ship to [city]?", count: 39 },
  { q: "What sizes are available?", count: 34 },
  { q: "How long does delivery take?", count: 28 },
  { q: "Can I exchange a product?", count: 21 },
];

export default function DashboardSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            Dashboard
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            See every conversation, complaint, and AI handoff in one place.
          </h2>
          <p className="text-lg text-[#64748B]">
            Your entire support operation — visible, searchable, and
            actionable from a single portal.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden max-w-4xl mx-auto">
          {/* Top bar */}
          <div className="bg-gradient-to-r from-[#2E53EA] to-[#7C3AED] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-xs">R</span>
              </div>
              <span className="text-white font-semibold">Rodood Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
              <span className="text-white/80 text-xs">Live</span>
            </div>
          </div>

          <div className="p-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-3.5 hover:border-[#2E53EA]/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: s.bg }}
                      >
                        <Icon size={13} style={{ color: s.color }} />
                      </div>
                    </div>
                    <p className="text-xl font-extrabold text-[#0F172A] leading-none mb-0.5">
                      {s.value}
                    </p>
                    <p className="text-[10px] font-medium text-[#64748B] mb-1">
                      {s.label}
                    </p>
                    <p
                      className="text-[10px] font-semibold"
                      style={{ color: s.trendColor }}
                    >
                      {s.trend}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Two columns: recent chats + top questions */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Recent chats */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-4">
                <p className="text-xs font-bold text-[#0F172A] mb-3">
                  Recent Conversations
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Sara N.", channel: "WA", status: "AI", color: "#2E53EA" },
                    { name: "Mai A.", channel: "IG", status: "AI", color: "#2E53EA" },
                    { name: "Khaled H.", channel: "WA", status: "Human", color: "#7C3AED" },
                    { name: "Nour K.", channel: "WA", status: "Complaint", color: "#F59E0B" },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className="flex items-center justify-between py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#E9EEFF] flex items-center justify-center">
                          <span className="text-[#2E53EA] text-[9px] font-bold">
                            {c.name[0]}
                          </span>
                        </div>
                        <span className="text-xs text-[#334155]">{c.name}</span>
                        <span className="text-[9px] text-[#94a3b8] bg-[#F1F5F9] px-1.5 py-0.5 rounded-full">
                          {c.channel}
                        </span>
                      </div>
                      <span
                        className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                        style={{ color: c.color, background: c.color + "18" }}
                      >
                        {c.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top questions */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-4">
                <p className="text-xs font-bold text-[#0F172A] mb-3">
                  Top Questions Today
                </p>
                <div className="space-y-2">
                  {topQuestions.map((tq, i) => (
                    <div key={tq.q} className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#94a3b8] w-3 flex-shrink-0">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[11px] text-[#334155] truncate pr-2">
                            {tq.q}
                          </span>
                          <span className="text-[10px] font-semibold text-[#2E53EA] flex-shrink-0">
                            {tq.count}
                          </span>
                        </div>
                        <div className="h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#2E53EA] to-[#7C3AED] rounded-full"
                            style={{ width: `${(tq.count / 47) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
