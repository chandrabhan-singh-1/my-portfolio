import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API);

export async function sendEmail(values) {
  const content = `<h1>Name: ${values.name}</h1><br/><p>Email: ${values.email}</p><br/><p>Number: ${values.number}</p><br/><p>Message: ${values.message}</p>`;

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['jaydeepsinghvi@gmail.com'],
    subject: 'PORTFOLIO: New Message.',
    html: content
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
  return data;
};
