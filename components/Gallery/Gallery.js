import React from 'react'
import GalleryItem from '../GalleryItem'
import Spinner from '../Spinner'
import Masonry from 'react-masonry-css'
import { useState } from 'react'

import { gallery, load, _grid, _column } from './Gallery.module.css'

export default function Gallery({ posts }) {

    const [loading, setLoading] = useState(false)

    let postArray = posts.map(post => {
        if (post['embedded']['wp:featuredmedia'] !== undefined) {
            return <GalleryItem key={post.id}
                title={post.title}
                link={post.link}
                thumbnail={post['embedded']['wp:featuredmedia'][0]}
            />
        }
    })

    if (!posts.length) return <Spinner />
    return (
        <>
            <Masonry
                breakpointCols={{ default: 4, 600: 1, 900: 2, 1200: 3 }}
                className={_grid}
                columnClassName={_column}
            >{postArray}</Masonry>
            <div className={load}>
                <span>LOAD MORE</span>
            </div>
        </>
    )
}
