import {
  useState,
  useEffect,
  useCallback
} from 'react';

import { useFetch } from 'hooks/useFetch';
import { formatPost } from 'utils';

import Gallery from 'components/Gallery';
import Hero from 'components/Hero';
import LoadMore from 'components/LoadMore';

const baseQuery = '?_embed&_fields=id,title,link,_links&page=1&per_page=15';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState(baseQuery)
  const [hasNextPage, setHasNextPage] = useState(true);
  const {
    data,
    loading
  } = useFetch({
    method: 'getPosts',
    query: query
  });

  const handleData = useCallback(() => {
    if (!loading) {
      setPosts([
        ...posts,
        ...data.map(post => formatPost(post))
      ]);
      /* TO-DO: Change this if field is present in response object */
      setHasNextPage(true);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [loading])

  useEffect(() => {
    setQuery(
      query.replace(
        `&page=${pageNumber - 1}&`,
        `&page=${pageNumber}&`
      )
    )
  }, [query, pageNumber])

  useEffect(() => handleData(), [handleData])

  const renderContent = () => {
    return (
      <>
        <Gallery posts={posts} />
        <LoadMore
          isLoading={loading}
          onClick={() => setPageNumber(pageNumber + 1)}
        />
      </>
    )
  }

  return (
    <main>
      <Hero />
      {renderContent()}
    </main>
  )
}