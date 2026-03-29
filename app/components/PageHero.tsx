"use client";

import { motion } from "framer-motion";

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  underline?: boolean;
  children?: React.ReactNode;
};

export default function PageHero({
  badge,
  title,
  subtitle,
  underline = true,
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />

      {/* bulles déco */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-8 sm:pt-14 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
            {badge}
          </span>

          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>

          {underline && <div className="mt-3 h-1 w-20 rounded bg-blue-600" />}

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>

          {children ? <div className="mt-7">{children}</div> : null}
        </motion.div>
      </div>

      {/* transition */}
      <div className="relative h-10 bg-gradient-to-b from-transparent to-slate-50" />
    </section>
  );
}