import Link from 'next/link';
import { getPosts } from '../lib/buttercms';
import styles from '../styles/blog.module.scss';

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className={styles.blog}>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
            {post.featured_image && (
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url("${post.featured_image}")` }}
              />
            )}
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDescription}>{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
