"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Rodood.ai only a chatbot?",
    a: "No. Rodood.ai is a full customer support platform. It includes specialized AI agents for different workflows (FAQ, product, complaints, orders), a unified inbox, human handoff, complaint ticketing, and an analytics dashboard. It's built to replace your manual DM support — not just add a bot.",
  },
  {
    q: "Does it work with WhatsApp?",
    a: "Yes. Rodood.ai connects to your WhatsApp Business account and handles inbound messages automatically. AI replies, collects order details, and escalates to your team when needed.",
  },
  {
    q: "Does it work with Instagram?",
    a: "Yes. Instagram DMs, story replies, and message requests are all handled through Rodood.ai. Your brand stays responsive without your team manually checking Instagram all day.",
  },
  {
    q: "Can it reply in Arabic?",
    a: "Yes. Rodood.ai is built specifically for Arabic, English, and Franco (Arabic written in Latin characters). It understands and replies naturally in all three, without needing separate configurations.",
  },
  {
    q: "Can humans take over conversations?",
    a: "Absolutely — and it's a core feature. Any agent on your team can take over any conversation with one click. AI stops replying, your agent handles it, and AI can be re-enabled when they're done.",
  },
  {
    q: "Can it handle complaints?",
    a: "Yes. Rodood.ai has a dedicated complaint workflow. AI collects the customer's name, phone, order number, complaint description, and photos — then creates a structured ticket and escalates it to your team. Nothing is decided automatically.",
  },
  {
    q: "Does it approve refunds automatically?",
    a: "No — and this is intentional. Rodood.ai never approves or rejects refunds on its own. It collects all the necessary details from the customer and escalates the case to your team, who makes the final decision.",
  },
  {
    q: "Is it made for fashion brands?",
    a: "Yes. Fashion and clothing brands are our primary focus. Rodood.ai is pre-built to handle size questions, color availability, exchange and return policies, and delivery inquiries — the questions every fashion brand gets hundreds of times a day.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#2E53EA] uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
            Common questions.
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#2E53EA]/30 shadow-sm"
                    : "border-[#E2E8F0] hover:border-[#2E53EA]/20"
                }`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 cursor-pointer bg-white"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm font-semibold leading-snug ${
                      isOpen ? "text-[#2E53EA]" : "text-[#0F172A]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 text-[#2E53EA]"
                        : "text-[#94a3b8]"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 bg-white">
                    <p className="text-sm text-text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
