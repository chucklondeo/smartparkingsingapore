"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Lim",
    title: "Facility Manager",
    company: "Marina Bay Residences",
    quote:
      "Season parking renewals used to take our admin team two full days every month. With Londeo, residents renew themselves through the app and GIRO handles the collection. We haven&apos;t touched a cheque in six months.",
    stars: 5,
  },
  {
    name: "Sarah Ng",
    title: "VP Operations",
    company: "Capricorn Property Group",
    quote:
      "We manage 14 developments across Singapore. Before Londeo, our team had to log into 14 different systems. Now it&apos;s one dashboard with consolidated P&L per site. The LPR accuracy is exceptional.",
    stars: 5,
  },
  {
    name: "Raymond Chia",
    title: "Carpark Manager",
    company: "Northpoint City",
    quote:
      "The NETS and PayNow integration was seamless. Transaction reconciliation is automated and we&apos;ve seen a 23% increase in paid transactions since removing cash barriers. Londeo support is quick and local.",
    stars: 5,
  },
];

const logos = [
  "CapitaLand Properties",
  "Frasers Centrepoint",
  "Suntec REIT",
  "CDL Hospitality",
  "OUE Commercial",
  "Keppel REIT",
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/20 mb-6">
            Trusted by Singapore&apos;s Leading Property Groups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {logos.map((logo, i) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                className="text-xs font-semibold text-white/20 hover:text-white/40 transition-colors cursor-default tracking-wide"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass rounded-xl p-6 border border-white/5 flex flex-col"
            >
              <Quote size={20} className="text-neon-blue/30 mb-4" />
              <p className="text-sm text-white/60 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/5 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-white/40 mt-0.5">{t.title}</div>
                    <div className="text-[11px] text-neon-blue/60 mt-0.5">{t.company}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <Star key={si} size={10} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
