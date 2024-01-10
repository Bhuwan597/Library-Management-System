import './globals.css'
import {Providers} from "./providers";
import Navbar from "@/app/components/Navbar";


export const metadata = {
    title: 'KrantiKari Library',
    description: 'Library for WRC students',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <Navbar/>
            {children}
        </Providers>
        </body>
        </html>
    )
}
