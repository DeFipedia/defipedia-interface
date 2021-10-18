import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../theme';

function App({ Component, pageProps }: AppProps) {
  return (
    // <UseWalletProvider chainId={4}>
  <ChakraProvider resetCSS theme={theme}>
    <Layout>
    <Head>
      <title>DeFiPedia Protocol</title>
      {/* <link rel='icon' href='/defipedia.svg'/> */}
    </Head>
    <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
    // </UseWalletProvider>
  )
}

export default App
