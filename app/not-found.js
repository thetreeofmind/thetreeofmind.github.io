import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '8rem' }}>
      <h1 style={{ fontSize: '100px', margin: 0 }}>404</h1>
      <p>Page not found</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
