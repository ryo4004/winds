import { useState } from 'react'

import { Block } from '../Layout/Block'
import { Text } from '../Layout/Text'

import styles from './Contact.module.scss'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
              className={styles.text}
              id="form-message"
              required={true}
            />
          </label>
          <button type="submit" name="send" className={styles.sendbutton} value="send">
            確認
          </button>
        </form>
      </Block>
    </div>
  )
}
