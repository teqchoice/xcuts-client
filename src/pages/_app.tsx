import type { AppProps } from 'next/app'

import '@/styles/all.min.css'
import '@/styles/globals.css'

import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { PagesTopLoader } from 'nextjs-toploader/pages'

import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import { MantineProvider, createTheme } from '@mantine/core'
import ReactQueryProvider from '@/providers/react-query.provider'
const theme = createTheme({
  /** Put your mantine theme override here */
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <Head>
          <meta name='theme-color' content='#e11e26' />
          {/* <link rel='manifest' href='/manifest.json' /> */}
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta name='description' content='xcut'></meta>
          <meta name='robots' content='index, follow' />
          <meta name='keywords' content='xcut, cnc, cut'></meta>
          <meta name='author' content='xcut'></meta>
          <title>XCUT</title>
        </Head>
        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{
            duration: 2000
          }}
        />
        <PagesTopLoader
          color='#e11e26'
          // initialPosition={0.08}
          // crawlSpeed={200}
          // height={3}
          // crawl={true}
          // showSpinner={true}
          easing='ease'
          speed={200}
          shadow='0 0 10px #e11e26,0 0 5px #e11e26'
          //   template='<div class="bar" role="bar"><div class="peg"></div></div>
          // <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <ReactQueryProvider>
          <Component {...pageProps} />
        </ReactQueryProvider>
      </MantineProvider>
    </Provider>
  )
}
