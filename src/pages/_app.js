import Head from 'next/head';
import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';

const Navbar = dynamic(() => import('components/Navbar'))
const Footer = dynamic(() => import('components/Footer'))

import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const getRefreshInterval = (minutes) => minutes * 60 * 1000;
  const swrConfig = { refreshInterval: getRefreshInterval(15) };

  return (
    <>
      <Head>
        <title>CDV Lab</title>
        <meta name='description' content="Computational Design & Visualization Lab's @ DEI-UC" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SWRConfig value={swrConfig}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
    </>
  )
}

export default MyApp
