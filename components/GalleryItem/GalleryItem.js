import React from 'react';

import { item, post_title, post_image } from './GalleryItem.module.css';

export default function GalleryItem({ title, link, thumbnail }) {
    /* 
     * wp_term para saber a categoria
     * projects = 2x2
     * news = 2x1
     */
    return (
        <div className={item}>
            <img
                src={thumbnail['media_details'] ? thumbnail['media_details'].sizes.full['source_url'] : '/images/placeholder.png'}
                alt={thumbnail["alt_text"]}
                className={post_image}
            />
            <span className={post_title}>
                <a href={link}>{title}</a>
            </span>
        </div>
    )
}
