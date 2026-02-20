import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: 'YourMeals - Homely Food Delivery in Jhargram | Order on Swiggy & Zomato',
  description: 'Fresh, homely Indian meals for working professionals & students in Jhargram. Order delicious chicken curry, thalis & more on Swiggy, Zomato or direct delivery. Monthly plans available.',
  keywords: ['food delivery Jhargram', 'cloud kitchen Jhargram', 'homely food', 'student meals', 'office lunch', 'YourMeals', 'Swiggy Jhargram', 'Zomato Jhargram'],
  authors: [{ name: 'YourMeals' }],
  metadataBase: new URL('https://yourmeals.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://yourmeals.in',
    title: 'YourMeals - Homely Food Delivery in Jhargram',
    description: 'Fresh, delicious Indian meals delivered to your doorstep. Perfect for working professionals & students.',
    siteName: 'YourMeals',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YourMeals - Homely Food Delivery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourMeals - Homely Food Delivery in Jhargram',
    description: 'Fresh Indian meals for working professionals & students',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="pinterest-rich-pin" content="true" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={`${inter.variable} ${bebas.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
