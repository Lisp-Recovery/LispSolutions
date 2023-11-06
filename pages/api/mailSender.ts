import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

export type ResponseData = {
  message: string;
  info?: unknown;
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { name, email, subject, content } = req.body;

  if (!email || !content || !name) {
    return res.status(412).json({message: 'Fields validation error: email, content, or name is missing.'});
  }

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.office365.com',
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: false,
  });

  const mailData = {
    from: process.env.email,
    to: process.env.email,
    subject: `Email from Lisp Solution Website ${subject ? `- ${subject}` : ''}`,
    html: `
      ${subject ? `<h1>${subject}</h1>` : ''}
      <div><b>Name:</b> ${name}</div>
      <div><b>Email:</b> ${email}</div>
      <p><b>content:</b> ${content}</p>
    `,
  };

  transporter.sendMail(mailData, (err: any, info: any) => {
    if (err)
      res.status(err.responseCode ?? 400).json({ message: err.message });
    else
      res.status(200).json({ message: 'successfully sent', info });

  });

  return res;
}