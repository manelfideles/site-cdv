import React from 'react'
import Image from 'next/image';

import {
    footer,
    navigation,
    info,
    socials,
    extra_container
} from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={footer}>
            <div className={navigation}>
                <a href='/'>
                    <Image src='/icons/logo.svg' height={115} width={150} />
                </a>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">People</a></li>
                    <li><a href="/">Research</a></li>
                    <li><a href="/">Publications</a></li>
                </ul>
            </div>
            <div className={info}>
                <p>Departamento de Engenharia Informática</p>
                <p>Faculdade de Ciências e Tecnologia</p>
                <p>Universidade de Coimbra</p>
                <p>Pólo II - Pinhal de Marrocos</p>
                <p>3030-290 Coimbra</p>
            </div>
            <div className={socials}>
                <Image src='/icons/facebook.svg' height={25} width={25} />
                <Image src='/icons/instagram.svg' height={25} width={25} />
                <Image src='/icons/vimeo.svg' height={25} width={25} />
            </div>
        </footer>
    )
}
