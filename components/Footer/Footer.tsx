import Link from 'next/link'
import { DateTime } from 'luxon'

import { Logo } from '../svg/Logo'

export const Footer = () => {
  return (
    <footer>
      <div>
        <div className="author">
          <Link href="/">
            <Logo />
          </Link>
          <small>&copy; The Wind Ensemble 1985-{DateTime.now().toFormat('yyyy')} All Rights Reserved.</small>
        </div>
        <div className="link">
          <ul>
            <li>
              <a href="https://member.winds-n.com">会員専用ページ</a>
            </li>
            <li>
              <a href="policy">個人情報保護方針</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
