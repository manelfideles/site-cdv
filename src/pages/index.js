import Gallery from 'components/Gallery';
import Hero from 'components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery pageSize={20} />
    </main>
  )
}