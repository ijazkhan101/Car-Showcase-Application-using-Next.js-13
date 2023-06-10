import './globals.css'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components'


export const metadata = {
  title: 'Car Showcase Website',
  description: 'Car Showcase Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
