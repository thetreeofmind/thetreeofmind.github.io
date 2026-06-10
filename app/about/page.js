import styles from '../../styles/about.module.scss';

export const metadata = {
  title: 'About - The Tree of Mind',
  description: 'About this site.',
};

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <p>There is nothing to talk about this site for now.</p>
      </div>
    </div>
  );
}
