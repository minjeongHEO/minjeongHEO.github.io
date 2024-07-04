import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@components/Header';
import faviconImage from '@public/favicon/alien.png';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'World Wide Woody',
  description: 'Welcome to my blog!',
  icons: {
    icon: faviconImage.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
