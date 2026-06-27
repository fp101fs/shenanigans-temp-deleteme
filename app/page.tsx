"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Inline SVG Icons ───

const ShieldIcon = () => (
  <svg
    className="h-10 w-10 text-red-300"
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
    className="h-10 w-10 text-red-300"
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
    className="h-10 w-10 text-red-300"
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
    className="h-10 w-10 text-red-300"
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

// ─── Floating Particles ───

const Particles = () => {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 8,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle animate-float"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

// ─── Intersection Observer Hook ───

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

// ─── Parallax Background ───

const ParallaxBackground = () => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxX = (mouse.x - 0.5) * 40;
  const parallaxY = (mouse.y - 0.5) * 40;
  const scrollOffset = scroll * 0.15;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0505] via-[#1f0a0a] to-[#120606]" />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 animate-gradient-xy opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Parallax orb 1 — follows mouse */}
      <div
        className="parallax-layer absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-red-500/25 to-orange-400/10 blur-[120px]"
        style={{
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5 - scrollOffset}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Parallax orb 2 — follows mouse opposite direction */}
      <div
        className="parallax-layer absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-red-600/25 to-rose-500/15 blur-[160px]"
        style={{
          transform: `translate(${-parallaxX * 0.3}px, ${-parallaxY * 0.3 + scrollOffset * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Orb 3 — center, drifts */}
      <div
        className="parallax-layer absolute right-1/4 top-1/3 h-[450px] w-[450px] animate-drift rounded-full bg-gradient-to-br from-orange-400/15 to-red-700/10 blur-[110px]"
        style={{
          transform: `translate(${parallaxX * 0.2}px, ${parallaxY * 0.2}px)`,
        }}
      />

      {/* Floating geometric accents */}
      <div
        className="parallax-layer absolute left-[15%] top-[20%] h-32 w-32 animate-float-slow rounded-full border border-red-400/10 blur-sm"
        style={{
          transform: `translate(${parallaxX * 0.1}px, ${parallaxY * 0.1}px)`,
          animationDelay: "1s",
        }}
      />
      <div
        className="parallax-layer absolute right-[20%] top-[60%] h-24 w-24 animate-float-reverse rounded-full border border-orange-400/10 blur-sm"
        style={{
          transform: `translate(${parallaxX * 0.15}px, ${parallaxY * 0.15}px)`,
          animationDelay: "2s",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='rgba(255,255,255,0.02)' stroke-width='1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M30 30h30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

// ─── 3D Tilt Card ───

const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {children}
    </div>
  );
};

// ─── Feature Card ───

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const [ref, visible] = useReveal(0.1);

  return (
    <div ref={ref}>
      <TiltCard>
        <div
          className={`group glass-card p-8 transition-all duration-700 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-red-400/40 group-hover:bg-red-400/10 group-hover:shadow-lg group-hover:shadow-red-500/10">
            <div className="transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-red-200">
            {title}
          </h3>
          <p className="leading-relaxed text-red-200/70 transition-colors duration-300 group-hover:text-red-200/90">
            {description}
          </p>
        </div>
      </TiltCard>
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
    <div className="mb-1 text-4xl font-bold text-white md:text-5xl">{value}</div>
    <div className="text-xs uppercase tracking-widest text-red-200/60">
      {label}
    </div>
  </div>
);

// ─── Navigation ───

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0505]/80 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/20">
            <span className="text-sm font-bold text-white">N</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            Nexus
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#features"
            className="text-red-200/70 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
          >
            Features
          </a>
          <a
            href="#"
            className="text-red-200/70 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-red-200/70 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
          >
            About
          </a>
          <a
            href="#"
            className="text-red-200/70 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
          >
            Contact
          </a>
        </div>
        <button className="glass-button rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/15">
          Get Started
        </button>
      </div>
    </nav>
  );
};

// ─── Shimmer Text ───

const ShimmerText = ({ text }: { text: string }) => (
  <span
    className="bg-gradient-to-r from-red-200 via-red-400 to-orange-300 bg-clip-text text-transparent"
    style={{
      backgroundSize: "200% 100%",
      animation: "shimmer 4s ease-in-out infinite",
    }}
  >
    {text}
  </span>
);

// ─── Cursor Glow ───

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden transition-opacity duration-300 md:block"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        width: 300,
        height: 300,
        background:
          "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
};

