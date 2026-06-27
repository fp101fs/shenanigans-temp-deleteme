"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Inline SVG Icons ───

const UserIcon = () => (
  <svg className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>
);

const BellIcon = () => (
  <svg className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const KeyIcon = () => (
  <svg className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1.005.43-1.563A6 6 0 1121.75 8.25z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="h-5 w-5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CopyIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
);

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
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0505] via-[#1f0a0a] to-[#120606]" />
      <div
        className="absolute inset-0 animate-gradient-xy opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="parallax-layer absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-red-500/25 to-orange-400/10 blur-[120px]"
        style={{
          transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5 - scrollOffset}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="parallax-layer absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-red-600/25 to-rose-500/15 blur-[160px]"
        style={{
          transform: `translate(${-parallaxX * 0.3}px, ${-parallaxY * 0.3 + scrollOffset * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='rgba(255,255,255,0.02)' stroke-width='1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M30 30h30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

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
        background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
};

// ─── Floating Particles ───

const Particles = () => {
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 8,
    opacity: Math.random() * 0.3 + 0.1,
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
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/20">
              <span className="text-sm font-bold text-white">N</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Nexus
            </span>
          </a>
          <span className="hidden text-sm text-red-200/30 md:inline">/</span>
          <span className="hidden text-sm font-medium text-red-200/60 md:inline">
            My Account
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="glass-button inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-red-200 transition-all duration-300 hover:bg-white/10"
          >
            <ArrowLeftIcon />
            Back to Home
          </a>
        </div>
      </div>
    </nav>
  );
};

// ─── Input Field ───

const InputField = ({
  label,
  value,
  placeholder,
  disabled = false,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}) => (
  <div>
    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-red-200/60">
      {label}
    </label>
    <input
      type="text"
      defaultValue={value}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-red-200/30 backdrop-blur-sm transition-all duration-300 focus:border-red-400/40 focus:outline-none focus:ring-1 focus:ring-red-400/20 disabled:cursor-not-allowed disabled:opacity-50"
    />
  </div>
);

// ─── Toggle ───

const Toggle = ({ label, description, defaultChecked = false }: { label: string; description?: string; defaultChecked?: boolean }) => {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-sm font-medium text-white">{label}</div>
        {description && <div className="mt-0.5 text-xs text-red-200/50">{description}</div>}
      </div>
      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 ${
          enabled ? "bg-red-500" : "bg-white/10"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

// ─── Activity Item ───

type ActivityItemProps = {
  action: string;
  detail: string;
  time: string;
};

const ActivityItem = ({ action, detail, time }: ActivityItemProps) => (
  <div className="flex items-start gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-400/10">
      <div className="h-2 w-2 rounded-full bg-red-400" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-sm font-medium text-white truncate">{action}</div>
      <div className="mt-0.5 text-xs text-red-200/50 truncate">{detail}</div>
    </div>
    <div className="shrink-0 text-xs text-red-200/40">{time}</div>
  </div>
);

// ─── Tab Navigation ───

const tabs = [
  { id: "profile", label: "Profile", icon: <UserIcon /> },
  { id: "security", label: "Security", icon: <ShieldIcon /> },
  { id: "billing", label: "Billing", icon: <CreditCardIcon /> },
  { id: "notifications", label: "Notifications", icon: <BellIcon /> },
  { id: "api", label: "API Keys", icon: <KeyIcon /> },
];

// ─── Profile Tab ───

const ProfileTab = () => (
  <div className="space-y-8">
    {/* Avatar & basic info */}
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-red-400/20 to-red-600/20 backdrop-blur-sm">
        <span className="text-4xl font-bold text-red-400">J</span>
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold text-white">Jamie Chen</h2>
        <p className="mt-1 text-sm text-red-200/60">jamie@acmecorp.com</p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-xs font-medium text-green-300">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Active
        </div>
      </div>
    </div>

    {/* Profile form */}
    <div className="grid gap-6 md:grid-cols-2">
      <InputField label="First Name" value="Jamie" />
      <InputField label="Last Name" value="Chen" />
      <InputField label="Email" value="jamie@acmecorp.com" />
      <InputField label="Phone" value="+1 (555) 234-5678" />
      <div className="md:col-span-2">
        <InputField label="Company" value="Acme Corp" />
      </div>
      <div className="md:col-span-2">
        <InputField label="Time Zone" value="America/Los_Angeles (UTC-8)" />
      </div>
    </div>

    <div className="flex gap-3">
      <button className="glass-button-primary rounded-xl px-6 py-2.5 text-sm font-medium text-white">
        Save Changes
      </button>
      <button className="glass-button rounded-xl px-6 py-2.5 text-sm font-medium text-red-200 transition-all duration-300 hover:bg-white/10">
        Cancel
      </button>
    </div>

    {/* Danger zone */}
    <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-6">
      <h3 className="text-sm font-semibold text-red-300">Danger Zone</h3>
      <p className="mt-1 text-xs text-red-200/50">
        Deleting your account is permanent and cannot be undone.
      </p>
      <button className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-5 py-2 text-sm font-medium text-red-300 transition-all duration-300 hover:bg-red-400/20">
        Delete Account
      </button>
    </div>
  </div>
);

// ─── Security Tab ───

const SecurityTab = () => (
  <div className="space-y-8">
    {/* Password */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">Password</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <InputField label="Current Password" placeholder="Enter current password" />
        <div />
        <InputField label="New Password" placeholder="Enter new password" />
        <InputField label="Confirm Password" placeholder="Confirm new password" />
      </div>
      <button className="mt-4 glass-button-primary rounded-xl px-6 py-2.5 text-sm font-medium text-white">
        Update Password
      </button>
    </div>

    {/* Two-factor */}
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-white">Two-Factor Authentication</h3>
          <p className="mt-1 text-xs text-red-200/50">
            Add an extra layer of security to your account by enabling 2FA.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 text-xs font-medium text-green-300">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Enabled
        </div>
      </div>
      <button className="mt-4 glass-button rounded-xl px-5 py-2 text-sm font-medium text-red-200 transition-all duration-300 hover:bg-white/10">
        Configure 2FA
      </button>
    </div>

    {/* Active sessions */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">Active Sessions</h3>
      <div className="space-y-3">
        {[
          { device: "MacBook Pro — Chrome 125", location: "San Francisco, CA", ip: "192.168.1.42", current: true },
          { device: "iPhone 15 — Safari", location: "San Francisco, CA", ip: "192.168.1.42", current: false },
          { device: "Windows PC — Firefox 126", location: "Austin, TX", ip: "10.0.0.15", current: false },
        ].map((session) => (
          <div
            key={session.device}
            className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white truncate">{session.device}</span>
                {session.current && (
                  <span className="shrink-0 rounded-full bg-red-400/10 px-2 py-0.5 text-[10px] font-medium text-red-300">
                    Current
                  </span>
                )}
              </div>
              <div className="mt-0.5 text-xs text-red-200/50">{session.location} · {session.ip}</div>
            </div>
            {!session.current && (
              <button className="shrink-0 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-red-200/60 transition-all duration-300 hover:bg-white/10 hover:text-red-200">
                Revoke
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Billing Tab ───

const BillingTab = () => (
  <div className="space-y-8">
    {/* Current plan */}
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-red-200/40">Current Plan</div>
          <h3 className="mt-1 text-2xl font-bold text-white">Pro</h3>
          <p className="mt-1 text-sm text-red-200/60">$29 / month — Next billing date: Aug 14, 2025</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/5 px-4 py-1.5 text-xs font-medium text-red-300">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          Active
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button className="glass-button-primary rounded-xl px-5 py-2 text-sm font-medium text-white">
          Upgrade Plan
        </button>
        <button className="glass-button rounded-xl px-5 py-2 text-sm font-medium text-red-200 transition-all duration-300 hover:bg-white/10">
          Change Plan
        </button>
      </div>
    </div>

    {/* Payment method */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">Payment Method</h3>
      <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
        <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white">
          VISA
        </div>
        <div>
          <div className="text-sm font-medium text-white">Visa ending in 4242</div>
          <div className="text-xs text-red-200/50">Expires 12/2026</div>
        </div>
        <button className="ml-auto rounded-lg border border-white/10 px-3 py-1.5 text-xs text-red-200/60 transition-all duration-300 hover:bg-white/10 hover:text-red-200">
          Update
        </button>
      </div>
    </div>

    {/* Billing history */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">Billing History</h3>
      <div className="overflow-hidden rounded-xl border border-white/5">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="px-4 py-3 font-medium text-red-200/60">Date</th>
              <th className="px-4 py-3 font-medium text-red-200/60">Amount</th>
              <th className="px-4 py-3 font-medium text-red-200/60">Status</th>
              <th className="px-4 py-3 text-right font-medium text-red-200/60">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "Jul 14, 2025", amount: "$29.00", status: "Paid" },
              { date: "Jun 14, 2025", amount: "$29.00", status: "Paid" },
              { date: "May 14, 2025", amount: "$29.00", status: "Paid" },
              { date: "Apr 14, 2025", amount: "$29.00", status: "Paid" },
            ].map((invoice) => (
              <tr key={invoice.date} className="border-b border-white/5 last:border-0">
                <td className="px-4 py-3 text-white">{invoice.date}</td>
                <td className="px-4 py-3 text-white">{invoice.amount}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-xs text-green-300">
                    <CheckIcon />
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-xs text-red-400 transition-colors hover:text-red-300">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// ─── Notifications Tab ───

const NotificationsTab = () => (
  <div className="space-y-8">
    {/* Email notifications */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">Email Notifications</h3>
      <div className="space-y-5 rounded-xl border border-white/5 bg-white/[0.02] p-6">
        <Toggle
          label="Weekly Digest"
          description="Receive a weekly summary of your account activity."
          defaultChecked
        />
        <Toggle
          label="Product Updates"
          description="Get notified about new features and improvements."
          defaultChecked
        />
        <Toggle
          label="Security Alerts"
          description="Immediate notifications for any security-related events."
          defaultChecked
        />
        <Toggle
          label="Billing Notifications"
          description="Invoices, payment confirmations, and plan changes."
          defaultChecked
        />
        <Toggle
          label="Marketing Emails"
          description="Tips, case studies, and promotional content."
        />
      </div>
    </div>

    {/* Push notifications */}
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">Push Notifications</h3>
      <div className="space-y-5 rounded-xl border border-white/5 bg-white/[0.02] p-6">
        <Toggle
          label="Comments & Mentions"
          description="When someone comments on your project or mentions you."
          defaultChecked
        />
        <Toggle
          label="Deployments"
          description="When a deployment succeeds or fails."
          defaultChecked
        />
        <Toggle
          label="Usage Alerts"
          description="When you approach usage limits or thresholds."
          defaultChecked
        />
        <Toggle
          label="Team Invitations"
          description="When you are invited to a new team or project."
          defaultChecked
        />
      </div>
    </div>

    <button className="glass-button-primary rounded-xl px-6 py-2.5 text-sm font-medium text-white">
      Save Preferences
    </button>
  </div>
);

// ─── API Keys Tab ───

const ApiKeysTab = () => (
  <div className="space-y-8">
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">API Keys</h3>
          <p className="mt-1 text-sm text-red-200/50">
            Manage your API keys for programmatic access. Keep your keys secure and never share them.
          </p>
        </div>
        <button className="glass-button-primary shrink-0 rounded-xl px-5 py-2.5 text-sm font-medium text-white">
          + Create Key
        </button>
      </div>
    </div>

    <div className="space-y-3">
      {[
        { name: "Production", key: "nx_prod_8a7b...c3d2", created: "Jun 1, 2025", lastUsed: "2 minutes ago" },
        { name: "Staging", key: "nx_stag_4e5f...g1h0", created: "May 20, 2025", lastUsed: "1 hour ago" },
        { name: "Development", key: "nx_dev_2b3c...d4e5", created: "Apr 10, 2025", lastUsed: "3 days ago" },
      ].map((apiKey) => (
        <div
          key={apiKey.key}
          className="flex flex-col gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white">{apiKey.name}</span>
              <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] text-red-200/50">
                {apiKey.key}
              </span>
            </div>
            <div className="mt-0.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-red-200/40">
              <span>Created: {apiKey.created}</span>
              <span>Last used: {apiKey.lastUsed}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-red-200/60 transition-all duration-300 hover:bg-white/10 hover:text-red-200">
              <CopyIcon />
            </button>
            <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-red-200/60 transition-all duration-300 hover:bg-white/10 hover:text-red-200">
              Revoke
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Recent Activity ───

const RecentActivity = () => (
  <div>
    <h3 className="mb-4 text-lg font-semibold text-white">Recent Activity</h3>
    <div className="space-y-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
      <ActivityItem
        action="Profile updated"
        detail="Changed profile picture and display name"
        time="2h ago"
      />
      <ActivityItem
        action="New login detected"
        detail="Signed in from Chrome on macOS — San Francisco, CA"
        time="5h ago"
      />
      <ActivityItem
        action="Password changed"
        detail="Account password was successfully updated"
        time="1d ago"
      />
      <ActivityItem
        action="Plan upgraded"
        detail="Upgraded from Free to Pro plan"
        time="3d ago"
      />
      <ActivityItem
        action="API key created"
        detail="New production API key was generated"
        time="1w ago"
      />
    </div>
  </div>
);

// ─── Account Page Component ───

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab />;
      case "security":
        return <SecurityTab />;
      case "billing":
        return <BillingTab />;
      case "notifications":
        return <NotificationsTab />;
      case "api":
        return <ApiKeysTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <CursorGlow />
      <Particles />
      <ParallaxBackground />
      <Navigation />

      {/* ── Page Content ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-28 md:pt-36">
        {/* Header */}
        <div
          className={`transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-red-300">
            Account
          </div>
          <h1 className="text-4xl font-bold text-white md:text-5xl">My Account</h1>
          <p className="mt-3 max-w-2xl text-lg text-red-200/60">
            Manage your profile, security settings, billing, and more.
          </p>
        </div>

        {/* Layout: Tabs + Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-4">
          {/* Sidebar tabs */}
          <div
            className={`transition-all duration-700 delay-100 ease-out lg:col-span-1 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <nav className="space-y-1 rounded-xl border border-white/5 bg-white/[0.02] p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-red-400/10 text-white shadow-sm"
                      : "text-red-200/50 hover:bg-white/[0.04] hover:text-red-200/80"
                  }`}
                >
                  <span className="shrink-0">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Account summary card (sidebar) */}
            <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="text-xs uppercase tracking-widest text-red-200/40">Account</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-400/20 to-red-600/20 text-lg font-bold text-red-400">
                  JC
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-white">Jamie Chen</div>
                  <div className="truncate text-xs text-red-200/50">Pro Plan</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-red-200/40">Member since</span>
                <span className="text-white">Jan 2024</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-xs">
                <span className="text-red-200/40">Team</span>
                <span className="text-white">Acme Corp</span>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div
            className={`transition-all duration-700 delay-200 ease-out lg:col-span-3 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
              {renderTabContent()}
            </div>

            {/* Recent Activity (below main content) */}
            <div className="mt-8">
              <RecentActivity />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-red-200/40 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-red-400 to-red-600 shadow-md shadow-red-500/10">
              <span className="text-[10px] font-bold text-white">N</span>
            </div>
            <span className="text-red-200/50">
              &copy; {new Date().getFullYear()} Nexus. All rights reserved.
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="transition-all duration-300 hover:text-red-200/70">Privacy</a>
            <a href="#" className="transition-all duration-300 hover:text-red-200/70">Terms</a>
            <a href="#" className="transition-all duration-300 hover:text-red-200/70">Security</a>
            <a href="#" className="transition-all duration-300 hover:text-red-200/70">Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}