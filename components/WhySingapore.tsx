"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CalendarRange,
  UserCheck,
  Building2,
  Wallet,
  Map,
  Globe2,
  CheckCircle,
} from "lucide-react";

const reasons = [
  {
    icon: CalendarRange,
    title: "Season Parking — Singapore's Way",
    description:
      "Unlike most countries, Singapore parking revolves around monthly season permits. Londeo automates the full permit lifecycle — application, approval, renewal, cancellation and waitlist — with zero paper, zero manual chasing.",
    highlight: "Full digital season permit management",
    color: "#00D4FF",
  },
  {
    icon: UserCheck,
    title: "Visitor Pass Management",
    description:
      "Singapore condominiums and office buildings require controlled visitor access. Residents issue digital passes via app; the visitor arrives and the gate opens automatically — no guardroom visit needed.",
    highlight: "Resident-issued digital visitor passes",
    color: "#7B61FF",
  },
  {
    icon: Wallet,
    title: "Built Around Singapore Payments",
    description:
      "NETS is still the dominant parking payment in Singapore. Londeo is one of the few platforms with certified NETS FlashPay + NETS QR alongside PayNow, Visa, Mastercard, Apple Pay and Google Pay.",
    highlight: "NETS + PayNow native integration",
    color: "#00FFE0",
  },
  {
    icon: Building2,
    title: "Condo & Strata Title Complexity",
    description:
      "Singapore condominiums have complex lot allocation rules — MCST-controlled, strata-titled car parks with resident priority lots, visitor lots and commercial lots all requiring separate rule sets.",
    highlight: "MCST-ready lot allocation engine",
    color: "#F59E0B",
  },
  {
    icon: Map,
    title: "Multi-Site Centralised Operations",
    description:
      "Property groups in Singapore increasingly manage portfolios of developments. Londeo&apos;s multi-site architecture lets one operator manage 50+ car parks from a single cloud dashboard with per-site P&L reporting.",
    highlight: "Portfolio-level carpark management",
    color: "#EC4899",
  },
  {
    icon: Globe2,
    title: "GIRO Direct Debit Collection",
    description:
      "Monthly season parking fees in Singapore are traditionally collected by cheque or cash — an administrative burden for management. Londeo integrates GIRO auto-debit to eliminate manual collection entirely.",
    highlight: "Bank GIRO auto-debit ready",
    color: "#00D4FF",
  },
];

const singaporeStats = [
  { value: "1.1M+", label: "Registered vehicles in Singapore" },
  { value: "4,800+", label: "Public and private car parks" },
  { value: "S$4B+", label: "Annual parking revenue market" },
  { value: "85%", label: "Digital payment adoption rate" },
];

export default function WhySingapore() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-singapore" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-neon-blue/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue mb-4 block">
            Why Singapore
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Built for How Singapore{" "}
            <span className="gradient-text">Actually Parks</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base">
            Singapore parking has unique requirements that generic parking
            software cannot address. Londeo is designed from the ground up
            for the Lion City.
          </p>
        </motion.div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass gradient-border rounded-2xl p-6 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {singaporeStats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-text-blue mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                className="group glass rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-400"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${reason.color}12`, border: `1px solid ${reason.color}25` }}
                >
                  <Icon size={20} style={{ color: reason.color }} />
                </div>

                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed mb-4">
                  {reason.description}
                </p>

                <div className="flex items-center gap-2">
                  <CheckCircle size={12} style={{ color: reason.color }} />
                  <span
                    className="text-[11px] font-semibold"
                    style={{ color: reason.color }}
                  >
                    {reason.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
