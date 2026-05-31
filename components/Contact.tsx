"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    propertyType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/40 to-dark-900 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-blue/4 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue mb-4 block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Modernise{" "}
            <span className="gradient-text">Your Carpark?</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Talk to our Singapore team. We&apos;ll assess your property and
            design a solution that fits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-xl p-6 border border-white/5">
              <h3 className="text-sm font-bold text-white mb-4">Londeo Technology Pte Ltd</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-neon-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/70 leading-relaxed">
                      Singapore
                    </div>
                    <div className="text-[10px] text-white/30 mt-0.5">
                      UEN: Londeo Technology Pte Ltd
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2Icon size={14} className="text-neon-blue flex-shrink-0" />
                  <a
                    href="https://londeoaccess.com.sg"
                    className="text-xs text-neon-blue hover:text-neon-cyan transition-colors"
                  >
                    londeoaccess.com.sg
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 border border-white/5 space-y-3">
              <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-3">
                What Happens Next
              </h4>
              {[
                "We review your property requirements",
                "Site assessment & demo within 3 days",
                "Proposal & implementation timeline",
                "Go-live with our SG support team",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-bold text-neon-blue">{i + 1}</span>
                  </div>
                  <span className="text-xs text-white/50">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass rounded-xl p-10 border border-neon-blue/20 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center">
                  <CheckCircle size={28} className="text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Received</h3>
                <p className="text-white/40 text-sm max-w-xs">
                  Our Singapore team will reach out within 1 business day to arrange your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-xl p-6 border border-white/5 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] text-white/40 uppercase tracking-wide mb-1.5 block">
                      Your Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Tan"
                      className="w-full px-4 py-3 rounded-lg bg-white/4 border border-white/8 text-sm text-white placeholder-white/20 focus:outline-none focus:border-neon-blue/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-white/40 uppercase tracking-wide mb-1.5 block">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@property.com.sg"
                      className="w-full px-4 py-3 rounded-lg bg-white/4 border border-white/8 text-sm text-white placeholder-white/20 focus:outline-none focus:border-neon-blue/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] text-white/40 uppercase tracking-wide mb-1.5 block">
                      Company / Development
                    </label>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Suntec REIT / The Sail"
                      className="w-full px-4 py-3 rounded-lg bg-white/4 border border-white/8 text-sm text-white placeholder-white/20 focus:outline-none focus:border-neon-blue/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-white/40 uppercase tracking-wide mb-1.5 block">
                      Property Type
                    </label>
                    <select
                      value={form.propertyType}
                      onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/8 text-sm text-white/70 focus:outline-none focus:border-neon-blue/40 transition-colors"
                    >
                      <option value="">Select type...</option>
                      <option>Condominium</option>
                      <option>Commercial Building</option>
                      <option>Shopping Mall</option>
                      <option>Office Tower</option>
                      <option>Public Car Park</option>
                      <option>Property Management</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-white/40 uppercase tracking-wide mb-1.5 block">
                    Tell Us About Your Carpark
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Number of lots, current pain points, integration requirements..."
                    className="w-full px-4 py-3 rounded-lg bg-white/4 border border-white/8 text-sm text-white placeholder-white/20 focus:outline-none focus:border-neon-blue/40 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
                    <p className="text-xs text-red-400">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full relative py-3.5 rounded-xl font-semibold text-sm text-dark-900 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-neon-gradient" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book a Demo
                        <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

                <p className="text-[10px] text-white/20 text-center">
                  No commitment. Our Singapore team responds within 1 business day.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Globe2Icon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