// ─── Home Page ───

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroVisible] = useReveal(0.01);
  const [statsRef, statsVisible] = useReveal(0.3);
  const [ctaRef, ctaVisible] = useReveal(0.2);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <Particles />
      <ParallaxBackground />
      <Navigation />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-28 text-center md:pb-24 md:pt-32"
      >
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-red-200 shadow-lg shadow-red-500/5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-400 shadow-lg shadow-red-400/50" />
            Now in public beta
            <span className="ml-1 text-red-400/60">✦</span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-tight text-white sm:text-6xl md:text-8xl">
            Build the future with{" "}
            <span className="inline-block">
              <ShimmerText text="Nexus" />
            </span>
          </h1>

          {/* Gradient underline accent */}
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-orange-400" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-red-200/60 md:text-xl">
            A next-generation platform designed for modern teams. Ship faster,
            scale effortlessly, and craft experiences that stand out.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="glass-button-primary group relative rounded-xl px-8 py-3.5 text-base font-semibold text-white">
              <span className="relative z-10">Start Building</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <button className="glass-button group relative rounded-xl px-8 py-3.5 text-base font-medium text-red-200 transition-all duration-300 hover:bg-white/10">
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </span>
            </button>
          </div>

          {/* Stats Row */}
          <div
            ref={statsRef}
            className={`glass-card mt-16 inline-flex flex-wrap items-center justify-center gap-8 border border-white/10 px-8 py-6 transition-all duration-700 delay-300 md:gap-16 md:px-16 ${
              statsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <StatItem value="99.9%" label="Uptime" />
            <div className="hidden h-12 w-px bg-white/10 md:block" />
            <StatItem value="12M+" label="Requests" />
            <div className="hidden h-12 w-px bg-white/10 md:block" />
            <StatItem value="10k+" label="Teams" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-red-200/40">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent" />
      </div>

      {/* ── Features ── */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-20">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-red-400/20 bg-red-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-red-300">
            Features
          </span>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Everything you need
          </h2>
          <p className="mx-auto max-w-xl text-lg text-red-200/60">
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

        {/* Feature highlight strip */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { label: "99.9% Uptime SLA", desc: "Guaranteed reliability you can count on." },
            { label: "Global Edge Network", desc: "Deployed across 30+ regions worldwide." },
            { label: "24/7 Support", desc: "Expert help whenever you need it, day or night." },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-red-400/15 hover:bg-white/[0.04]"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-400/10">
                <svg className="h-3 w-3 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-white">{item.label}</div>
                <div className="mt-0.5 text-xs text-red-200/50">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent" />
      </div>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        className="relative z-10 mx-auto max-w-4xl px-6 pb-32 pt-20"
      >
        <div
          className={`glass-card-strong relative overflow-hidden rounded-3xl border border-white/10 p-10 text-center transition-all duration-700 md:p-16 ${
            ctaVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Glow effect */}
          <div className="pointer-events-none absolute -inset-20 -z-10 bg-gradient-radial from-red-500/5 to-transparent blur-3xl" />

          <span className="mb-4 inline-block rounded-full border border-red-400/20 bg-red-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-red-300">
            Get Started
          </span>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Ready to build?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-red-200/70">
            Join thousands of teams already building with Nexus. Free trial, no
            credit card required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="glass-button-primary group relative rounded-xl px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-red-500/20">
              <span className="relative z-10">Start Free Trial</span>
            </button>
            <button className="glass-button rounded-xl px-10 py-4 text-base font-medium text-red-200 transition-all duration-300 hover:bg-white/10">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-sm text-red-200/40 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-red-400 to-red-600 shadow-md shadow-red-500/10">
              <span className="text-[10px] font-bold text-white">N</span>
            </div>
            <span className="text-red-200/50">
              &copy; {new Date().getFullYear()} Nexus. All rights reserved.
            </span>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="transition-all duration-300 hover:text-red-200/70 hover:drop-shadow-[0_0_4px_rgba(239,68,68,0.3)]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-red-200/70 hover:drop-shadow-[0_0_4px_rgba(239,68,68,0.3)]"
            >
              Terms
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-red-200/70 hover:drop-shadow-[0_0_4px_rgba(239,68,68,0.3)]"
            >
              Status
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-red-200/70 hover:drop-shadow-[0_0_4px_rgba(239,68,68,0.3)]"
            >
              Docs
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}