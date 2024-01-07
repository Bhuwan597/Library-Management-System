import './globals.css'
import {Providers} from "./providers";


export const metadata = {
  title: 'KrantiKari Library',
  description: 'Library for WRC students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  )
}
