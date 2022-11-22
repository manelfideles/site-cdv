import dynamic from 'next/dynamic';

const Link = dynamic(() => import('next/link'));

import styles from './GalleryItem.module.scss';

export default function GalleryItem({
  title,
  subtitle,
  postedAt,
  link,
  thumbnail,
  term,
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
      {postedAt && <span>{postedAt}</span>}
      <Link href={link}>
        <a>
          {title
            && <span
              dangerouslySetInnerHTML={{
                __html: title
              }}></span>
          }
          {subtitle && <span>{subtitle}</span>}
        </a>
      </Link>
    </div>
  )
}