import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('components/Hero'));
const Gallery = dynamic(() => import('components/Gallery'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery pageSize={15} />
    </main>
  )
}

/* export async function getStaticProps() {
  const query = '?_embed&_fields=id,title,link,_links&page=1&per_page=15';
  const data = api.getPosts(query || '').then(res => res.data);
  console.log(data);
  return { props: data, revalidate: 1 }
} */