import React from "react";
import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Space_Mono, Barlow_Condensed } from 'next/font/google'
import { GET_ACCOUNT_INFO } from '@/graphql/queries/account'

import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client"
import { useQuery } from "@apollo/client";

import HandleRoute from "@/components/handle_route";

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
    <ApolloProvider client={client}>
          <App {...props} />
    </ApolloProvider>
  )
}

function App({ Component, pageProps }: AppProps) {
  const { loading: queryLoading, error: queryError, data: queryData, refetch } = useQuery(GET_ACCOUNT_INFO);

  return (
    <main className={`${barlow_condensed.variable} ${space_mono.variable}`}>
      <Layout>
        <HandleRoute
          Component={Component}
          pageProps={pageProps}
        />
      </Layout>
    </main>
  )
}