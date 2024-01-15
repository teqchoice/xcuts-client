import Header from '@/views/layout/header/index'
import Footer from '@/views/layout/footer/index'

// !! Fake DB
import FakeDb from '@/DB/content.json'

//** Font import */
import localFont from 'next/font/local'
import Login from '../pages/login/logintest'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { select } from 'radash'

// const poppins = Poppins({
//   weight: ['400', '700', '900'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap'
// })

export const poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Thin.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
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
