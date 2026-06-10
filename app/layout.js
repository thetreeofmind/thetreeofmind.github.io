import '../styles/globals.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'The Tree of Mind',
  description: 'The Tree of Mind blog',
  icons: {
    icon: '/images/favicon-tab.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
