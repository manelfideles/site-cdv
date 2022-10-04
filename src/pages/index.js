import {
  useState,
  useEffect,
  useCallback
} from 'react';

import { useFetch } from 'hooks/useFetch';

import Gallery from 'components/Gallery';
import Hero from 'components/Hero';
import Spinner from 'components/Spinner';

import styles from 'styles/Home.module.scss';
import getBestImageSize from 'utils';

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

  const formatPost = (post) => {
    const { id, link, title } = post;
    const imageSizes = post
      ?.['_embedded']
      ?.['wp:featuredmedia']
      ?.[0]['media_details']
      ?.['sizes']

    const term = post
      ?.['_embedded']
      ?.['wp:term']
      ?.[0][0]['slug']

    return {
      id: id,
      link: link,
      title: title.rendered,
      thumbnail: imageSizes
        ? getBestImageSize(imageSizes, 300, 100)
        : undefined,
      term: term,
    }
  }

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

  const renderLoadingState = () => {
    return loading
      ? <Spinner />
      : <button onClick={() => setPageNumber(pageNumber + 1)}>
        LOAD MORE
      </button>
  }

  const renderContent = () => {
    return (
      <>
        <Gallery posts={posts} />
        <div className={styles.loadMoreContainer}>
          {renderLoadingState()}
        </div>
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