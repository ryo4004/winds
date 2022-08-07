import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import type { MailForm } from '../../utilities/mail/mail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body: MailForm = req.body
  const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: body.email,
    subject: 'お問い合わせ',
    text: body.message,
  })

  res.status(200)
}
