import React from 'react';
import Image from 'next/image';

import { title } from './GalleryItem.module.css';

export default function GalleryItem({ size, thumbnail, info }) {
    return (
        <a href={info.link}>
            <Image
                src={thumbnail ? `/images/${thumbnail}` : '/images/placeholder.png'}
                height={size[0]}
                width={size[1]}
            />
            <span className={title}>{info.title.rendered}</span>
        </a>
    )
}
