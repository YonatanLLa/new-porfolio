// app/api/sendEmail/route.ts

import resend from "../../../resend";

export async function POST(request: Request) {
  const { to, subject, text } = await request.json();

  console.log(to, subject, text, "sending email");

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yonatdev@gmail.com",
      subject: to,
      react: subject,
      text: text,
    });

    console.log(data);

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
