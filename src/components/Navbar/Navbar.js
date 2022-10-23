import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'));
const Link = dynamic(() => import('next/link'));

import styles from './Navbar.module.scss';

import logo from '../../../public/assets/icons/logo.svg';
import searchIcon from '../../../public/assets/icons/search.svg';

import { navLinks } from 'utils';

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollOffset = 0;

  useEffect(() => {
    const handleScroll = () => setScrollPosition(Math.round(window.scrollY));
    handleScroll();
    window
      .addEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderNavLinks = () => {
    return navLinks.map((link, idx) => (
      <Link href={link.url} key={idx}>
        <a>{link.name}</a>
      </Link>
    ))
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
        {renderNavLinks()}
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
    </nav >
  )
}
