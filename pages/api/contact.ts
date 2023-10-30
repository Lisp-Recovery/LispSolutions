import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

type ResponseData = {
  message: string
}
 
export default function handler (req: NextApiRequest, res: NextApiResponse<ResponseData>) 
{
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    const transporter = nodemailer.createTransport({
        port: 465,     
        host: "smtp.gmail.com",
           auth: {
                user: 'demo email',
                pass: process.env.password,
             },
        secure: true,
      })

      const mailData = {
        from: 'demo email',
        to: 'your email',
        subject: `Message From ${name}`,
        text: message + " | Sent from: " + email,
        html: `<div>${message}</div><p>Sent from: ${email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
        res.status(500).json({ message: 'error'});
        else
        res.status(200).json({ message: 'successfully sent' });
    })
}