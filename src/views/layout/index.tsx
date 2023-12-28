import Header from '@/views/layout/header/index'
import Footer from '@/views/layout/footer/index'

// !! Fake DB
import FakeDb from '@/DB/content.json'

//** Font import */
import { Poppins } from 'next/font/google'
import Login from '../pages/login/logintest'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { select } from 'radash'

const poppins = Poppins({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

const Data = FakeDb

export default function Layout({ children, data }: any) {
  const { passwordvrify } = useSelector((state: any) => state.options)
  // if (!passwordvrify)
  //   return (
  //     <div className='fixed top-0 left-0 h-screen w-screen bg-white z-50'>
  //       <Login Data={Data?.delivery} />
  //     </div>
  //   )
  return (
    <main className={poppins.className}>
      <Header
        data={select(
          data,
          item => item?.contents,
          item => item?.name?.includes('Header')
        )}
      />
      {children}
      <Footer
        data={select(
          data,
          item => item?.contents,
          item => item?.name?.includes('Footer')
        )}
      />
    </main>
  )
}
