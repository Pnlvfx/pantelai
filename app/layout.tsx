import { clientUrl } from '@/config/config';
import './globals.css';
import './default.css';
import Header from '@/components/Header';
import { description } from './page';
import { Metadata } from 'next';

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <div className="relative">
          <div>
            <Header />
            {children}
          </div>
        </div>
        <div className="pt-spacing-7 mt-spacing-7 w-full bg-black text-white">
          <div className="pnl-container">
            <div className="cols-container"></div>
          </div>
          <div className="mt-spacing-7 bg-white pb-spacing-7">
            <div className="mt-[23px]">
              {Array.from({ length: 24 }, (_, i) => i)
                .reverse()
                .map((reverse, i) => (
                  <div key={i} className="bg-black" style={{ marginTop: i, height: reverse }} />
                ))}
            </div>
          </div>
        </div>
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
