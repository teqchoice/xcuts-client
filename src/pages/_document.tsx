import { ColorSchemeScript } from '@mantine/core'
import axios from 'axios'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
