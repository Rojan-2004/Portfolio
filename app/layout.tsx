import type { Metadata } from 'next';
import { Inter, Montserrat, Clicker_Script } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const clickerScript = Clicker_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-clicker',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rojan Mainali — Web & Mobile App Developer',
  description: 'Portfolio of Rojan Mainali, a Computer Science undergraduate and Web & Mobile App Developer specializing in React, Next.js, Flutter, Node.js, and Full-Stack Engineering.',
  keywords: ['Rojan Mainali', 'Portfolio', 'Web Developer', 'Mobile App Developer', 'Flutter', 'Next.js', 'React', 'Nepal'],
  authors: [{ name: 'Rojan Mainali' }],
  openGraph: {
    title: 'Rojan Mainali — Portfolio',
    description: 'Web & Mobile App Developer building modern, high-performance web applications and cross-platform mobile apps.',
    url: 'https://rojanmainali.com',
    siteName: 'Rojan Mainali Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${clickerScript.variable}`}>
      <body className="bg-[#faedcd] text-[#3a2e2a] antialiased selection:bg-[#d4a373]/30 selection:text-[#3a2e2a]">
        {children}
      </body>
    </html>
  );
}

