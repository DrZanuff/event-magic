import { LandingVideoShowcase } from '@/src/components/landing/LandingVideoShowcase'
import { Footer } from '@/src/components/landing/Footer'
import styles from './landing.module.css'
import buttons from '../styles/buttons.module.css'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles['title-container']}>
            <h1 className={styles.title}>Create magical invitations</h1>
            <p className={styles.description}>
              With Event Magic, you can design and personalize stunning video
              invitations in minutes — no design skills required.
            </p>
          </div>
          <Link href="/main/editor">
            <div
              className={`${buttons['button-purple']} ${styles['cta-button']}`}>
              Start for free ➡
            </div>
          </Link>
        </div>

        <LandingVideoShowcase />

        <div className={styles.explanation}>
          <h2 className={styles.explanationTitle}>
            Create your account and save your events
          </h2>
          <p className={styles.explanationText}>
            Share them with a unique link, instantly.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
