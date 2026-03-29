import Link from "next/link";

export default function Footer() {
  return (
   <footer className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2">

    {/* DAC */}
    <div>
      <h3 className="font-semibold text-slate-900 mb-3">
        DAC — Diaspora Afrique Congo
      </h3>

      <p className="text-sm text-slate-600">
        Organisation engagée dans la mobilisation de la diaspora africaine
        et le développement de projets solidaires en Afrique.
      </p>
    </div>

    {/* Contact */}
    <div>
      <h3 className="font-semibold text-slate-900 mb-3">Contact</h3>

      <div className="space-y-2 text-sm text-slate-600">

        <div>⌂ Rue des Guillemins 139, 4000 Liège</div>

        <div>
          ✉ <a href="mailto:D.action@outlook.com" className="hover:underline">
            D.action@outlook.com
          </a>
        </div>

        <div>
          ☎ <a href="tel:+32XXXXXXXX" className="hover:underline">
            +32 470 85 53 26
          </a>
        </div>

        <div className="flex items-center gap-4 pt-3">

  {/* Instagram */}
  <a
    href="https://instagram.com/dac_europe/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 hover:text-black"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm9.25 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@dac_europ"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 hover:text-black"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16.5 2c.3 1.9 1.7 3.3 3.5 3.6v3.1c-1.3-.1-2.6-.5-3.5-1.2v7.3a6.2 6.2 0 11-5.4-6.1v3.2a3 3 0 102.3 2.9V2h3.1z"/>
    </svg>
  </a>

</div>

      </div>
    </div>

  </div>
  <div className="border-t border-slate-200 mt-6 pt-4 text-center text-xs text-slate-500">
    © {new Date().getFullYear()} DAC — Diaspora Afrique Congo. All rights reserved.
  </div>
</footer>
  );
}
