import React from 'react';
import Image from 'next/image';

import { post_title } from './GalleryItem.module.css';

export default function GalleryItem({ title, link, thumbnail }) {
    /* 
     * wp_term para saber a categoria
     * projects = 2x2
     * news = 2x1
     */
    console.log(link, thumbnail);
    return (
        <a href={link}>
            <Image
                src={thumbnail['media_details'] ? thumbnail['media_details'].sizes.full['source_url'] : '/images/placeholder.png'}
                width={180} height={120}
                alt={thumbnail["alt_text"]}
            />
            <span className={post_title}>{title}</span>
        </a>
    )
}
