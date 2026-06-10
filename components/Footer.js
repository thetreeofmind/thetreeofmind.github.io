import styles from '../styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}
