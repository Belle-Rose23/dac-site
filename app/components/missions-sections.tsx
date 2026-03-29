"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  GraduationCap,
  BriefcaseBusiness,
  Megaphone,
} from "lucide-react";
import PageHero from "./PageHero";

const missions = [
  {
    title: "Mobilisation de la diaspora africaine",
    desc: "Rassembler, organiser et agir ensemble.",
    icon: Users,
  },
  {
    title: "Projets humanitaires et sociaux",
    desc: "Aide concrète et actions solidaires sur le terrain.",
    icon: HeartHandshake,
  },
  {
    title: "Formations (audiovisuel, marketing, entrepreneuriat)",
    desc: "Former, transmettre et ouvrir des opportunités.",
    icon: GraduationCap,
  },
  {
    title: "Accompagnement de projets & consulting",
    desc: "Structurer, conseiller, connecter aux partenaires.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Sensibilisation (droits humains, femmes, jeunesse)",
    desc: "Éveiller les consciences et défendre des causes clés.",
    icon: Megaphone,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

export default function MissionsSection() {
  return (
    <div className="bg-white text-slate-900">
      
      <PageHero
  badge="DAC • Nos missions"
  title="Nos missions"
  subtitle="La DAC agit à travers plusieurs missions pour mobiliser la diaspora, soutenir les communautés et encourager des projets à impact durable, en Europe comme en Afrique."
/>
        {/* petite transition vers le contenu */}
        <div className="relative h-10 bg-gradient-to-b from-transparent to-slate-50" />

      {/* CONTENT */}
      <section className="relative bg-slate-50 py-14">
        {/* Decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          {/* Grid cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {missions.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={idx}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* corner gradient */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-600/18 to-sky-400/10 blur-xl opacity-0 transition group-hover:opacity-100" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 ring-1 ring-blue-600/15">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-extrabold text-slate-900">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid items-center gap-6 p-7 md:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Tu veux participer ?
                </h3>
                <p className="mt-1 text-slate-600">
                  Don, cagnotte solidaire ou adhésion : chaque geste compte.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/support"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Nous soutenir
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-sky-400" />
          </div>
        </div>
      </section>
    </div>
  );
}