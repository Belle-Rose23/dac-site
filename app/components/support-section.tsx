"use client";

import { HeartHandshake, Target } from "lucide-react";
import { useState } from "react";

export default function SupportSection() {
  const iban = "BЕ41 9674 6066 7110"; 
  const [copied, setCopied] = useState(false);

  const copyIban = async () => {
    await navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Nous soutenir
          </h1>
          <p className="mt-3 text-lg font-semibold text-slate-700">
            Contribuez à notre mission solidaire.
          </p>
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            Deux façons de participer : faire un don humanitaire ou accompagner un projet.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          
          {/* DON */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <HeartHandshake size={20} />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-900">
                  Faire un don
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  Soutenez nos actions solidaires et humanitaires sur le terrain.
                </p>

                {/* IBAN */}
                <div className="mt-6">
                  <p className="text-sm text-slate-500">Numéro de compte :</p>

                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-mono text-base bg-slate-100 px-3 py-2 rounded-lg">
                      {iban}
                    </span>

                    <button
                      onClick={copyIban}
                      className="text-sm px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                      {copied ? "Copié !" : "Copier"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJET */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800">
                <Target size={20} />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-900">
                  Accompagner un projet
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  Contactez-nous pour participer au développement d’un projet.
                </p>

                <p className="mt-4 text-sm text-slate-500">
                  📩 Email : D.action@outlook.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Merci pour votre soutien — chaque contribution compte.
        </p>
      </div>
    </section>
  );
}