import { CheckCircle2 } from "lucide-react";

const channels = [
  {
    name: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    color: "#20C997",
    bg: "linear-gradient(135deg, #E6FFF6 0%, #d0fae5 100%)",
    border: "#20C99733",
    description:
      "The primary channel for MENA shoppers. Handle product questions, orders, and complaints over WhatsApp.",
    features: [
      "Inbound messages",
      "AI replies",
      "Human takeover",
      "Conversation history",
    ],
  },
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: "#E1306C",
    bg: "linear-gradient(135deg, #FFF0F5 0%, #ffe4ef 100%)",
    border: "#E1306C33",
    description:
      "Instagram DMs are where fashion brands live. Reply to story replies, DM questions, and order requests automatically.",
    features: [
      "DM automation",
      "Story reply handling",
      "AI replies",
      "Human takeover",
    ],
  },
  {
    name: "Messenger",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z" />
      </svg>
    ),
    color: "#0084FF",
    bg: "linear-gradient(135deg, #EEF6FF 0%, #dbeafe 100%)",
    border: "#0084FF33",
    description:
      "Many MENA businesses still run on Facebook Pages. Rodood.ai keeps your Messenger inbox organized and auto-replied.",
    features: [
      "Page inbox automation",
      "AI replies",
      "Human takeover",
      "Conversation history",
    ],
  },
];

export default function ChannelsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            Channels
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Built for the channels your customers already use.
          </h2>
          <p className="text-lg text-[#64748B]">
            One platform. All your DMs. No switching between apps.
          </p>
        </div>

        {/* Channel cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {channels.map((ch) => (
            <div
              key={ch.name}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: ch.bg, border: `1.5px solid ${ch.border}` }}
              >
                <span style={{ color: ch.color }}>{ch.icon}</span>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                {ch.name}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-5">
                {ch.description}
              </p>

              <ul className="space-y-2">
                {ch.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      size={14}
                      className="flex-shrink-0"
                      style={{ color: ch.color }}
                    />
                    <span className="text-[#334155]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
