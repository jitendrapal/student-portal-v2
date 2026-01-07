/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Ultra Modern Primary - Electric Blue to Neon Purple
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Main primary - Electric Blue
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        // Modern Secondary - Neon Green to Teal
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6", // Main secondary - Modern Teal
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        // Ultra Modern Accent - Electric Purple to Pink
        accent: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef", // Main accent - Electric Purple
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e",
        },
        // Ultra Modern Grays - Neutral with blue undertones
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Electric Neon Colors - Ultra Vibrant
        neon: {
          blue: "#00f0ff",
          purple: "#a855f7",
          pink: "#f472b6",
          green: "#22d3ee",
          yellow: "#fbbf24",
          orange: "#fb923c",
          red: "#f87171",
          cyan: "#06b6d4",
        },
        // Vibrant Text Colors
        vibrant: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          pink: "#ec4899",
          green: "#10b981",
          yellow: "#eab308",
          orange: "#f97316",
          red: "#ef4444",
          cyan: "#06b6d4",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #00f0ff 0%, #a855f7 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #22d3ee 0%, #10b981 100%)",
        "gradient-accent": "linear-gradient(135deg, #d946ef 0%, #f472b6 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #00f0ff 0%, #a855f7 50%, #d946ef 100%)",
        "gradient-card": "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
        "gradient-neon":
          "linear-gradient(135deg, #00f0ff 0%, #a855f7 50%, #f472b6 100%)",
        "gradient-electric":
          "linear-gradient(45deg, #00f0ff, #a855f7, #d946ef, #f472b6)",
        "gradient-cyber": "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        "gradient-vibrant":
          "linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #f472b6 100%)",
      },
      boxShadow: {
        modern:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "modern-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "modern-xl":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        glow: "0 0 40px rgba(0, 240, 255, 0.8)",
        "glow-secondary": "0 0 40px rgba(34, 211, 238, 0.8)",
        "glow-accent": "0 0 40px rgba(244, 114, 182, 0.8)",
        "glow-neon": "0 0 50px rgba(0, 240, 255, 1)",
        cyber:
          "0 0 50px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        electric:
          "0 0 60px rgba(14, 165, 233, 0.4), 0 0 100px rgba(139, 92, 246, 0.2)",
      },
      borderRadius: {
        modern: "12px",
        "modern-lg": "16px",
        "modern-xl": "20px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
