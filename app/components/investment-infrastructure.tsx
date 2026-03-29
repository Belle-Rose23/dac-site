import Link from "next/link";

export default function InvestmentInfrastructure() {
  return (
    <>
<section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white,_transparent)]" />

  <div className="relative mx-auto max-w-6xl px-4 py-24 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Investissement & Infrastructure
    </h1>

    <p className="max-w-2xl mx-auto text-lg opacity-90">
      Nous accompagnons les initiatives qui construisent l’avenir,
      en reliant la diaspora aux opportunités concrètes de développement
      en Afrique et en Europe.
    </p>
  </div>
</section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-slate-600 leading-8">
          La DAC agit comme un pont entre les porteurs de projets, les
          investisseurs et les partenaires stratégiques. Notre objectif est de
          favoriser des initiatives durables, créatrices de valeur et d’impact
          social en Afrique et en Europe.
        </p>
      </section>

      {/* AXES */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Accompagnement de projets d’investissement
            </h3>
            <p className="text-slate-600 leading-7">
              Nous accompagnons les porteurs de projets dans la structuration,
              l’orientation stratégique, la recherche de financements et la mise
              en œuvre de leurs initiatives.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Mise en relation diaspora – partenaires
            </h3>
            <p className="text-slate-600 leading-7">
              Nous facilitons les connexions entre la diaspora, les partenaires
              locaux, les institutions et les acteurs économiques afin de créer
              des collaborations solides et utiles.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Infrastructures sociales et économiques
            </h3>
            <p className="text-slate-600 leading-7">
              Nous soutenons les projets liés aux infrastructures essentielles :
              éducation, santé, entrepreneuriat, commerce, développement local
              et innovation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">
              Projets durables en Afrique et en Europe
            </h3>
            <p className="text-slate-600 leading-7">
              Nous mettons en avant des projets durables, responsables et
              porteurs d’impact social, économique et humain, aussi bien en
              Afrique qu’en Europe.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vous avez un projet ou souhaitez collaborer ?
          </h2>
          <p className="text-slate-600 mb-6 leading-7">
            La DAC encourage les initiatives porteuses de sens et les partenariats
            capables de contribuer à un développement durable et concret.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}