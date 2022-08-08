import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import type { MailForm } from '../../utilities/mail/mail'
import { createRecievedMessage, createNoticeMessage } from '../../utilities/mail/mail'

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
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
    from: `ザ・ウィンド・アンサンブル<${process.env.MAIL_FROM}>`,
    to: body.email,
    subject: '【ウィンズより】お問い合わせを受け付けました',
    text: createRecievedMessage(body),
  })

  console.log( createNoticeMessage(body))

  await transporter.sendMail({
    from: `ザ・ウィンド・アンサンブル<${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_FROM,
    subject: '【winds-n.com】サイトにてお問い合わせがありました',
    text: createNoticeMessage(body),
  })

  res.status(200)
}

export default sendMail
