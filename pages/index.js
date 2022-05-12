import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

export default function Home() {

  return (
    <>
      <Head>
        <title>CDV Lab</title>
        <meta name="description" content="Computational Design & Visualization Lab's @ DEI-UC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.home}>
        <section className={styles.hero}>
          <p>
            <span>Computational Design & Visualization Lab.</span>
            <br />is a research laboratory of the Cognitive and Media Systems Group (CMS)
            of the Centre of Informatics and Systems of the University Of Coimbra
          </p>
        </section>
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

/* export async function getServerSideProps() {
  const res = await fetch('https://cdv.dei.uc.pt/wp-json/wp/v2/posts');
  const data = await res.json();
  console.log(data);
  return { props: { info: data } };
} */
