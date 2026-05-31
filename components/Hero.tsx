"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-neon-blue/5 blur-[120px]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-neon-purple/5 blur-[100px]" />
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"
        animate={{ y: ["-10vh", "110vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />
      {/* Corner accents */}
      <div className="absolute top-20 left-10 w-32 h-32 border-l border-t border-neon-blue/20 rounded-tl-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-r border-b border-neon-blue/20 rounded-br-xl" />
    </div>
  );
}

function DataStream() {
  const streams = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map((i) => (
        <motion.div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-neon-blue/40 to-transparent"
          style={{ left: `${10 + i * 12}%`, height: "30%" }}
          animate={{ y: ["-30%", "130%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function FloatingCard({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`glass rounded-xl p-3 shadow-card ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <GridBackground />
      <DataStream />

      {/* Floating stat cards */}
      <FloatingCard
        className="absolute top-28 left-8 md:left-20 hidden lg:block"
        delay={1.2}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-white/60 font-mono">Live Occupancy</span>
        </div>
        <div className="text-2xl font-bold neon-text-subtle mt-1">78%</div>
        <div className="text-[10px] text-white/40 mt-1">Suntec City CP — B2</div>
      </FloatingCard>

      <FloatingCard
        className="absolute top-44 right-8 md:right-20 hidden lg:block"
        delay={1.4}
      >
        <div className="text-[10px] text-white/40 font-mono mb-1">Today Revenue</div>
        <div className="text-xl font-bold text-white">S$12,480</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[10px] text-green-400">↑ 14.2%</span>
          <span className="text-[10px] text-white/30">vs yesterday</span>
        </div>
      </FloatingCard>

      <FloatingCard
        className="absolute bottom-32 left-8 md:left-28 hidden lg:block"
        delay={1.6}
      >
        <div className="flex items-center gap-2 mb-2">
          <Shield size={12} className="text-neon-blue" />
          <span className="text-[10px] text-white/40">Payment Methods</span>
        </div>
        <div className="flex gap-2">
          {["NETS", "PayNow", "Visa"].map((m) => (
            <span key={m} className="text-[9px] px-2 py-0.5 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
              {m}
            </span>
          ))}
        </div>
      </FloatingCard>

      <FloatingCard
        className="absolute bottom-32 right-8 md:right-28 hidden lg:block"
        delay={1.8}
      >
        <div className="flex items-center gap-2">
          <Zap size={12} className="text-yellow-400" />
          <span className="text-[10px] text-white/40">LPR Recognition</span>
        </div>
        <div className="text-lg font-bold text-white mt-1">99.4%</div>
        <div className="text-[10px] text-white/30">Accuracy Rate</div>
      </FloatingCard>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-xs font-medium text-neon-blue tracking-wider uppercase">
            Singapore&apos;s Smart Parking OS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="gradient-text">Smart Parking</span>
          <br />
          <span className="text-white">Platform Built</span>
          <br />
          <span className="text-white/50">for Singapore</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Integrated with{" "}
          <span className="text-neon-blue font-medium">NETS</span>,{" "}
          <span className="text-neon-blue font-medium">PayNow</span>, credit
          cards, LPR cameras, barrier gates, LED displays and cloud management
          — all in one unified platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-dark-900 overflow-hidden"
          >
            <div className="absolute inset-0 bg-neon-gradient" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative text-sm">Book a Demo</span>
            <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#features"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white/80 glass border border-white/10 hover:border-neon-blue/30 hover:text-white transition-all duration-300"
          >
            <div className="w-7 h-7 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors">
              <Play size={10} className="text-neon-blue ml-0.5" />
            </div>
            <span className="text-sm">Explore Platform</span>
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-8"
        >
          {[
            { label: "Car Parks Managed", value: "150+" },
            { label: "Monthly Transactions", value: "2M+" },
            { label: "Uptime SLA", value: "99.9%" },
            { label: "Singapore Properties", value: "80+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black gradient-text-blue">{stat.value}</div>
              <div className="text-xs text-white/30 mt-0.5 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  );
}
