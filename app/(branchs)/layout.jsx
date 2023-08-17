import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AltHeader from '@/components/AltHeader'

export default function RootLayout ({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <AltHeader /> */}
      <Footer />
    </>
  )
}
