/*"use client"*/

import Navigation from '../../components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import { RevealWrapper } from 'next-reveal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contactos',
  description: 'Crea, Modifica y Actualiza tus contactos en la web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='sr'>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
      <RevealWrapper className="load-hidden" scale={2} origin="top" delay={100} duration={100}>
        <Navigation />
      </RevealWrapper>
        <div className="p-4">
          {children}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
