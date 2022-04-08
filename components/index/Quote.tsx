import styles from './Quote.module.scss'

const QUOTE_TEXT = '音楽の輪が限りなく広がりますように'

export const Quote = () => {
  return (
    <section className={styles.quote}>
      <q>
        <QuoteText />
      </q>
    </section>
  )
}

const QuoteText = () => {
  return (
    <>
      {QUOTE_TEXT.split('').map((q, i) => (
        <span key={i}>{q}</span>
      ))}
      <span className={styles.dash}>&mdash;&mdash;</span>
    </>
  )
}
