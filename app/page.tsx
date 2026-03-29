import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JoinForm from "./components/join-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        {/* HERO (clean) */}
        <section className="relative overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 h-[480px] bg-cover bg-center"
            style={{
              backgroundImage:
                //"url(https://images.unsplash.com/photo-1520975693411-b4d0f0b15b7b?auto=format&fit=crop&w=2400&q=60)",
                "url('/images/hands-actions.png')",
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 h-[560px] bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
            {/* ✅ NEW: center the whole block */}
            <div className="flex justify-center">
              <div className="w-full max-w-3xl text-center">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/20">
                  DAC — Diaspora Afrique Congo
                </p>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Transformer l’engagement de la diaspora en impact réel.
                </h1>

                <p className="mt-5 mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                  La DAC – Diaspora Afrique Congo est une structure apolitique basée en Europe, créée pour mobiliser,
                  accompagner et structurer les initiatives portées par la diaspora africaine, en particulier congolaise.
                </p>

                {/* ✅ center buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/about"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
                  >
                    Qui sommes-nous
                  </Link>

                  <Link
                    href="/missions"
                    className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
                  >
                    Nos missions
                  </Link>

                  <Link
                    href="/actions"
                    className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
                  >
                    Nos actions
                  </Link>

                  <Link
                    href="/support"
                    className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Nous soutenir
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade into the next section */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white" />
        </section>

    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl">
          <JoinForm />
        </div>
      </div>
    </section>      </main>

      <Footer />
    </div>
  );
}