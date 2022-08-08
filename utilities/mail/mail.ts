import { DateTime } from 'luxon'

export type MailForm = {
  name: string
  email: string
  message: string
}

export const createRecievedMessage = (body: MailForm) => {
  return `${body.name} 様

お問い合わせありがとうございます。

ザ・ウィンド・アンサンブル(winds-n.com)にて、
下記のお問い合わせを受け付けました。
お返事をお送りさせていただくまで、もうしばらくお待ちください。

なお、一週間以上経過しても返信がない場合には、
こちらで正常に受け付けられていない可能性がありますので、
お手数ですが改めてご連絡をいただけますようお願いいたします。

--

お名前:
${body.name}

アドレス:
${body.email}

メッセージ:
${body.message}`
}

export const createNoticeMessage = (body: MailForm) => {
  return `winds-n.com (PC) にて下記のお問い合わせがありました。

受付日時: ${DateTime.now().setZone('Asia/Tokyo').toFormat('yyyy/MM/dd HH:mm')}
返信目安: ${DateTime.now().setZone('Asia/Tokyo').plus({ day: 7 }).toFormat('yyyy/MM/dd HH:mm')}(一週間)

アドレス確認: 送信成功

--

お名前: ${body.name}


アドレス: ${body.email}

メッセージ:
${body.message}`
}
