import '@/styles/globals.css'
import fetcher from '@/utils/fetcher';
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { Roboto } from 'next/font/google';

const optionen = { fetcher: fetcher };

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <SWRConfig value={optionen}>
    <main className={roboto.className}>
      <Component/>
    </main>
  </SWRConfig>
  )
}
