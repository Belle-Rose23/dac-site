"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  GraduationCap,
  Megaphone,
  HandCoins,
  Palette,
  ArrowRight,
} from "lucide-react";
import PageHero from "./PageHero";

type Cat =
  | "Tous"
  | "Projets humanitaires"
  | "Formations & ateliers"
  | "Événements & conférences"
  | "Cagnottes solidaires"
  | "Projets culturels et sociaux";

const categories: { key: Cat; icon: any }[] = [
  { key: "Tous", icon: ArrowRight },
  { key: "Projets humanitaires", icon: HeartHandshake },
  { key: "Formations & ateliers", icon: GraduationCap },
  { key: "Événements & conférences", icon: Megaphone },
  { key: "Cagnottes solidaires", icon: HandCoins },
  { key: "Projets culturels et sociaux", icon: Palette },
];

const items = [
  {
    title: "Projets humanitaires",
    cat: "Projets humanitaires" as const,
    desc: "Aide concrète, actions terrain et soutien aux familles.",
    img: "/images/dac-actions-projets-humanitaires.jpeg",
  },
  {
    title: "Formations & ateliers",
    cat: "Formations & ateliers" as const,
    desc: "Audiovisuel, marketing digital, entrepreneuriat : du pratique.",
    img: "/images/dac-actions-formations-ateliers.jpg",
  },
  {
    title: "Événements & conférences",
    cat: "Événements & conférences" as const,
    desc: "Rencontres diaspora, échanges, sensibilisation et partenariats.",
    img: "/images/dac-actions-evenements-conferences.jpeg",
  },
  {
    title: "Cagnottes solidaires",
    cat: "Cagnottes solidaires" as const,
    desc: "Mobilisation rapide pour répondre à des besoins urgents.",
    img: "/images/dac-actions-cagnottes-solidaires.png",
  },
  {
    title: "Projets culturels et sociaux",
    cat: "Projets culturels et sociaux" as const,
    desc: "Culture, cohésion, entraide, inclusion et transmission.",
    img: "/images/dac-actions-projets-culturels-sociaux.jpeg",
  },
];

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

export default function ActionsSection() {
  const [active, setActive] = useState<Cat>("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return items;
    return items.filter((x) => x.cat === active);
  }, [active]);

  return (
    <div className="bg-white text-slate-900">
      <PageHero
      badge="DAC • Nos actions"
      title="Nos actions"
      subtitle="Nos actions s’articulent autour de 5 axes : humanitaire, formations, événements, cagnottes solidaires et projets culturels pour agir concrètement, ici et en Afrique."
    >
    </PageHero>
    
      {/* CONTENT */}
      <section className="relative bg-slate-50 py-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4">
          {/* Filters (stylés) */}
          <div className="mb-7 flex flex-wrap gap-2">
            {categories.map(({ key, icon: Icon }) => {
              const selected = key === active;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
                    selected
                      ? "bg-blue-700 text-white shadow-sm"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {key}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((a, i) => (
              <motion.article
                key={a.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('${a.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
                    {a.cat}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{a.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
                    >
                      Participer <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="/support"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      Soutenir <HeartHandshake className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
}