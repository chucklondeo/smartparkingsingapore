"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Platform: [
    { label: "Season Parking", href: "#features" },
    { label: "Visitor Management", href: "#features" },
    { label: "Payment Integration", href: "#features" },
    { label: "LPR Recognition", href: "#features" },
    { label: "Multi-Site Dashboard", href: "#features" },
  ],
  Solutions: [
    { label: "Condominium", href: "#solutions" },
    { label: "Commercial Building", href: "#solutions" },
    { label: "Shopping Mall", href: "#solutions" },
    { label: "Office Tower", href: "#solutions" },
    { label: "Property Management", href: "#solutions" },
  ],
  Hardware: [
    { label: "LPR Camera", href: "#hardware" },
    { label: "Barrier Gate", href: "#hardware" },
    { label: "Payment Kiosk", href: "#hardware" },
    { label: "LED Display", href: "#hardware" },
    { label: "Edge Controller", href: "#hardware" },
  ],
  Company: [
    { label: "About Londeo", href: "#" },
    { label: "Why Singapore", href: "#why-singapore" },
    { label: "Book a Demo", href: "#contact" },
    { label: "londeoaccess.com.sg", href: "https://londeoaccess.com.sg" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-neon-gradient opacity-80" />
                <div className="absolute inset-[2px] rounded-[6px] bg-dark-800 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-neon-blue" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-wider text-white">LONDEO</span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-neon-blue/70">
                  SMART PARKING
                </span>
              </div>
            </div>
            <p className="text-xs text-white/30 leading-relaxed mb-4">
              Singapore&apos;s end-to-end smart parking platform. Software,
              hardware and local payment — all in one.
            </p>
            <div className="text-[10px] text-white/20 space-y-1">
              <div>Londeo Technology Pte Ltd</div>
              <div>Registered in Singapore</div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-white/40 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment badges */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <p className="text-[10px] text-white/20 mb-3 uppercase tracking-wide">Certified Payment Integrations</p>
          <div className="flex flex-wrap gap-2">
            {["NETS", "PayNow", "Visa", "Mastercard", "Apple Pay", "Google Pay", "GIRO"].map((p) => (
              <span
                key={p}
                className="px-3 py-1 rounded-full text-[10px] font-medium text-white/40 glass border border-white/8"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} Londeo Technology Pte Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">
              SLA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
