import Link from 'next/link';
import styles from '../styles/nav.module.scss';

export default function Nav() {
  return (
    <nav className={styles.topBar}>
      <Link href="/" className={styles.signatureIcon} aria-label="Home" />
      <span className={styles.siteTitle}>The Tree of Mind</span>
    </nav>
  );
}
