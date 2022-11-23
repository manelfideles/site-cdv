import dynamic from 'next/dynamic';
import Image from 'next/image';

const Link = dynamic(() => import('next/link'));

import styles from './GalleryItem.module.scss';

export default function GalleryItem({
  title,
  subtitle,
  postedAt,
  link,
  thumbnail,
  term,
  imageQuality = 75,
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
      <Image
        src={renderThumbnail()}
        placeholder='blur'
        quality={imageQuality}
        blurDataURL='/assets/images/placeholder.jpg'
        alt='post thumbnail'
        height={calcThumbnailHeight()}
        width='150px'
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