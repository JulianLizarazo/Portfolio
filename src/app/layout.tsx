import './globals.css'
import { Archivo } from 'next/font/google'

const archivo = Archivo({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
