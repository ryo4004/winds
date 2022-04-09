import classNames from 'classnames'

import styles from './Contact.module.scss'

export const Contact = () => {
  return (
    <div className={classNames('block', styles.contact)}>
      <div className="title">
        <h2 className="title-large" data-subttl="Contact">
          お問い合わせ
        </h2>
      </div>
      <div className={styles.contents}>
        <div className={styles.text}>
          <p>ザ・ウィンド・アンサンブルに関するご意見、ご質問、メッセージ等お気軽にお問い合わせください。</p>
          <p>また、出張、依頼演奏などもこちらから受け付けております。</p>
        </div>
        <form method="post" action="contact" id="contact-form">
          <label>
            <span>お名前</span>
            <input type="text" name="name" value="" className={styles.name} id="form-name" required={true} />
          </label>
          <label>
            <span>メールアドレス</span>
            <input
              type="address"
              autoCorrect="off"
              autoCapitalize="off"
              name="email"
              value=""
              className={styles.email}
              placeholder="連絡可能なメールアドレスを入力してください"
              id="form-email"
              required={true}
            />
          </label>
          <label>
            <span>お問い合わせ内容</span>
            <textarea name="message" className={styles.text} id="form-message" required={true}></textarea>
          </label>
          <button type="submit" name="send" className={styles.sendbutton} value="send">
            確認
          </button>
        </form>
      </div>
    </div>
  )
}
