import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  email: string;
  bizType?: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(payload: ContactPayload) {
  const { name, email, bizType, message } = payload;

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#5b6af0">New Contact from Datacolab Website</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px;font-weight:bold;color:#666">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666">Business</td><td style="padding:8px">${bizType || 'Not specified'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#666;vertical-align:top">Message</td><td style="padding:8px">${message.replace(/\n/g, '<br>')}</td></tr>
      </table>
    </div>
  `;

  // Send to admin
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL || 'hello@datacolab.az',
    subject: `[Datacolab] New contact from ${name}`,
    html,
    replyTo: email,
  });

  // Send confirmation to user
  await transporter.sendMail({
    from: `"Datacolab" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'We received your message — Datacolab',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#5b6af0">Hi ${name}, we got your message! 👋</h2>
        <p>Thanks for reaching out to Datacolab. We'll review your project and get back to you within <strong>24 hours</strong>.</p>
        <p style="color:#666">In the meantime, feel free to connect with us:</p>
        <p>📱 Telegram: <a href="https://t.me/datacolab">@datacolab</a></p>
        <p>💬 WhatsApp: <a href="https://wa.me/994XXXXXXXXX">+994 XX XXX XX XX</a></p>
        <hr style="border:1px solid #eee;margin:24px 0">
        <p style="color:#999;font-size:12px">Datacolab — We build systems, not just websites.</p>
      </div>
    `,
  });
}
