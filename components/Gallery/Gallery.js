import React from 'react';
import GalleryItem from '../GalleryItem';
import Spinner from '../Spinner';

import { gallery, load } from './Gallery.module.css'

export default function Gallery({ posts }) {

    function displayGallery(arr) {
        return arr.map(post => {
            if (post['embedded']['wp:featuredmedia'] !== undefined) {
                return <GalleryItem key={post.id}
                    title={post.title}
                    link={post.link}
                    thumbnail={post['embedded']['wp:featuredmedia'][0]}
                />
            }
        })
    }

    if (!posts) return <Spinner />;
    return (
        <>
            <section className={gallery}>
                {displayGallery(posts)}
            </section>
            <div className={load}>
                <span>LOAD MORE</span>
            </div>
        </>
    )
}

