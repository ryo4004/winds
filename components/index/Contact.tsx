import { Block } from '../Layout/Block'
import { Text } from '../Layout/Text'

import styles from './Contact.module.scss'

import { useMail } from '../../utilities/hooks/useMail'

export const Contact = () => {
  const { name, email, message, updateForm, send } = useMail()
  return (
    <div className={styles.contact}>
      <Block title="お問い合わせ" subTitle="Contact">
        <Text>
          <p>ザ・ウィンド・アンサンブルに関するご意見、ご質問、メッセージ等お気軽にお問い合わせください。</p>
          <p>また、出張、依頼演奏などもこちらから受け付けております。</p>
        </Text>
        <form method="post" action="contact" id="contact-form">
          <label>
            <span>お名前</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => updateForm('name', e.target.value)}
              className={styles.name}
              id="form-name"
              required={true}
            />
          </label>
          <label>
            <span>メールアドレス</span>
            <input
              type="address"
              autoCorrect="off"
              autoCapitalize="off"
              name="email"
              value={email}
              onChange={(e) => updateForm('email', e.target.value)}
              className={styles.email}
              placeholder="連絡可能なメールアドレスを入力してください"
              id="form-email"
              required={true}
            />
          </label>
          <label>
            <span>お問い合わせ内容</span>
            <textarea
              name="message"
              value={message}
              onChange={(e) => updateForm('message', e.target.value)}
              className={styles.text}
              id="form-message"
              required={true}
            />
          </label>
          <button type="submit" name="send" className={styles.sendbutton} value="send" onClick={send}>
            確認
          </button>
        </form>
      </Block>
    </div>
  )
}
