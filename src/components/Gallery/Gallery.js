import Masonry from 'react-masonry-css';

import GalleryItem from 'components/GalleryItem';
import LoadMore from 'components/LoadMore';
import Spinner from 'components/Spinner';

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
          : <LoadMore
            onClick={() => setSize(currentSize => currentSize + 1)}
          />
        }
      </div>
    </>
  )
}
