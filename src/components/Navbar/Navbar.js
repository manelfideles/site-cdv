import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

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
      <Link href='/'>
        <a className={styles.logo}>
          <Image
            src={logo}
            alt='CDV Lab Logo'
            height={150}
            width={250}
          />
        </a>
      </Link>
      <div className={styles.navigation}>
        <Link href='/'>
          <a>About</a>
        </Link>
        <Link href='/'>
          <a>People</a>
        </Link>
        <Link href='/'>
          <a>Research</a>
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
