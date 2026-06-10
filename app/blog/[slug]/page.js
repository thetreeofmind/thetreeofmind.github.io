import { getPost, getAllPostSlugs } from '../../../lib/buttercms';
import styles from '../../../styles/post.module.scss';

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.seo_title || post.title,
    description: post.meta_description || post.summary,
  };
}

function formatDate(rawDate) {
  const date = new Date(rawDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <div className={styles.post}><p>Post not found.</p></div>;
  }

  return (
    <div className={styles.post}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <span className={styles.date}>{formatDate(post.published)}</span>
        </div>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
    </div>
  );
}
