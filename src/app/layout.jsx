import Footer from "@/components/Footer"
import Header from "@/components/Header"

import '../styles/globals.css'

export const metadata = {
  title: 'Gerador de Cartão de Visita Digital | Resultados Digitais',
  description:
    'Conheça o fantástico Gerador de Cartão de Visita Digital da Resultados Digitais. Crie cartões de visitas digitais personalizados preenchendo os campos e visualize seu novo cartão instantaneamente.',
  keywords:
    'Cartão de Visita Digital, Gerador de Cartão de Visita, Cartões Personalizados, Resultados Digitais, Criar Cartão de Visita, Ferramenta de Marketing, Cartão de Visita Online, Design de Cartão de Visita',
  robots: 'index, follow',
  authors: [{ name: 'Resultados Digitais' }],
  creator: 'Resultados Digitais',
  publisher: 'Resultados Digitais',
  openGraph: {
    title: 'Gerador de Cartão de Visita Digital | Resultados Digitais',
    description:
      'Conheça o fantástico Gerador de Cartão de Visita Digital da Resultados Digitais. Crie cartões de visitas digitais personalizados preenchendo os campos e visualize seu novo cartão instantaneamente.',
    siteName: 'Gerador de Cartão de Visita Digital - Resultados Digitais',
    images: [
      {
        width: 1200,
        height: 630,
        alt: 'Gerador de Cartão de Visita Digital',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gerador de Cartão de Visita Digital | Resultados Digitais',
    description:
      'Conheça o fantástico Gerador de Cartão de Visita Digital da Resultados Digitais. Crie cartões de visitas digitais personalizados preenchendo os campos e visualize seu novo cartão instantaneamente.',
  },

  icons: [
    { rel: 'icon', type: 'image/x-icon', sizes: 'any', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/favicon/android-chrome-512x512.png' },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
