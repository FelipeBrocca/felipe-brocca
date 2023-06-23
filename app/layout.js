import { LangProvider } from './Context/LangContext'
import { ThemeProvider } from './Context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '<Felipe Brocca />'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <LangProvider>
            <body className={inter.className} id='body'>
              {children}
            </body>
        </LangProvider>
      </ThemeProvider>
    </html>
  )
}