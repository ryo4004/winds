import { useState } from 'react'
import classNames from 'classnames'

import { Block } from '../Layout/Block'
import { Text } from '../Layout/Text'

import { useMail } from '../../utilities/hooks/useMail'

import styles from './Contact.module.scss'

export const Contact = () => {
  const { name, email, message, updateForm, send, sent } = useMail()
  const [confirm, setConfirm] = useState(false)

  return (
    <div className={styles.contact}>
      <Block title="お問い合わせ" subTitle="Contact">
        {sent && (
          <Text>
            <p>お問い合わせを受け付けました。お返事をお送りさせていただくまで、しばらくお待ちください。</p>
            <p>
              なお、一週間以上経過しても返信がない場合にはこちらで正常に受け付けられていない可能性がありますので、お手数ですが改めてご連絡をいただけますようお願いいたします。
            </p>
          </Text>
        )}
        {!sent && (
          <>
            <Text>
              <p>ザ・ウィンド・アンサンブルに関するご意見、ご質問、メッセージ等お気軽にお問い合わせください。</p>
              <p>また、出張、依頼演奏などもこちらから受け付けております。</p>
            </Text>
            <div className={styles.form}>
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
                  disabled={confirm}
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
                  disabled={confirm}
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
                  disabled={confirm}
                />
              </label>
              {!confirm && (
                <button
                  type="submit"
                  name="send"
                  className={styles.sendbutton}
                  value="send"
                  onClick={() => setConfirm(true)}
                >
                  確認
                </button>
              )}
              {confirm && (
                <>
                  <div className={styles.message}>
                    <p>この内容でよろしければ、送信ボタンを押してください。</p>
                  </div>
                  <div className={styles.button}>
                    <button
                      type="submit"
                      name="modify"
                      className={styles['send-button']}
                      value="modify"
                      onClick={() => setConfirm(false)}
                    >
                      修正する
                    </button>
                    <button
                      type="submit"
                      name="send"
                      className={classNames(styles['send-button'], styles.confirm)}
                      value="confirm"
                      onClick={send}
                    >
                      送信
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </Block>
    </div>
  )
}
