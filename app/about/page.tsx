"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";


function Pill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 backdrop-blur hover:bg-white transition"
    >
      {label}
    </a>
  );
}

function SoftImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      {/* shape décoratif */}
      <div className="absolute -right-4 -top-4 h-full w-full rounded-[28px] bg-gradient-to-br from-sky-100 to-indigo-100" />
      <motion.img
        src={src}
        alt={alt}
        className="relative z-10 h-[340px] w-full rounded-[28px] object-cover shadow-xl ring-1 ring-black/5"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      />
    </div>
  );
}

function Divider() {
  return <div className="my-14 h-px w-full bg-slate-200/70" />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>

<PageHero
  badge="DAC • Diaspora Afrique Congo"
  title="Qui sommes-nous"
  subtitle="Une structure engagée pour mobiliser, accompagner et structurer l’impact de la diaspora, en Europe comme en Afrique."
/>

        {/* CONTENU */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          {/* Présentation */}
          <motion.section
            id="presentation"
            className="scroll-mt-28 pt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Présentation complète
                </h2>

                <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    La DAC – Diaspora Afrique Congo est une structure apolitique
                    basée en Europe, créée pour mobiliser, accompagner et
                    structurer les initiatives portées par la diaspora africaine,
                    en particulier congolaise.
                  </p>

                  <p>
                    Son objectif est de connecter la diaspora aux opportunités
                    sociales, humanitaires, culturelles et économiques, tout en
                    favorisant des projets durables et responsables.
                  </p>

                  <p>
                    La DAC agit à travers des actions concrètes : formations,
                    projets humanitaires, accompagnement entrepreneurial,
                    consulting, sensibilisation et mise en relation avec des
                    partenaires adaptés.
                  </p>

                  <p className="font-medium text-slate-900">
                    Sa mission est de transformer l’engagement de la diaspora en
                    impact réel, en Europe comme en Afrique.
                  </p>
                </div>
              </div>


              <div className="md:pt-1">
                <SoftImage
                  src="/images/dac-presentation.jpg"
                  alt="Formation et accompagnement DAC"
                />
                <p className="mt-3 px-30 text-xs text-slate-500">
                  Activités DAC – structuration & accompagnement
                </p>
              </div>
            </div>
          </motion.section>

          <Divider />

          {/* Historique */}
          <motion.section
            id="historique"
            className="scroll-mt-28"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Historique
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  La DAC est née de la volonté de structurer les initiatives
                  individuelles et collectives de la diaspora, afin de créer un
                  impact plus cohérent et durable. Elle s’inscrit dans une
                  dynamique de collaboration, de transmission et de
                  responsabilité.
                </p>
              </div>

              <div className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-6 ring-1 ring-slate-200">
                <ol className="space-y-6">
                  {[
                    {
                      title: "Constat",
                      desc: "Beaucoup d’initiatives diaspora existent, mais manquent parfois de structure et de continuité.",
                    },
                    {
                      title: "Création",
                      desc: "La DAC se forme pour rassembler, organiser et faciliter des actions concrètes.",
                    },
                    {
                      title: "Déploiement",
                      desc: "Projets, formations, accompagnement : transformer l’énergie en résultats mesurables.",
                    },
                  ].map((step) => (
                    <motion.li
                      key={step.title}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.45 }}
                    >
                      <span className="mt-2 h-3 w-3 rounded-full bg-sky-600 shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          {step.title}
                        </p>
                        <p className="text-sm text-slate-600">{step.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.section>

          <Divider />

      {/* Valeurs */}
<motion.section
  id="valeurs"
  className="scroll-mt-28"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.55 }}
>
  <div className="max-w-3xl">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
      Valeurs & principes
    </h2>
    <p className="mt-3 text-slate-600 leading-relaxed">
      Des principes simples qui guident nos décisions et nos actions
      sur le terrain.
    </p>
  </div>

  <motion.div
    className="mt-6 flex flex-wrap gap-3"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.06 } },
    }}
  >
    {[
      "Apolitisme & indépendance",
      "Responsabilité & transparence",
      "Engagement communautaire",
      "Durabilité des actions",
      "Solidarité & collaboration",
    ].map((label) => (
      <motion.div
        key={label}
        variants={fadeUp}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25 }}
        className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
      >
        <span className="font-medium">{label}</span>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

          <Divider />

{/* Vision */}
<motion.section
  id="vision"
  className="scroll-mt-28"
  initial={{ opacity: 0, y: 22 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.55 }}
>
  <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 sm:p-10 ring-1 ring-slate-200">
    <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-sky-200/40 blur-3xl" />

    <div className="grid gap-10 md:grid-cols-2 md:items-start">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Vision
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Construire un pont solide entre la diaspora et l’Afrique, en
          favorisant des projets structurés, durables et à fort impact
          social et économique, afin de contribuer activement au
          développement responsable des communautés.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            Impact concret
          </span>
          <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            Projets structurés
          </span>
          <span className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-slate-200">
            Diaspora + Afrique
          </span>
        </div>
      </div>

      <div className="md:pt-1">
        <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-sky-100 via-white to-indigo-100 ring-1 ring-slate-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_white,_transparent)] opacity-40" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-sky-200/40 blur-2xl" />
          <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-indigo-200/40 blur-2xl" />

          <div className="relative text-center px-6">
            <p className="text-xl font-semibold text-slate-800">
              Vision DAC
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Relier la diaspora et l’Afrique autour de projets durables
            </p>
          </div>
        </div>

        <p className="mt-3 px-1 text-xs text-slate-500">
          Une vision durable entre diaspora et Afrique
        </p>
      </div>
    </div>
  </div>
</motion.section>
        </section>
      </main>

      <Footer />
    </div>
  );
}