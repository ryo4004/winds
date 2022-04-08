import { useState, useEffect } from 'react'

import styles from './MainBackgroundImage.module.scss'

const backgroundPhotoStyleList = [
  styles.first,
  styles.second,
  styles.third,
  styles.fourth,
  styles.fifth,
  styles.sixth,
  styles.seventh,
  styles.eighth,
  styles.ninth,
  styles.tenth,
  styles.eleventh,
  styles.twelfth,
  styles.thirteenth,
  styles.fourteenth,
]

export const MainBackgroundImage = () => {
  const [count, setCount] = useState(2)
  const [firstStyle, setFirstStyle] = useState(backgroundPhotoStyleList[0])
  const [secondStyle, setSecondStyle] = useState(backgroundPhotoStyleList[1])

  // 2枚の画像を切り替えるアニメーションを1セットとしている
  useEffect(() => {
    const interval = setInterval(() => {
      // CSS animationとの兼ね合いで2秒遅らせて切り替える
      const newBackground = backgroundPhotoStyleList[count]
      if (count % 2 === 0) {
        setTimeout(() => setFirstStyle(newBackground), 2000)
      } else {
        setTimeout(() => setSecondStyle(newBackground), 2000)
      }

      if (count === backgroundPhotoStyleList.length - 1) {
        setCount(0)
      } else {
        setCount(count + 1)
      }
    }, 15000) // CSS animationが30sなのでその半分を指定
    return () => clearInterval(interval)
  }, [count, backgroundPhotoStyleList])

  return (
    <section className={styles.background}>
      <div className={firstStyle}></div>
      <div className={secondStyle}></div>
      <div className={styles.filter}></div>
    </section>
  )
}
