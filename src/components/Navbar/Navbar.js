import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'));
const Link = dynamic(() => import('next/link'));

import { debounce } from 'utils';

import styles from './Navbar.module.scss';

import logo from '../../../public/assets/icons/logo.svg';
import searchIcon from '../../../public/assets/icons/search.svg';

import { navLinks } from 'utils';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const renderNavLinks = () => {
    return navLinks.map((link, idx) => (
      <Link href={link.url} key={idx}>
        <a>{link.name}</a>
      </Link>
    ))
  }

  return (
    <nav className={styles.navbar} style={{ top: visible ? 0 : '-20rem' }}>
      <Link href='/'>
        <a className={styles.logo}>
          <img src='/assets/icons/logo.svg'
            alt='cdv logo'
          />
          <span>
            Computational Design and Visualization Lab.
          </span>
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
