import { Poppins } from 'next/font/google'

import Header from '@/views/layout/header/index'
import Footer from '@/views/layout/footer/index'

const poppins = Poppins({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Layout({ children }: any) {
  return (
    <main className={`${poppins.className}`}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
