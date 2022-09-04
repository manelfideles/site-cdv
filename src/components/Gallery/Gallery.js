import GalleryItem from 'components/GalleryItem';

import Masonry from 'react-masonry-css';

import { placeholderImage } from '../../../public/assets';

import styles from './Gallery.module.css';

const breakpointConfig = {
  default: 4,
  600: 1,
  900: 2,
  1200: 3
}

export default function Gallery({ posts }) {

  const buildPostList = () => {
    return posts.map(({
      id,
      title,
      link,
      thumbnail
    }) =>
      <GalleryItem
        key={id}
        title={title}
        link={link}
        thumbnail={thumbnail || placeholderImage}
      />
    )
  }

  return (
    <Masonry
      breakpointCols={breakpointConfig}
      className={styles._grid}
      columnClassName={styles._column}
    >
      {buildPostList()}
    </Masonry>
  )
}
