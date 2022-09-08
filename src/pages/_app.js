import Head from 'next/head';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('components/Navbar'));
const Footer = dynamic(() => import('components/Footer'));

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
