"use client";

import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type FormErrors = Partial<FormData> & { form?: string };

export default function JoinForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  function validate(values: FormData) {
    const newErrors: FormErrors = {};

    if (!values.firstName.trim()) newErrors.firstName = "Veuillez renseigner votre prénom.";
    if (!values.lastName.trim()) newErrors.lastName = "Veuillez renseigner votre nom.";

    if (!values.email.trim()) {
      newErrors.email = "Veuillez renseigner votre adresse e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    if (!values.phone.trim()) {
      newErrors.phone = "Veuillez renseigner votre numéro de téléphone.";
    } else if (!/^[+0-9\s().-]{8,}$/.test(values.phone)) {
      newErrors.phone = "Veuillez entrer un numéro de téléphone valide.";
    }

    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // efface erreur du champ + message global
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
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrors({
          form:
            data?.error ??
            "Impossible d’envoyer la demande pour le moment. Réessayez dans quelques minutes.",
        });
        setIsSending(false);
        return;
      }

      setSuccessMessage(
        "Merci, votre demande a bien été envoyée. Nous vous recontacterons prochainement."
      );

      setForm({ firstName: "", lastName: "", email: "", phone: "" });
    } catch (err) {
      setErrors({
        form: "Problème de connexion. Vérifiez Internet et réessayez.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Adhérer à la DAC
        </h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Rejoignez la DAC et participez à des actions concrètes en Europe et en Afrique.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Erreur globale (pas d’alerte) */}
          {errors.form && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errors.form}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Prénom *"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  errors.firstName
                    ? "border-red-400 focus:border-red-500"
                    : "border-slate-200 focus:border-blue-600"
                }`}
              />
              {errors.firstName && (
                <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            <div>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Nom *"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  errors.lastName
                    ? "border-red-400 focus:border-red-500"
                    : "border-slate-200 focus:border-blue-600"
                }`}
              />
              {errors.lastName && (
                <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Adresse e-mail *"
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                errors.email
                  ? "border-red-400 focus:border-red-500"
                  : "border-slate-200 focus:border-blue-600"
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Numéro de téléphone *"
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                errors.phone
                  ? "border-red-400 focus:border-red-500"
                  : "border-slate-200 focus:border-blue-600"
              }`}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full rounded-xl px-5 py-3 text-sm font-semibold text-white transition ${
              isSending
                ? "bg-blue-700/60 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-700"
            }`}
          >
            {isSending ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>

          {successMessage && (
            <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {successMessage}
            </div>
          )}

          <p className="text-xs text-slate-500">
            En envoyant ce formulaire, vous acceptez d’être recontacté(e) par la DAC.
          </p>
        </form>
      </div>
    </section>
  );
}