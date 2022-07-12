import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import { getPosts } from '../utils/wordpress';
import { useState, useEffect } from 'react';

import { home } from '../styles/Home.module.css';

export default function Home(/* { posts } */) {

  const [posts, setPosts] = useState([])

  const handlePosts = (res) => {
    const data = res.map((p) => {
      return {
        'id': p.id,
        'title': p.title.rendered,
        'link': p.link,
        'embedded': p._embedded
      }
    })
    setPosts(data);
  }

  useEffect(() => {
    getPosts(15).then(res => handlePosts(res))
  }, [])


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

/* 
// SSR here ---
const posts_per_page = 15;
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
} */