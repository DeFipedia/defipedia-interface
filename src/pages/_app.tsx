import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import {UseWalletProvider} from 'use-wallet'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <UseWalletProvider chainId={4}>
  <ChakraProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
    </UseWalletProvider>
  )
}

export default App
