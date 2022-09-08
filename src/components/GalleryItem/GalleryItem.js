
import styles from './GalleryItem.module.scss';

export default function GalleryItem({ title, link, thumbnail, term }) {
  const renderThumbnail = () => {
    return ![undefined, null].includes(thumbnail)
      ? thumbnail
      : '/assets/images/placeholder.jpg'
  }
  return (
    <div className={styles.itemCard}>
      <img
        src={renderThumbnail()}
        loading='lazy'
        alt='post thumbnail'
        height={term === 'projects' ? '300px' : '150px'}
      />
      <span>
        <a href={link}>
          {title}
        </a>
      </span>
    </div>
  )
}