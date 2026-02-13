import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl2 bg-white/80 shadow-soft ring-1 ring-white/60 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white ${className}`}>
      {children}
    </span>
  );
}

export function Pill({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 shadow-soft ${className}`}>
      {children}
    </span>
  );
}

export function ButtonLink({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-extrabold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white shadow-soft hover:translate-y-[-1px]"
      : "bg-white text-slate-900 ring-1 ring-slate-200 shadow-soft hover:translate-y-[-1px]";
  return (
    <a className={`${base} ${styles}`} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
