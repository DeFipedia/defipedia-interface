import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import {UseWalletProvider} from 'use-wallet'

function MyApp({ Component, pageProps }) {
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

export default MyApp
