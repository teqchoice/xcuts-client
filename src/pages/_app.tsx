import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import { Provider } from 'react-redux'
import { store } from '@/redux/store'

import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
import axios from 'axios'
import Layout from '@/views/layout'
import { MantineProvider, createTheme } from '@mantine/core'
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
          <meta name='robots' content='noindex, nofollow' />
          <meta name='keywords' content='xcut'></meta>
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
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  )
}
