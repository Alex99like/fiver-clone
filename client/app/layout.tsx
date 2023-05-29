import './styles/globals.scss'
import { Roboto } from 'next/font/google'

const font = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'Fiver',
  description: 'Fiver',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  themeColor: '#333'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
