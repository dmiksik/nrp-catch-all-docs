import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import 'fumadocs-ui/style.css';
import './global.css';

const roboto = localFont({
  src: [
    { path: '../public/fonts/Roboto-Regular-Latin.woff2', weight: '100 900', style: 'normal' },
    { path: '../public/fonts/Roboto-Italic-Latin.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-roboto',
  display: 'swap',
});

const basePath = process.env.NODE_ENV === 'production' ? '/nrp-catch-all-docs' : '';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.variable}>
      <body
        style={{
          fontFamily: 'var(--font-roboto), system-ui, sans-serif',
          backgroundImage: `url('${basePath}/background.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
