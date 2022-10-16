import Link from 'next/link';

import styles from './GalleryItem.module.scss';

export default function GalleryItem({
  title,
  subtitle,
  link,
  thumbnail,
  term,
  id
}) {
  const renderThumbnail = () => {
    return ![undefined, null].includes(thumbnail)
      ? thumbnail
      : '/assets/images/placeholder.jpg'
  }

  const calcThumbnailHeight = () => {
    return term === 'projects'
      ? '300px'
      : '150px'
  }

  return (
    <div className={styles.itemCard}>
      <img
        src={renderThumbnail()}
        alt='post thumbnail'
        height={calcThumbnailHeight()}
      />
      <Link href={link}>
        <a>
          {title}
          {subtitle && <span>{subtitle}</span>}
        </a>
      </Link>
    </div>
  )
}