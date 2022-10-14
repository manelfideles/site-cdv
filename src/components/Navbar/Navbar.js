import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Navbar.module.scss';

import logo from '../../../public/assets/icons/logo.svg';
import searchIcon from '../../../public/assets/icons/search.svg';
import hamburgerIcon from '../../../public/assets/icons/bars-solid.svg';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollOffset = 0;

  useEffect(() => {
    const handleScroll = () => setScrollPosition(Math.round(window.scrollY));
    handleScroll();
    window
      .addEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changePage = (page) => {
    router.push(page);
    setIsOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <a className={`${styles.logo} ${Math.round(!!(scrollPosition > scrollOffset)) && styles.compact}`}>
          <img src='/assets/icons/logo.svg'
            alt='cdv logo'
          />
        </a>
      </Link>
      <div className={styles.navigation}>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/people'>
          <a>People</a>
        </Link>
        <Link href='/projects'>
          <a>Research</a>
        </Link>
        <Link href='/news'>
          <a>News</a>
        </Link>
        <Link href='/'>
          <a>Publications</a>
        </Link>
        <Link href='/'>
          <a>
            <Image
              src={searchIcon}
              alt='Search Icon'
              height={18}
              width={18}
            />
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a className={styles.logoMobile}>
          <Image
            src={logo}
            alt='CDV Lab Logo'
            height={50}
            width={100}
          />
        </a>
      </Link>
      {
        isOpen
          ? (
            <div className={styles.navigationMobile}>
              <button
                onClick={() => setIsOpen(false)}
                className={close}
              >
                Close
              </button>
              <button onClick={() => changePage('/about')}>
                About
              </button>
              <button onClick={() => changePage('/people')}>
                People
              </button>
              <button onClick={() => changePage('/')}>
                Research
              </button>
              <button onClick={() => changePage('/')}>
                Publications
              </button>
            </div>
          )
          : <button
            onClick={() => setIsOpen(true)}
            className={styles.mobileButton}
          >
            <Image
              src={hamburgerIcon}
              alt='Menu Icon'
              height={25}
              width={25}
            />
          </button>
      }
    </nav >
  )
}
