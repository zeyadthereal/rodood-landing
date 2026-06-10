"use client";

import { ArrowRight, Zap, Users, ShieldCheck } from "lucide-react";

const channelBadges = [
  { label: "WhatsApp", color: "#20C997", bg: "#E6FFF6" },
  { label: "Instagram", color: "#E1306C", bg: "#FFF0F5" },
  { label: "Messenger", color: "#0084FF", bg: "#EEF6FF" },
  { label: "Arabic + English + Franco", color: "#7C3AED", bg: "#F1EAFF" },
  { label: "Human Handoff", color: "#2E53EA", bg: "#E9EEFF" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E9EEFF] opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#F1EAFF] opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E9EEFF] border border-[#2E53EA]/20 mb-6">
              <Zap size={13} className="text-[#2E53EA]" />
              <span className="text-xs font-semibold text-[#2E53EA] uppercase tracking-wide">
                AI-Powered Support
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
              AI customer support for{" "}
              <span className="gradient-text">Instagram</span> and{" "}
              <span className="gradient-text">WhatsApp</span> stores.
            </h1>

            <p className="text-lg text-[#334155] leading-relaxed mb-8 max-w-xl">
              Rodood.ai helps e-commerce brands reply instantly, answer
              repeated questions, handle complaints, and hand off complex
              conversations to humans — in{" "}
              <strong className="text-[#0F172A]">Arabic</strong>,{" "}
              <strong className="text-[#0F172A]">English</strong>, and{" "}
              <strong className="text-[#0F172A]">Franco</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E53EA] text-white font-semibold text-sm hover:bg-[#2444C9] transition-all duration-150 shadow-md shadow-[#2E53EA]/25 hover:shadow-lg hover:shadow-[#2E53EA]/30 hover:-translate-y-0.5"
              >
                Book a demo
                <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#334155] font-semibold text-sm hover:border-[#2E53EA] hover:text-[#2E53EA] hover:bg-[#E9EEFF] transition-all duration-150"
              >
                See how it works
              </a>
            </div>

            {/* Trust microcopy */}
            <div className="flex flex-wrap gap-4 text-sm text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <Zap size={13} className="text-[#20C997]" />
                Instant replies
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={13} className="text-[#2E53EA]" />
                Human takeover anytime
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-[#7C3AED]" />
                Safe complaint handling
              </span>
            </div>

            {/* Channel badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {channelBadges.map((b) => (
                <span
                  key={b.label}
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    color: b.color,
                    background: b.bg,
                    borderColor: b.color + "33",
                  }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Chat UI Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroChatMockup() {
  return (
    <div className="relative w-full max-w-md">
      {/* Main inbox panel */}
      <div className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2E53EA] to-[#7C3AED] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="text-white font-semibold text-sm">
              Rodood Inbox
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
            <span className="text-white/80 text-xs">Live</span>
          </div>
        </div>

        <div className="p-3 space-y-2 bg-[#F8FAFC]">
          {/* Conversation row: WhatsApp */}
          <ConvoRow
            initials="SN"
            color="#20C997"
            name="Sara Nour"
            channel="WhatsApp"
            channelColor="#20C997"
            preview="السلام عليكم، عندي سؤال عن ..."
            time="just now"
            badge="AI Replied"
            badgeColor="#2E53EA"
          />
          {/* Conversation row: Instagram */}
          <ConvoRow
            initials="MA"
            color="#E1306C"
            name="Mai Ahmed"
            channel="Instagram"
            channelColor="#E1306C"
            preview="What sizes do you have for the..."
            time="2m"
            badge="AI Replied"
            badgeColor="#2E53EA"
          />
          {/* Conversation row: Human */}
          <ConvoRow
            initials="KH"
            color="#7C3AED"
            name="Khaled Hassan"
            channel="Messenger"
            channelColor="#0084FF"
            preview="I want to return my order and..."
            time="5m"
            badge="Human"
            badgeColor="#7C3AED"
          />
          {/* Complaint ticket card */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-3">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 text-xs">!</span>
                </div>
                <span className="text-xs font-semibold text-[#0F172A]">
                  Complaint #1042
                </span>
              </div>
              <span className="text-xs text-orange-500 font-medium bg-orange-50 px-2 py-0.5 rounded-full">
                Escalated
              </span>
            </div>
            <p className="text-xs text-[#64748B]">
              Order not received after 7 days — awaiting team review
            </p>
          </div>
        </div>

        {/* Active AI chat panel */}
        <div className="border-t border-[#E2E8F0] bg-white p-3">
          <div className="space-y-2">
            {/* Customer message */}
            <div className="flex justify-end">
              <div className="bg-[#E9EEFF] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[75%]">
                <p className="text-xs text-[#0F172A]">
                  عندي سؤال عن المقاسات المتاحة
                </p>
              </div>
            </div>
            {/* AI reply */}
            <div className="flex items-end gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2E53EA] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[9px] font-bold">AI</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm border border-[#E2E8F0] px-3 py-2 max-w-[75%]">
                <p className="text-xs text-[#334155]">
                  أهلاً! المقاسات المتاحة هي S, M, L, XL 🎉
                </p>
              </div>
            </div>
            {/* Typing indicator */}
            <div className="flex items-center gap-1.5 pl-8">
              <div className="flex gap-1">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
              <span className="text-[10px] text-[#94a3b8]">AI is typing…</span>
            </div>
          </div>
          {/* Handoff button */}
          <div className="mt-3 pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#20C997]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C997]" />
              AI Active
            </span>
            <button className="text-[11px] font-semibold text-[#2E53EA] bg-[#E9EEFF] px-2.5 py-1 rounded-lg hover:bg-[#2E53EA] hover:text-white transition-colors">
              Take over →
            </button>
          </div>
        </div>
      </div>

      {/* Floating stats card */}
      <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl border border-[#E2E8F0] px-3 py-2.5 hidden sm:block">
        <p className="text-[10px] text-[#64748B] font-medium mb-0.5">
          AI Handled Today
        </p>
        <p className="text-xl font-extrabold text-[#2E53EA]">347</p>
        <p className="text-[10px] text-[#20C997] font-medium">↑ 94% resolved</p>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-xl border border-[#E2E8F0] px-3 py-2 hidden sm:block">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#E6FFF6] flex items-center justify-center">
            <span className="text-[#20C997] text-xs">⚡</span>
          </div>
          <div>
            <p className="text-[10px] text-[#64748B]">Avg response time</p>
            <p className="text-xs font-bold text-[#0F172A]">&lt; 2 seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConvoRow({
  initials,
  color,
  name,
  channel,
  channelColor,
  preview,
  time,
  badge,
  badgeColor,
}: {
  initials: string;
  color: string;
  name: string;
  channel: string;
  channelColor: string;
  preview: string;
  time: string;
  badge: string;
  badgeColor: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] px-3 py-2.5 flex items-center gap-3 hover:border-[#2E53EA]/30 transition-colors cursor-pointer">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
        style={{ background: color }}
      >
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-xs font-semibold text-[#0F172A]">{name}</span>
          <span className="text-[10px] text-[#94a3b8]">{time}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
            style={{ color: channelColor, background: channelColor + "18" }}
          >
            {channel}
          </span>
          <p className="text-[10px] text-[#64748B] truncate">{preview}</p>
        </div>
      </div>
      <span
        className="text-[9px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
        style={{ color: badgeColor, background: badgeColor + "18" }}
      >
        {badge}
      </span>
    </div>
  );
}
