"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  CreditCard,
  QrCode,
  Smartphone,
  Calendar,
  UserCheck,
  Camera,
  BarChart3,
  Map,
  RefreshCw,
  Server,
  Monitor,
  Plug,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "NETS Payment Integration",
    description:
      "Native NETS FlashPay, NETS QR, and NETS Click integration — the most widely used payment rail in Singapore parking.",
    category: "Payment",
  },
  {
    icon: QrCode,
    title: "PayNow / QR Payment",
    description:
      "Instant PayNow UEN-based QR transactions, real-time confirmation and auto-reconciliation with your bank.",
    category: "Payment",
  },
  {
    icon: Smartphone,
    title: "Visa / Mastercard / Apple Pay / Google Pay",
    description:
      "Contactless card payments via certified payment terminals. Full EMV compliance and PCI-DSS Level 1 ready.",
    category: "Payment",
  },
  {
    icon: Calendar,
    title: "Season Parking Management",
    description:
      "Full lifecycle management of monthly, quarterly and annual season permits. Automated renewal, waitlist queue, and digital permit issuance.",
    category: "Management",
  },
  {
    icon: UserCheck,
    title: "Visitor Pass Management",
    description:
      "Digital visitor pass issuance via resident app or lobby kiosk. Time-limited, QR-based access with full audit trail.",
    category: "Management",
  },
  {
    icon: Camera,
    title: "LPR Vehicle Recognition",
    description:
      "AI-powered licence plate recognition with 99.4% accuracy. Instant barrier trigger on registered plates — no ticket, no tap.",
    category: "Intelligence",
  },
  {
    icon: BarChart3,
    title: "Real-Time Revenue Dashboard",
    description:
      "Live occupancy rates, revenue by payment type, transaction logs and cashflow analytics in one cloud dashboard.",
    category: "Intelligence",
  },
  {
    icon: Map,
    title: "Multi-Site Parking Management",
    description:
      "Manage unlimited carparks from a single control centre. Compare performance, allocate permits, and push updates across all sites simultaneously.",
    category: "Management",
  },
  {
    icon: RefreshCw,
    title: "GIRO / Recurring Billing",
    description:
      "Automated monthly GIRO collection for season parking. Reduce admin overhead and eliminate manual collection with bank-linked auto-debit.",
    category: "Payment",
  },
  {
    icon: Server,
    title: "Barrier Gate, LED & Kiosk Integration",
    description:
      "Direct control of barrier gates, LED guidance displays and payment kiosks. All hardware managed from the same cloud platform.",
    category: "Hardware",
  },
  {
    icon: Monitor,
    title: "Edge Controller",
    description:
      "On-site edge computing unit ensures operations continue offline. Zero downtime even during internet disruptions.",
    category: "Hardware",
  },
  {
    icon: Plug,
    title: "API Integration with Property Systems",
    description:
      "RESTful API connects Londeo to your BEMS, ERP, security or resident portals. Pre-built connectors for major Singapore property platforms.",
    category: "Integration",
  },
];

const categories = ["All", "Payment", "Management", "Intelligence", "Hardware", "Integration"];

const categoryColors: Record<string, string> = {
  Payment: "#00D4FF",
  Management: "#7B61FF",
  Intelligence: "#00FFE0",
  Hardware: "#F59E0B",
  Integration: "#EC4899",
};

export default function PlatformFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? features
      : features.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="py-28 px-6 relative">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/5 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue mb-4 block">
            Platform Features
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything Your Carpark{" "}
            <span className="gradient-text">Needs</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Londeo unifies payments, access control, LPR, reporting and hardware
            management into a single Singapore-built platform.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-neon-blue text-dark-900 shadow-neon"
                  : "glass border border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Feature grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((feature, i) => {
            const Icon = feature.icon;
            const color = categoryColors[feature.category] || "#00D4FF";
            return (
              <motion.div
                key={feature.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group glass rounded-xl p-5 border border-white/5 hover:border-neon-blue/20 transition-all duration-400"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-xs text-white/45 leading-relaxed">{feature.description}</p>
                    <span
                      className="inline-block mt-3 text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{ color, background: `${color}10`, border: `1px solid ${color}20` }}
                    >
                      {feature.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
