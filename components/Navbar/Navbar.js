import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
    navbar,
    logo,
    navigation,
} from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={navbar}>
            <a className={logo} href='/'>
                <Image src='/icons/logo.svg' height={150} width={250} />
            </a>
            <div className={navigation}>
                <a href="/">
                    About
                </a>
                <a href="/">
                    People
                </a>
                <a href="/">
                    Research
                </a>
                <a href="/">
                    Publications
                </a>
                <a href='/'>
                    <Image src='/icons/search.svg' height={18} width={18} />
                </a>
            </div>
        </nav>
    )
}
