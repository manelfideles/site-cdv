import { placeholderImage } from '../../../public/assets';

import styles from './GalleryItem.module.css';

export default function GalleryItem({ title, link, thumbnail }) {
  /* 
   * wp_term para saber a categoria
   * projects = 2x2
   * news = 2x1
   */
  return (
    <div className={styles.item}>
      {/* <img
        src={thumbnail['media_details'] ? thumbnail['media_details'].sizes.full['source_url'] : '/images/placeholder.png'}
        alt={thumbnail["alt_text"]}
        height={Math.random() > 0.5 ? '200px' : '400px'}
        className={styles.post_image}
      /> */}
      <img
        src={/* thumbnail?.sizes?.thumbnail?.source_url ||  */ placeholderImage}
        alt={thumbnail?.alt_text}
      />
      <span className={styles.post_title}>
        <a href={link}>{title}</a>
      </span>
    </div>
  )
}