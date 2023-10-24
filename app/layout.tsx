import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const spartan = localFont({
  src: [
    {
      path: '../public/fonts/Spartan-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Spartan-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-spartan',
})

export const metadata: Metadata = {
  title: 'Invoice App',
  description: 'Invoice tracking application.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spartan.variable}`}>
      <body>{children}</body>
    </html>
  )
}
