
import './globals.css'
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'SafeZapp - Your Child\'s Online Safety, Simplified',
  description: 'Give your family peace of mind with SafeZapp\'s comprehensive parental control app. Monitor, protect, and guide your child\'s digital journey safely.',
  keywords: 'parental control, child safety, online protection, screen time, app monitoring',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  )
}
