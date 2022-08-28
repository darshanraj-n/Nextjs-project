import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
function MyApp({ Component, pageProps }) {

if(Component.getLayout){
  return Component.getLayout(<Component {...pageProps} />)
}

  return (
    <>
    <SessionProvider >
    <Head>
      <title>Meetup</title>
    </Head>
   
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
    </>
  )
}

export default MyApp
