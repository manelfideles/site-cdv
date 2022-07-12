import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import {
    navbar,
    logo,
    navigation,
    mobileButton,
    logoMobile,
    navigationMobile
} from './Navbar.module.css';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const changePage = (page) => {
        router.push(page);
        setIsOpen(false);
    }

    return (
        <nav className={navbar}>
            <a className={logo} href='/'>
                <Image src='/icons/logo.svg' height={150} width={250} />
            </a>
            <div className={navigation}>
                <a href="/">About</a>
                <a href="/">People</a>
                <a href="/">Research</a>
                <a href="/">Publications</a>
                <a href="/">
                    <Image
                        src='/icons/search.svg'
                        height={18}
                        width={18}
                    />
                </a>
            </div>
            <a className={logoMobile} href='/'>
                <Image src='/icons/logo-mobile.svg' height={50} width={100} />
            </a>
            {isOpen ? (
                <div className={navigationMobile}>
                    <button onClick={() => setIsOpen(false)} className={close}>
                        Close
                    </button>
                    <button onClick={() => changePage('/')}>About</button>
                    <button onClick={() => changePage('/')}>People</button>
                    <button onClick={() => changePage('/')}>Research</button>
                    <button onClick={() => changePage('/')}>Publications</button>
                </div>
            ) : <button onClick={() => setIsOpen(true)} className={mobileButton}>
                <Image src='/icons/bars-solid.svg' height={25} width={25} />
            </button>}
        </nav>
    )
}
