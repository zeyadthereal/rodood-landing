const footerLinks = {
  Product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Channels", href: "#channels" },
    { label: "AI Agents", href: "#agents" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Pricing", href: "#pricing" },
  ],
  "Use Cases": [
    { label: "Fashion Brands", href: "#use-cases" },
    { label: "Instagram Stores", href: "#use-cases" },
    { label: "WhatsApp Teams", href: "#use-cases" },
    { label: "Support Teams", href: "#use-cases" },
    { label: "Agencies", href: "#use-cases" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "mailto:hello@rodood.ai" },
    { label: "Book a Demo", href: "#cta" },
    { label: "Login", href: "/login" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2E53EA] to-[#7C3AED] flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Rodood.ai</span>
            </div>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">
              The AI customer support platform for Instagram and WhatsApp
              stores. Reply instantly. Handle complaints safely. Let humans
              take over anytime.
            </p>
            <div className="flex gap-3">
              {[
                { label: "WhatsApp", color: "#20C997" },
                { label: "Instagram", color: "#E1306C" },
                { label: "Messenger", color: "#0084FF" },
              ].map((ch) => (
                <span
                  key={ch.label}
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                  style={{ color: ch.color, borderColor: ch.color + "40", background: ch.color + "15" }}
                >
                  {ch.label}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © {new Date().getFullYear()} Rodood.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-[#64748B]">Arabic · English · Franco</span>
            <span className="flex items-center gap-1.5 text-xs text-[#64748B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C997]" />
              MENA-first platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
