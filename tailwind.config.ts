import type { Config } from "tailwindcss";

// 八字配色 — 丙寅年 正月 卯时 · 日主壬水 · 用神丙火 · 新加坡南方火局
// 主色：凤凰红（火·用神）副色：帝王金（金·平衡）点缀：翡翠绿（木·本命）

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#FF4C2B",      // 凤凰红 — 丙火用神（替换冷蓝）
          cyan: "#FFB800",      // 帝王金 — 庚金平衡
          purple: "#00C896",    // 翡翠绿 — 木命本元
          silver: "#F5DEB3",    // 暖麦色 — 温润南洋
        },
        dark: {
          900: "#0A0503",       // 暖黑底色（带红调，火局背景）
          800: "#130806",
          700: "#1C0D08",
          600: "#25120A",
          500: "#2E170C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,76,43,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,76,43,0.05) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,76,43,0.15), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "neon-gradient": "linear-gradient(135deg, #FF4C2B 0%, #FFB800 100%)",   // 火→金
        "silver-gradient": "linear-gradient(135deg, #F5DEB3 0%, #D4A96A 100%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
        "data-flow": "dataFlow 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        dataFlow: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      boxShadow: {
        neon: "0 0 20px rgba(255,76,43,0.35), 0 0 60px rgba(255,76,43,0.12)",
        "neon-strong": "0 0 40px rgba(255,76,43,0.55), 0 0 100px rgba(255,76,43,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        card: "0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderColor: {
        glass: "rgba(255,255,255,0.07)",
        neon: "rgba(255,76,43,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
