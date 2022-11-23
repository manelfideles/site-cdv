import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const Masonry = dynamic(() => import('react-masonry-css'));

const Button = dynamic(() => import('components/Button'))
const Spinner = dynamic(() => import('components/Spinner'))
const GalleryItem = dynamic(() => import('components/GalleryItem'))

import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { formatPost } from 'utils';

import styles from './Gallery.module.scss';

const breakpointConfig = { default: 4, 600: 1, 800: 2, 1000: 3 }

export default function Gallery({ pageSize, postType }) {
  const { posts, isLoading, setSize } = useInfiniteScroll({
    method: 'getPosts',
    pageSize
  });

  const formattedPosts = useMemo(() => posts?.map(post => formatPost(post)), [posts])
  const buildPostList = (posts) => {
    return posts?.map(post => {
      const { id, title, thumbnail, term, postedAt } = post
      if (!postType || term === postType)
        return <GalleryItem
          key={id}
          title={title}
          link={`/${term}/${id}`}
          thumbnail={thumbnail}
          postedAt={postedAt}
          term={term}
          imageQuality={50}
        />
    })
  }
  const postList = useMemo(() => buildPostList(formattedPosts), [formattedPosts])

  return (
    <div className={styles.galleryContainer}>
      <Masonry
        breakpointCols={breakpointConfig}
        className={styles._grid}
        columnClassName={styles._column}
      >
        {postList}
      </Masonry>
      <div className={styles.loadingStateWrapper}>
        {isLoading
          ? <Spinner />
          : <Button
            onClick={() => setSize(currentSize => currentSize + 1)}
            btnText='load more'
          />
        }
      </div>
    </div>
  )
}
