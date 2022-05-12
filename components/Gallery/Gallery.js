import React from 'react';
import GalleryItem from '../GalleryItem';
import Spinner from '../Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { gallery, load } from './Gallery.module.css'

export default function Gallery() {

    const [posts, setPosts] = useState();
    // const [chunk, setChunk] = useState(2);
    // const chunkSize = 3;
    // let postsLen;

    const fetchPosts = async () => {
        const res = await axios.get('https://cdv.dei.uc.pt/wp-json/wp/v2/posts');
        return res;
    }

    useEffect(() => {
        fetchPosts().then(res => {
            // postsLen = res.data.length;
            //setPosts(splitProjectArray(res.data))
            setPosts(res.data);
        });
    }, [])

    // Splits project list into chunks to enable
    // 'Load More' functionality
    /* function splitProjectArray(arr) {
        return arr.reduce((chunks, item, i) => {
            const ch = Math.floor(i / chunkSize);
            chunks[ch] = [].concat((chunks[ch] || []), item);
            return chunks;
        }, [])
    } */

    function displayGallery(arr) {
        // console.log(arr);
        // console.log(chunk);
        // console.log(arr.slice(0, chunk));
        return arr.map((post, index) => {
            return <GalleryItem key={index}
                size={[200, 300]}
                info={{ title: post.title, link: post.link }}
            />
            // <GalleryItem size={[125, 180]} />
        })
    }

    if (!posts) return <Spinner />;
    else
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
