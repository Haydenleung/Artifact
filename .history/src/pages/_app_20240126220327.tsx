import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter, Open_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
