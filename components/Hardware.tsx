"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Camera,
  BarChart2,
  MonitorPlay,
  CreditCard,
  Phone,
  Shield,
  Cpu,
  ArrowRight,
  Check,
} from "lucide-react";

const hardwareProducts = [
  {
    icon: Camera,
    name: "LPR Camera",
    model: "LD-LPR-4K",
    description:
      "4K AI-powered licence plate recognition camera with infrared night vision. Reads plates in motion up to 60km/h with 99.4% accuracy in Singapore conditions including wet weather.",
    specs: ["4K Resolution", "IR Night Vision", "IP67 Weatherproof", "PoE Powered", "Edge AI Processing"],
    color: "#00D4FF",
    visual: "camera",
  },
  {
    icon: BarChart2,
    name: "Barrier Gate",
    model: "LD-GATE-PRO",
    description:
      "High-speed boom barrier with 0.9-second opening time. Anti-crash detection, vehicle loop sensors and remote management via Londeo cloud platform.",
    specs: ["0.9s Open Speed", "Anti-Crash Sensor", "Loop Detector", "Remote Control", "LED Arm Status"],
    color: "#7B61FF",
    visual: "gate",
  },
  {
    icon: MonitorPlay,
    name: "LED Guidance Display",
    model: "LD-LED-V3",
    description:
      "Full-colour LED parking guidance displays for lot availability, directional arrows and promotional content. Managed centrally via Londeo CMS.",
    specs: ["Full Colour LED", "Real-Time Count", "Directional Arrows", "Cloud CMS", "Multi-Zone"],
    color: "#00FFE0",
    visual: "led",
  },
  {
    icon: CreditCard,
    name: "Payment Kiosk",
    model: "LD-KIOSK-SG",
    description:
      "Singapore-certified payment kiosk supporting NETS, PayNow QR, Visa/Mastercard contactless, Apple Pay and Google Pay. Thermal receipt printer included.",
    specs: ["NETS Certified", "PayNow QR", "Contactless NFC", "Thermal Printer", "24/7 Operation"],
    color: "#F59E0B",
    visual: "kiosk",
  },
  {
    icon: Phone,
    name: "IP Intercom",
    model: "LD-INTERCOM-IP",
    description:
      "Two-way video/audio IP intercom for entry/exit points. Full HD camera, tamper-proof housing and integration with security control room.",
    specs: ["Full HD Video", "Two-Way Audio", "PoE Powered", "Tamper Alarm", "SIP Protocol"],
    color: "#EC4899",
    visual: "intercom",
  },
  {
    icon: Shield,
    name: "Access Controller",
    model: "LD-AC-NET",
    description:
      "Multi-door access control unit supporting RFID, PIN, mobile credentials and licence plate. Integrates with visitor management and season permit database.",
    specs: ["RFID / PIN", "Mobile Credential", "LPR Trigger", "Multi-Door", "Fail-Safe Lock"],
    color: "#00D4FF",
    visual: "access",
  },
  {
    icon: Cpu,
    name: "Edge Controller",
    model: "LD-EDGE-X1",
    description:
      "Industrial-grade edge computing unit installed on-site. Ensures zero-downtime operation during network outages. Processes LPR, payment and barrier control locally.",
    specs: ["Offline Operation", "Local Storage", "Auto Sync", "Fanless Design", "DIN Rail Mount"],
    color: "#7B61FF",
    visual: "edge",
  },
];

