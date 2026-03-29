//import Navbar from "@/components/Navbar";
//import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="h-[520px] w-full bg-[url('https://images.unsplash.com/photo-1520975693411-b4d0f0b15b7b?auto=format&fit=crop&w=2400&q=60')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/20">
                DAC — Diaspora Afrique Congo
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Mobiliser la diaspora. Structurer l’impact. Relier l’Europe et l’Afrique.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                La DAC – Diaspora Afrique Congo est une structure apolitique basée en Europe, créée
                pour mobiliser, accompagner et structurer les initiatives portées par la diaspora
                africaine, en particulier congolaise.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/qui-sommes-nous"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/90"
                >
                  Qui sommes-nous
                </Link>
                <Link
                  href="/nos-missions"
                  className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
                >
                  Nos missions
                </Link>
                <Link
                  href="/nos-actions"
                  className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
                >
                  Nos actions
                </Link>
                <Link
                  href="/nous-soutenir"
                  className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
                >
                  Nous soutenir
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TEASERS */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Qui sommes-nous */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Qui sommes-nous</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Découvrez l’identité de la DAC : son historique, ses valeurs & principes, et sa vision.
              </p>
              <Link
                href="/qui-sommes-nous"
                className="mt-4 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Découvrir
              </Link>
            </div>

            {/* Nos missions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Nos missions</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Mobilisation de la diaspora africaine</li>
                <li>• Projets humanitaires et sociaux</li>
                <li>• Formations & accompagnement</li>
              </ul>
              <Link
                href="/nos-missions"
                className="mt-4 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Voir tout
              </Link>
            </div>

            {/* Nos actions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Nos actions</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Projets humanitaires, formations, événements, cagnottes solidaires et initiatives culturelles.
              </p>
              <Link
                href="/nos-actions"
                className="mt-4 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Explorer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
