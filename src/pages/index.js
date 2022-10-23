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