import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Inter as FontSans } from 'next/font/google';
import { cva } from 'class-variance-authority';

import '@/app/globals.css';

import AppWrapper from '@/components/atoms/AppWrapper';
import Header from '@/components/atoms/Header';

interface PropsType {
  children: ReactNode;
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const classess = cva(['bg-background', 'font-sans', 'antialiased', fontSans.variable]);

function RootLayout({ children }: Readonly<PropsType>) {
  const bodyClassnames = classess();

  return (
    <html lang="en">
      <body className={bodyClassnames}>
        <AppWrapper>
          <Header />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Pintu Technical Assessment',
  description: 'Pintu Technical Assessment',
};

export default RootLayout;
