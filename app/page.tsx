"use client";

import { useEffect, useState } from "react";

// ─── icons as simple SVG components ───

const ShieldIcon = () => (
  <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const CubeIcon = () => (
  <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group glass-card p-8 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-blue-400/40 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-blue-200/70 leading-relaxed">{description}</p>
    </div>
  );
};

type StatItemProps = {
  value: string;
  label: string;
};

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-white mb-1">{value}</div>
    <div className="text-blue-200/60 text-sm uppercase tracking-widest">{label}</div>
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── Animated background ── */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1428] via-[#132044] to-[#0d1f3c]" />

        {/* Animated orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/10 blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }} />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/30 to-indigo-500/20 blur-[140px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-sky-400/20 to-blue-700/10 blur-[100px] animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }} />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>

      {/* ── Navigation ── */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Nexus</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="text-blue-200/70 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-blue-200/70 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-blue-200/70 hover:text-white transition-colors">About</a>
          <a href="#" className="text-blue-200/70 hover:text-white transition-colors">Contact</a>
        </div>
        <button className="glass-button text-sm px-5 py-2.5 rounded-xl text-white font-medium hover:bg-white/15 transition-all duration-300">
          Get Started
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-xs text-blue-200 mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Now in public beta
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white max-w-4xl mx-auto">
            Build the future with{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Nexus
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-200/60 max-w-2xl mx-auto leading-relaxed">
            A next-generation platform designed for modern teams. Ship faster,
            scale effortlessly, and craft experiences that stand out.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="glass-button-primary px-8 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Start Building
            </button>
            <button className="glass-button px-8 py-3.5 rounded-xl text-blue-200 font-medium text-base transition-all duration-300 hover:bg-white/10">
              Watch Demo
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-16 glass-card px-8 md:px-16 py-6 inline-flex flex-wrap items-center justify-center gap-8 md:gap-16 border border-white/10">
            <StatItem value="99.9%" label="Uptime" />
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <StatItem value="12M+" label="Requests" />
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <StatItem value="10k+" label="Teams" />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need
          </h2>
          <p className="text-blue-200/60 max-w-xl mx-auto">
            From real-time collaboration to robust infrastructure — we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<ShieldIcon />}
            title="Enterprise Security"
            description="SOC 2 compliant with end-to-end encryption, audit logs, and granular access controls."
            index={0}
          />
          <FeatureCard
            icon={<BoltIcon />}
            title="Blazing Speed"
            description="Edge-optimized delivery with sub-50ms response times globally. Your users won't wait."
            index={1}
          />
          <FeatureCard
            icon={<CubeIcon />}
            title="Modular by Design"
            description="Composable APIs and pluggable modules so you can build exactly what you need."
            index={2}
          />
          <FeatureCard
            icon={<ChartIcon />}
            title="Real-time Analytics"
            description="Live dashboards with drill-downs, alerts, and exportable reports at your fingertips."
            index={3}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-32">
        <div className="glass-card-strong rounded-3xl p-10 md:p-16 text-center border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-blue-200/70 max-w-lg mx-auto mb-8">
            Join thousands of teams already building with Nexus. Free trial, no credit card required.
          </p>
          <button className="glass-button-primary px-10 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200/40">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-[9px]">N</span>
            </div>
            <span>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-200/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-200/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-200/60 transition-colors">Status</a>
          </div>
        </div>
      </footer>

      {/* ── Global styles via inline style tag ── */}
      <style jsx global>{`
        /* ─── Glassmorphism utilities ─── */
        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .glass-card-strong {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(37, 99, 235, 0.08) 100%);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-radius: 1.75rem;
          border: 1px solid rgba(59, 130, 246, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        }

        .glass-button {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-button-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border: none;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
        }

        .glass-button-primary:hover {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Selection */
        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: white;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #0b1428;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </main>
  );
}
