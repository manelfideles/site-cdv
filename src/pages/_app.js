import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CDV Lab</title>
        <meta name='description' content="Computational Design & Visualization Lab's @ DEI-UC" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
