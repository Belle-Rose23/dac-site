import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  

  try {
    const { firstName, lastName, email, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site DAC" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nouvelle demande d’adhésion DAC",
      text: `
        Nouvelle demande d'adhésion :

        Prénom : ${firstName}
        Nom : ${lastName}
        Email : ${email}
        Téléphone : ${phone}
            `,
            });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}