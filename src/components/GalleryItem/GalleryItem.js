import styles from './GalleryItem.module.scss';
/* 
 * wp_term para saber a categoria
 * projects = 2x2
 * news = 2x1
 */

export default function GalleryItem({ title, link, thumbnail }) {
  const renderThumbnail = () => {
    return ![undefined, null].includes(thumbnail)
      ? thumbnail
      : '/assets/images/placeholder.png'
  }
  return (
    <div className={styles.itemCard}>
      <img
        src={renderThumbnail()}
        alt='post thumbnail'
        height={Math.random() > 0.5 ? '200px' : '300px'}
      />
      <span>
        <a href={link}>{title}</a>
      </span>
    </div>
  )
}