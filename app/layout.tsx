import { clientUrl } from '@/config/config';
import './globals.css';
import './default.css';
import Header from '@/components/Header';
import { description } from './page';
import { Metadata } from 'next';
import Footer from '@/components/footer/Footer';
import { Analytics } from '@vercel/analytics/react';

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="en">
      <body className="dark" cz-shortcut-listen="true">
        <div className="relative">
          <div>
            <Header />
            {children}
            <Analytics />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
  title: 'PantelAI',
  description,
  icons: {
    icon: `${clientUrl}/favicon32x32.png`,
    shortcut: `${clientUrl}/favicon-16x16.png`,
    apple: `${clientUrl}/apple-touch-icon.png`,
  },
};
