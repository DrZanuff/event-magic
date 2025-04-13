import { GitHubIcon } from '@/src/components/icons/GitHub'
import styles from './Footer-styles.module.css'

export function Footer() {
  return (
    <footer className={styles.FooterContainer}>
      <a
        href="https://github.com/DrZanuff"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}>
        <span>Developed by DrZanuff</span>
        <GitHubIcon />
      </a>
    </footer>
  )
}
