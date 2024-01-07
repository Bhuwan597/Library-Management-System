import { Lato } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";

const inter = Lato({ subsets: ['lato'] })

export const metadata = {
  title: 'KrantiKari Library',
  description: 'Library for WRC students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  )
}
