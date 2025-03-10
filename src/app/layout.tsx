import '@/styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import CustomThemeProvider from '@/shared/provider/CustomThemeProvider';
import ScrollProvider from '@/shared/provider/ScrollProvider';
import { Header } from '@/widgets/Header';

export const metadata: Metadata = {
  title: '의진 블로그',
  description: '프론트엔드와 관련된 학습 내용을 다루고 있습니다.',
};

const pretendard = localFont({
  src: '../styles/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="xj3BeSGvnx51FL-x8wAypHsy3txgL18YIMbC9bk05JY"
        />
      </head>
      <body
        className={`bg-beige-100 font-pretendard antialiased dark:bg-black`}
      >
        <CustomThemeProvider>
          <ScrollProvider>
            <Header />
            <main className="flex-center grow">{children}</main>
          </ScrollProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
