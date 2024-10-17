"use server";

import { EmailTemplate } from "@/components/modules/EmailTemplate";
import { Resend } from "resend";

export async function sendEmailAction(
  name: string,
  userEmail: string,
  body: string,
) {
  if (!name || !userEmail || !body) {
    return JSON.parse(
      JSON.stringify({
        status: 400,
        message: "Data invalid",
      }),
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [process.env.MY_EMAIL as string],
      subject: "Email from portfolio",
      react: EmailTemplate({
        name,
        userEmail,
        body,
      }) as string,
    });

    console.log(data, error);

    return JSON.parse(
      JSON.stringify({
        status: 200,
        message: "Email sended",
      }),
    );
  } catch (error) {
    return JSON.parse(
      JSON.stringify({
        status: 500,
        message: "Server error",
        error,
      }),
    );
  }
}
