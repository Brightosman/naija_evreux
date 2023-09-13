"use client"
import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nigerians in Eure',
  description: 'It is a platform to connect all Nigerians in Evreux(City) and Eure(Department) department of Normandy France. It is also called Association of Nigerians in Eure Department',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full inline-block z-0">
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
