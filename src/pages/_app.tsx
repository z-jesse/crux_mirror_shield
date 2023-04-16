import React from "react";
import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Space_Mono, Barlow_Condensed } from 'next/font/google'

import { Provider } from 'react-redux'
import { store, persistor } from '../../state/store'
import { PersistGate } from 'redux-persist/integration/react';


const barlow_condensed = Barlow_Condensed({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

const space_mono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

export default function RootContextProvider(props: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App {...props} />
      </PersistGate>
    </Provider>
  )
}

function App({ Component, pageProps }: AppProps) {

  return (
    <main className={`${barlow_condensed.variable} ${space_mono.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}