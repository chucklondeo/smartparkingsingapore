"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  ShoppingBag,
  Landmark,
  Home,
  Car,
  Briefcase,
} from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Condominium Parking",
    description:
      "Manage resident season parking, visitor passes, GIRO billing and multi-zone access for Singapore condominiums. Full integration with building management systems.",
    tags: ["Season Parking", "Visitor Pass", "GIRO Billing", "Resident App"],
    accent: "#FF4C2B",
  },
  {
    icon: Building2,
    title: "Commercial Building Parking",
    description:
      "Multi-tenant parking management with hourly billing, season holder allocation, and real-time occupancy dashboards for office and commercial buildings.",
    tags: ["Multi-Tenant", "Hourly Rate", "Season Allocation", "Analytics"],
    accent: "#00C896",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Mall Parking",
    description:
      "High-volume parking operations with NETS/PayNow kiosks, validation stamps, loyalty integration and dynamic pricing. Built for Singapore retail footfall.",
    tags: ["NETS/PayNow", "Validation", "Dynamic Pricing", "High Volume"],
    accent: "#FFB800",
  },
  {
    icon: Landmark,
    title: "Office Tower Parking",
    description:
      "Corporate season parking, car pool management, EV charging integration and monthly invoicing for Grade A office towers across the Singapore CBD.",
    tags: ["Corporate Season", "EV Charging", "Invoicing", "CBD Ready"],
    accent: "#FF4C2B",
  },
  {
    icon: Car,
    title: "Public Car Park Operators",
    description:
      "LTA-compliant public carpark management with UEN-based season permits, government vehicle concessions, and automated barrier operations.",
    tags: ["LTA Compliant", "UEN Permits", "Barrier Auto", "Government"],
    accent: "#00C896",
  },
  {
    icon: Briefcase,
    title: "Property Management Companies",
    description:
      "Centralised multi-site parking management for property managers overseeing multiple developments across Singapore. Single login, all properties.",
    tags: ["Multi-Site", "Centralised", "Reporting", "White Label"],
    accent: "#FFB800",
  },
];

function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof solutions)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = solution.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group gradient-border glass p-6 rounded-xl hover:shadow-neon transition-all duration-500 cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${solution.accent}15`, border: `1px solid ${solution.accent}30` }}
      >
        <Icon size={22} style={{ color: solution.accent }} />
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
        {solution.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed mb-4">
        {solution.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {solution.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2.5 py-1 rounded-full font-medium tracking-wide"
            style={{
              color: solution.accent,
              background: `${solution.accent}10`,
              border: `1px solid ${solution.accent}20`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="solutions" className="py-28 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-neon-blue/30" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-neon-blue/40 bg-neon-blue/10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue mb-4 block">
            Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Every Parking Scenario,
            <br />
            <span className="gradient-text">Covered</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            From HDB-adjacent condominiums to Grade A office towers — Londeo
            handles the unique parking demands of Singapore&apos;s diverse property landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <SolutionCard key={s.title} solution={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
