import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './Navbar.module.scss';

import logo from '../../../public/assets/icons/logo.svg';
import searchIcon from '../../../public/assets/icons/search.svg';
import hamburgerIcon from '../../../public/assets/icons/bars-solid.svg';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();

  const changePage = (page) => {
    router.push(page);
    setIsOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href='/'>
        <Image
          src={logo}
          alt='CDV Lab Logo'
          height={150}
          width={250}
        />
      </a>
      <div className={styles.navigation}>
        <a href='/'>About</a>
        <a href='/'>People</a>
        <a href='/'>Research</a>
        <a href='/'>Publications</a>
        <a href='/'>
          <Image
            src={searchIcon}
            alt='Search Icon'
            height={18}
            width={18}
          />
        </a>
      </div>
      <a className={styles.logoMobile} href='/'>
        <Image
          src={logo}
          alt='CDV Lab Logo'
          height={50}
          width={100}
        />
      </a>
      {isOpen
        ? (
          <div className={styles.navigationMobile}>
            <button
              onClick={() => setIsOpen(false)}
              className={close}
            >
              Close
            </button>
            <button onClick={() => changePage('/')}>
              About
            </button>
            <button onClick={() => changePage('/')}>
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
    </nav>
  )
}
