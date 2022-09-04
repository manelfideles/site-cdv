import { useState } from 'react';
import { useRouter } from 'next/router';

import { logo, barsIcon, searchIcon } from '../../../public/assets';

import styles from './Navbar.module.css';

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
        <img src={logo} height={150} width={250} />
      </a>
      <div className={styles.navigation}>
        <a href="/">About</a>
        <a href="/">People</a>
        <a href="/">Research</a>
        <a href="/">Publications</a>
        <a href="/">
          <img
            src={searchIcon}
            height={18}
            width={18}
          />
        </a>
      </div>
      <a className={styles.logoMobile} href='/'>
        <img src={logo} height={50} width={100} />
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
            <button onClick={() => changePage('/')}>About</button>
            <button onClick={() => changePage('/')}>People</button>
            <button onClick={() => changePage('/')}>Research</button>
            <button onClick={() => changePage('/')}>Publications</button>
          </div>
        )
        : <button
          onClick={() => setIsOpen(true)}
          className={styles.mobileButton}
        >
          <img src={barsIcon} height={25} width={25} />
        </button>
      }
    </nav>
  )
}
