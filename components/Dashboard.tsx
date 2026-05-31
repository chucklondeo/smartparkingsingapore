"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Car,
  AlertCircle,
  DollarSign,
  Activity,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  BarChart2,
} from "lucide-react";

function MiniBar({ value, max = 100, color = "#00D4FF" }: { value: number; max?: number; color?: string }) {
  return (
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

function DonutChart({ percentage, color }: { percentage: number; color: string }) {
  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
      <motion.circle
        cx="40"
        cy="40"
        r="30"
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
        filter={`drop-shadow(0 0 8px ${color}60)`}
      />
      <text x="40" y="44" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
        {percentage}%
      </text>
    </svg>
  );
}

const vehicleLogs = [
  { plate: "SBA 1234 A", type: "Season", status: "in", time: "14:32", payment: "Season" },
  { plate: "SGX 5678 B", type: "Visitor", status: "in", time: "14:29", payment: "PayNow" },
  { plate: "SKA 9012 C", type: "Hourly", status: "out", time: "14:25", payment: "NETS" },
  { plate: "SHB 3456 D", type: "Season", status: "in", time: "14:18", payment: "Season" },
  { plate: "SMC 7890 E", type: "Hourly", status: "out", time: "14:10", payment: "Visa" },
];

const siteData = [
  { name: "Marina Bay", occupied: 82, total: 200, revenue: 4820 },
  { name: "Orchard Rd", occupied: 94, total: 350, revenue: 8340 },
  { name: "Jurong East", occupied: 61, total: 180, revenue: 2190 },
  { name: "Tampines", occupied: 73, total: 240, revenue: 3680 },
];

export default function Dashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-blue/4 blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue mb-4 block">
            Control Centre
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Your Parking Empire,{" "}
            <span className="gradient-text">At a Glance</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Real-time revenue, occupancy, vehicle logs and alerts — all in one
            unified cloud dashboard.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="gradient-border glass rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
        >
          {/* Dashboard top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/2">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-white/30 font-mono">londeo.cloud — Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-white/30 font-mono">Live · SG-1</span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="p-5 space-y-4">
            {/* KPI row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Today Revenue", value: "S$12,480", change: "+14.2%", icon: DollarSign, color: "#00D4FF" },
                { label: "Occupancy Rate", value: "78%", change: "+3.1%", icon: Car, color: "#7B61FF" },
                { label: "Transactions", value: "1,284", change: "+9.8%", icon: Activity, color: "#00FFE0" },
                { label: "Active Alerts", value: "2", change: "Low", icon: AlertCircle, color: "#F59E0B" },
              ].map((kpi) => {
                const Icon = kpi.icon;
                return (
                  <div key={kpi.label} className="glass rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-white/40 uppercase tracking-wide">{kpi.label}</span>
                      <Icon size={12} style={{ color: kpi.color }} />
                    </div>
                    <div className="text-xl font-black text-white">{kpi.value}</div>
                    <div className="text-[10px] mt-1" style={{ color: kpi.color }}>
                      {kpi.change}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main content row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Payment method share */}
              <div className="glass rounded-xl p-4 border border-white/5">
                <div className="text-xs font-semibold text-white/60 mb-4 flex items-center gap-2">
                  <BarChart2 size={12} className="text-neon-blue" />
                  Payment Method Share
                </div>
                <div className="space-y-3">
                  {[
                    { method: "NETS", pct: 38, color: "#00D4FF" },
                    { method: "PayNow", pct: 29, color: "#7B61FF" },
                    { method: "Visa/MC", pct: 21, color: "#00FFE0" },
                    { method: "Season", pct: 12, color: "#F59E0B" },
                  ].map((item) => (
                    <div key={item.method}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[11px] text-white/60">{item.method}</span>
                        <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.pct}%</span>
                      </div>
                      <MiniBar value={item.pct} color={item.color} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Occupancy donut */}
              <div className="glass rounded-xl p-4 border border-white/5 flex flex-col items-center justify-center">
                <div className="text-xs font-semibold text-white/60 mb-3 flex items-center gap-2 self-start w-full">
                  <Car size={12} className="text-neon-blue" />
                  Live Occupancy
                </div>
                <DonutChart percentage={78} color="#00D4FF" />
                <div className="mt-3 text-center">
                  <div className="text-xs text-white/40">156 / 200 Bays</div>
                  <div className="text-[10px] text-neon-blue mt-1">44 available</div>
                </div>
              </div>

              {/* Alerts panel */}
              <div className="glass rounded-xl p-4 border border-white/5">
                <div className="text-xs font-semibold text-white/60 mb-3 flex items-center gap-2">
                  <AlertCircle size={12} className="text-yellow-400" />
                  System Alerts
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-yellow-400/5 border border-yellow-400/15">
                    <AlertCircle size={11} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[11px] text-white font-medium">Gate 2 — Slow Response</div>
                      <div className="text-[10px] text-white/30">Orchard Rd · 3 mins ago</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-red-400/5 border border-red-400/15">
                    <XCircle size={11} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[11px] text-white font-medium">Kiosk Offline</div>
                      <div className="text-[10px] text-white/30">Jurong East B1 · 12 mins ago</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-green-400/5 border border-green-400/15">
                    <CheckCircle size={11} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[11px] text-white font-medium">NETS Settlement OK</div>
                      <div className="text-[10px] text-white/30">All sites · Auto-reconciled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Vehicle logs */}
              <div className="glass rounded-xl p-4 border border-white/5">
                <div className="text-xs font-semibold text-white/60 mb-3 flex items-center gap-2">
                  <Clock size={12} className="text-neon-blue" />
                  Vehicle Logs — Live Feed
                </div>
                <div className="space-y-2">
                  {vehicleLogs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className="flex items-center justify-between py-1.5 border-b border-white/4 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${log.status === "in" ? "bg-green-400" : "bg-white/30"}`}
                        />
                        <span className="font-mono text-[11px] text-white font-bold">{log.plate}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded"
                          style={{
                            color: log.payment === "NETS" ? "#00D4FF" : log.payment === "PayNow" ? "#7B61FF" : log.payment === "Season" ? "#F59E0B" : "#00FFE0",
                            background: "rgba(255,255,255,0.04)",
                          }}
                        >
                          {log.payment}
                        </span>
                        <span className="text-[10px] text-white/30 font-mono">{log.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Multi-site map */}
              <div className="glass rounded-xl p-4 border border-white/5">
                <div className="text-xs font-semibold text-white/60 mb-3 flex items-center gap-2">
                  <MapPin size={12} className="text-neon-blue" />
                  Multi-Carpark Overview
                </div>
                <div className="space-y-3">
                  {siteData.map((site, i) => (
                    <motion.div
                      key={site.name}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <MapPin size={10} className="text-neon-blue/60" />
                          <span className="text-[11px] text-white font-medium">{site.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-white/40">{site.occupied}/{site.total}</span>
                          <span className="text-[10px] font-bold text-neon-blue">
                            S${site.revenue.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <MiniBar
                        value={site.occupied}
                        max={site.total}
                        color={site.occupied / site.total > 0.8 ? "#F59E0B" : "#00D4FF"}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