function HardwareVisual({ type, color }: { type: string; color: string }) {
  const shapes: Record<string, JSX.Element> = {
    camera: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="15" y="25" width="50" height="35" rx="4" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <circle cx="40" cy="42" r="10" fill="none" stroke={color} strokeWidth="1.5" opacity="0.8" />
        <circle cx="40" cy="42" r="5" fill={color} opacity="0.4" />
        <rect x="55" y="30" width="8" height="6" rx="1" fill={color} opacity="0.5" />
        <line x1="30" y1="25" x2="30" y2="20" stroke={color} strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="25" x2="50" y2="20" stroke={color} strokeWidth="1" opacity="0.4" />
        <circle cx="40" cy="42" r="14" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
      </svg>
    ),
    gate: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="10" y="30" width="8" height="40" rx="2" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="62" y="30" width="8" height="40" rx="2" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <line x1="18" y1="38" x2="62" y2="38" stroke={color} strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />
        <rect x="14" y="26" width="16" height="8" rx="2" fill={color} opacity="0.2" stroke={color} strokeWidth="0.5" />
        <line x1="18" y1="50" x2="62" y2="50" stroke={color} strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />
      </svg>
    ),
    led: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="10" y="20" width="60" height="35" rx="3" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="14" y="24" width="52" height="27" rx="2" fill={color} opacity="0.05" />
        <text x="22" y="38" fill={color} fontSize="10" fontWeight="bold" opacity="0.8">P1</text>
        <text x="38" y="38" fill={color} fontSize="10" opacity="0.5">↑</text>
        <text x="52" y="38" fill={color} fontSize="10" opacity="0.5">42</text>
        <rect x="14" y="42" width="52" height="5" rx="1" fill={color} opacity="0.15" />
        <line x1="35" y1="55" x2="45" y2="55" stroke={color} strokeWidth="1.5" opacity="0.4" />
        <rect x="30" y="55" width="20" height="6" rx="1" fill={color} opacity="0.2" />
      </svg>
    ),
    kiosk: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="25" y="10" width="30" height="60" rx="4" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="28" y="14" width="24" height="18" rx="2" fill={color} opacity="0.1" stroke={color} strokeWidth="0.5" />
        <rect x="30" y="35" width="20" height="12" rx="2" fill={color} opacity="0.05" stroke={color} strokeWidth="0.5" />
        <circle cx="40" cy="41" r="4" fill="none" stroke={color} strokeWidth="1" opacity="0.6" />
        <rect x="30" y="52" width="8" height="5" rx="1" fill={color} opacity="0.3" />
        <rect x="42" y="52" width="8" height="5" rx="1" fill={color} opacity="0.3" />
        <line x1="25" y1="65" x2="55" y2="65" stroke={color} strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    intercom: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="20" y="15" width="40" height="55" rx="5" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="24" y="19" width="32" height="22" rx="2" fill={color} opacity="0.08" stroke={color} strokeWidth="0.5" />
        <circle cx="40" cy="30" r="6" fill="none" stroke={color} strokeWidth="1" opacity="0.7" />
        <rect x="28" y="46" width="10" height="4" rx="1" fill={color} opacity="0.4" />
        <rect x="42" y="46" width="10" height="4" rx="1" fill={color} opacity="0.4" />
        <rect x="28" y="54" width="24" height="4" rx="2" fill={color} opacity="0.2" />
        <circle cx="40" cy="64" r="3" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    access: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="15" y="15" width="50" height="55" rx="5" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <circle cx="40" cy="32" r="8" fill="none" stroke={color} strokeWidth="1.5" opacity="0.8" />
        <path d="M33 32 Q33 24 40 24 Q47 24 47 32" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="36" y="31" width="8" height="10" rx="2" fill={color} opacity="0.3" />
        <line x1="40" y1="39" x2="40" y2="42" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="22" y="48" width="12" height="8" rx="1" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" />
        <rect x="38" y="48" width="12" height="8" rx="1" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" />
      </svg>
    ),
    edge: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <rect x="15" y="20" width="50" height="40" rx="3" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="18" y="23" width="18" height="14" rx="1" fill={color} opacity="0.1" stroke={color} strokeWidth="0.5" />
        <rect x="40" y="23" width="22" height="14" rx="1" fill={color} opacity="0.05" stroke={color} strokeWidth="0.5" />
        <rect x="18" y="41" width="44" height="8" rx="1" fill={color} opacity="0.05" stroke={color} strokeWidth="0.5" />
        {[22, 30, 38, 46, 54].map((x) => (
          <circle key={x} cx={x} cy={45} r="1.5" fill={color} opacity="0.5" />
        ))}
        <line x1="15" y1="60" x2="65" y2="60" stroke={color} strokeWidth="0.5" opacity="0.3" />
        <rect x="30" y="60" width="20" height="4" rx="1" fill={color} opacity="0.2" />
      </svg>
    ),
  };
  return shapes[type] || shapes.camera;
}

export default function Hardware() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hardware" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue mb-4 block">
            Hardware Integration
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Software Meets{" "}
            <span className="gradient-text">Steel</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Londeo hardware is designed and tested for Singapore&apos;s tropical
            climate — IP67 rated, cloud-managed, and purpose-built for 24/7
            carpark operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {hardwareProducts.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group glass gradient-border rounded-xl p-5 hover:shadow-neon transition-all duration-500 flex flex-col"
              >
                {/* Visual + Icon */}
                <div
                  className="flex items-center justify-center w-full h-20 mb-4 rounded-lg"
                  style={{ background: `${product.color}08` }}
                >
                  <HardwareVisual type={product.visual} color={product.color} />
                </div>

                {/* Name + Model */}
                <div className="mb-3">
                  <div
                    className="text-[10px] font-mono mb-1"
                    style={{ color: `${product.color}80` }}
                  >
                    {product.model}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-neon-blue transition-colors">
                    {product.name}
                  </h3>
                </div>

                <p className="text-xs text-white/40 leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="space-y-1.5">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2">
                      <Check size={10} style={{ color: product.color }} className="flex-shrink-0" />
                      <span className="text-[11px] text-white/50">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="mt-4 w-full py-2 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1 group/btn"
                  style={{
                    color: product.color,
                    background: `${product.color}10`,
                    border: `1px solid ${product.color}20`,
                  }}
                >
                  View Specs
                  <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/30 text-sm mb-4">
            All hardware is supplied, installed and maintained by{" "}
            <span className="text-white/60">Londeo Technology Pte Ltd</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-neon-blue/20 text-sm font-semibold text-neon-blue hover:bg-neon-blue/5 transition-all"
          >
            Request Hardware Catalogue
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
