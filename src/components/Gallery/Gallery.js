import dynamic from 'next/dynamic';

const Masonry = dynamic(() => import('react-masonry-css'));

const Button = dynamic(() => import('components/Button'))
const GalleryItem = dynamic(() => import('components/GalleryItem'))
const Spinner = dynamic(() => import('components/Spinner'))

import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { formatPost } from 'utils';

import styles from './Gallery.module.scss';

const breakpointConfig = { default: 4, 600: 1, 900: 2, 1200: 3 }

export default function Gallery({ pageSize, postType }) {
  const { posts, isLoading, setSize } = useInfiniteScroll({
    method: 'getPosts',
    pageSize: pageSize
  });

  const buildPostList = () => {
    return posts?.map(post => {
      const { id, title, thumbnail, term } = formatPost(post)
      if (!postType || term === postType)
        return <GalleryItem
          key={id}
          title={title}
          link={`/${term}/${id}`}
          thumbnail={thumbnail}
          term={term}
        />
    })
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointConfig}
        className={styles._grid}
        columnClassName={styles._column}
      >
        {buildPostList()}
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
    </>
  )
}
