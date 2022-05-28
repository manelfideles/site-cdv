import React from 'react';
import Image from 'next/image';

import { styles } from './GalleryItem.module.css';

export default function GalleryItem({ title, link, thumbnail }) {

    return (
        <a href={link}>
            <Image
                src={thumbnail['media_details'].sizes.medium['source_url']}
                width={180} height={120}
                alt={thumbnail["alt_text"]}
            />
            <span /* className={styles.post_title} */>{title.rendered}</span>
        </a>
    )
}
