
import Header from '@/views/layout/header/index'
import Footer from '@/views/layout/footer/index'

// !! Fake DB
import FakeDb from '@/DB/content.json'

//** Font import */
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export default function Layout({ children }: any) {
  return (
    <main className={`${poppins.className}`}>
      <Header  Data={FakeDb} />
      {children}
      <Footer />
    </main>
  )
}
