import '../css/globals.css'
import { Inter, Raleway } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Ramafolio',
  description: 'Hello, here is my ideas and mind'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={raleway.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
