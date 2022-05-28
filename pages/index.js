import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import getPosts from '../../utils/wordpress';

import { home } from '../styles/Home.module.css';

export default function Home({ posts }) {

  return (
    <>
      <Navbar />
      <main className={home}>
        <Hero />
        <Gallery posts={posts} />
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const posts = await getPosts();
  return { props: { posts } };
}