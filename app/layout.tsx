import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { League_Spartan } from "next/font/google"

const spartan = localFont({
  src: [
    {
      path: '../public/fonts/Spartan-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Spartan-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Spartan-SemiBold.ttf',
      weight: '600',
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

//👇 Configure our font object
const spartan2 = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${spartan.variable} bg-zhenzhubai_pearl text-ruined_smores`}
    >
      <body>{children}</body>
    </html>
  )
}
