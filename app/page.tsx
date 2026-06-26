"use client";

import { useEffect, useState } from "react";

// ─── Inline SVG Icons ───

const ShieldIcon = () => (
  <svg
    className="h-10 w-10 text-blue-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
);

const BoltIcon = () => (
  <svg
    className="h-10 w-10 text-blue-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>
);

const CubeIcon = () => (
  <svg
    className="h-10 w-10 text-blue-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    className="h-10 w-10 text-blue-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>
);

// ─── Feature Card ───

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
      className={`group glass-card p-8 transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 group-hover:border-blue-400/40">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="leading-relaxed text-blue-200/70">{description}</p>
    </div>
  );
};

// ─── Stat Item ───

type StatItemProps = {
  value: string;
  label: string;
};

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center">
    <div className="mb-1 text-4xl font-bold text-white md:text-5xl">
      {value}
    </div>
    <div className="text-xs uppercase tracking-widest text-blue-200/60">
      {label}
    </div>
  </div>
);

// ─── Home Page ───

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── Animated Background ── */}
      <div className="fixed inset-0 -z-10">
        {/* Deep blue gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1025] via-[#111c3a] to-[#0b1a30]" />

        {/* Floating orbs */}
        <div
          className="absolute -left-40 -top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/10 blur-[120px]"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-blue-600/30 to-indigo-500/20 blur-[140px]"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute right-1/4 top-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-br from-sky-400/20 to-blue-700/10 blur-[100px]"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='rgba(255,255,255,0.03)' stroke-width='1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M30 30h30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Navigation ── */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
            <span className="text-sm font-bold text-white">N</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            Nexus
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#"
            className="text-blue-200/70 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#"
            className="text-blue-200/70 transition-colors hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-blue-200/70 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="text-blue-200/70 transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
        <button className="glass-button rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/15">
          Get Started
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-blue-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Now in public beta
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
            Build the future with{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Nexus
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-200/60 md:text-xl">
            A next-generation platform designed for modern teams. Ship faster,
            scale effortlessly, and craft experiences that stand out.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="glass-button-primary rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              Start Building
            </button>
            <button className="glass-button rounded-xl px-8 py-3.5 text-base font-medium text-blue-200 transition-all duration-300 hover:bg-white/10">
              Watch Demo
            </button>
          </div>

          {/* Stats Row */}
          <div className="glass-card mt-16 inline-flex flex-wrap items-center justify-center gap-8 border border-white/10 px-8 py-6 md:gap-16 md:px-16">
            <StatItem value="99.9%" label="Uptime" />
            <div className="hidden h-12 w-px bg-white/10 md:block" />
            <StatItem value="12M+" label="Requests" />
            <div className="hidden h-12 w-px bg-white/10 md:block" />
            <StatItem value="10k+" label="Teams" />
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Everything you need
          </h2>
          <p className="mx-auto max-w-xl text-blue-200/60">
            From real-time collaboration to robust infrastructure — we&apos;ve
            got you covered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<ShieldIcon />}
            title="Enterprise Security"
            description="SOC 2 compliant with end-to-end encryption, audit logs, and granular access controls."
            index={0}
          />
          <FeatureCard
            icon={<BoltIcon />}
            title="Blazing Speed"
            description="Edge-optimized delivery with sub-50ms response times globally. Your users won&apos;t wait."
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
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-32">
        <div className="glass-card-strong rounded-3xl border border-white/10 p-10 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-blue-200/70">
            Join thousands of teams already building with Nexus. Free trial, no
            credit card required.
          </p>
          <button className="glass-button-primary rounded-xl px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-blue-200/40 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-blue-400 to-blue-600">
              <span className="text-[9px] font-bold text-white">N</span>
            </div>
            <span>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-blue-200/60"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-blue-200/60"
            >
              Terms
            </a>
            <a
              href="#"
              className="transition-colors hover:text-blue-200/60"
            >
              Status
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
