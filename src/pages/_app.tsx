import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Space_Grotesk} from '@next/font/google'


const space = Space_Grotesk({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={space.className}>
     <Component {...pageProps} />
    </main>
  )
}
