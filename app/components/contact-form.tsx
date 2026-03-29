"use client";

import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormErrors = Partial<ContactFormData> & { form?: string };

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  function validate(values: ContactFormData) {
    const newErrors: ContactFormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Veuillez renseigner votre nom.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Veuillez renseigner votre adresse e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    if (!values.message.trim()) {
      newErrors.message = "Veuillez écrire votre message.";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Votre message est trop court.";
    }

    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", form: "" }));
    setSuccessMessage("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    setIsSending(true);
    setErrors({});
    setSuccessMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrors({
          form:
            data?.error ??
            "Impossible d’envoyer votre message pour le moment. Réessayez dans quelques minutes.",
        });
        setIsSending(false);
        return;
      }

      setSuccessMessage(
        "Merci, votre message a bien été envoyé. Nous vous répondrons dès que possible."
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setErrors({
        form: "Problème de connexion. Vérifiez Internet et réessayez.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
          Contactez-nous
        </h2>

        <p className="mb-10 text-center text-slate-600">
          Une question ? Une suggestion ? N&apos;hésitez pas à nous écrire.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {errors.form && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errors.form}
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                  errors.name
                    ? "border-red-400 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900">
                Adresse email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="exemple@email.com"
                className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                  errors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900">
                Votre message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Posez votre question ici..."
                className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                  errors.message
                    ? "border-red-400 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full rounded-lg py-3 font-semibold text-white transition ${
                isSending
                  ? "cursor-not-allowed bg-blue-600/70"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSending ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {successMessage && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {successMessage}
              </div>
            )}

            <p className="text-xs text-slate-500">
              En envoyant ce formulaire, vous acceptez d’être recontacté(e) par
              la DAC.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}