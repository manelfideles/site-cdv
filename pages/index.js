import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import { getPosts } from '../utils/wordpress';

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

const posts_per_page = 10;
export async function getStaticProps({ params }) {
  const postData = await getPosts(posts_per_page);
  const posts = postData.map((post) => {
    return {
      'id': post.id,
      'title': post.title.rendered,
      'link': post.link,
      'embedded': post['_embedded']
    }
  })

  return { props: { posts } };
}