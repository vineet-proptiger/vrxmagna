import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'VRX MAGNA | Studio, 1 BHK & 2 BHK Smart Homes in Thirumazhisai, Chennai',
  description: 'VRX MAGNA — Thirumazhisai\'s premier smart homes gated community. Studio, 1 BHK & 2 BHK apartments starting from ₹35 Lakhs. 437 units, 100 amenities, home automation. RERA: TN/02/Building/0036/2021.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://vrxmagnathirumazhisai.in/"
              },
              "headline": "VRX MAGNA | Studio, 1 BHK & 2 BHK Smart Homes in Thirumazhisai, Chennai",
              "description": "VRX MAGNA, Thirumazhisai's premier smart homes gated community with 437 units, 100 amenities, home automation. Apartments starting from ₹35 Lakhs. RERA: TN/02/Building/0036/2021.",
              "image": "https://vrxmagnathirumazhisai.in/_next/image?url=%2Fimages%2Fhero%2Fbanner1.webp&w=1200&q=75",
              "author": {
                "@type": "Organization",
                "name": "Proptiger Marketing Services Pvt Ltd",
                "url": "https://www.proptiger.com/chennai/thirumazhisai/vrx-magna-3429300"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Proptiger",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.proptiger.com/"
                }
              },
              "datePublished": "2026-04-21"
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
