import Link from 'next/link';

import styles from './Footer.module.scss';

import { socialMediaLinks, locationLink } from './utils';
import { navLinks } from 'utils';

export default function Footer() {
  const renderNavLinks = () => {
    return navLinks.map((link, idx) =>
      <li key={idx}>
        <Link href={link.url}>
          <a>{link.name}</a>
        </Link>
      </li>
    )
  }

  const renderLocationLink = () => {
    const location = locationLink
      .info.map((info, idx) => <p key={idx}>
        {info}
      </p>)
    return (
      <Link href={locationLink.url}>
        <a>{location}</a>
      </Link>
    )
  }

  const renderSocialMediaLinks = () => {
    return socialMediaLinks.map((link, idx) =>
      <Link href={link.url} key={idx}>
        <a>
          <img
            src={link.src}
            alt={link.alt}
            height={link.height}
            width={link.width}
          />
        </a>
      </Link>
    )
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <Link href='/'>
          <img
            src='assets/icons/logo.svg'
            alt='CDV Lab Logo'
            height={115}
            width={150}
          />
        </Link>
        <ul>
          {renderNavLinks()}
        </ul>
      </div>
      <div>
        {renderLocationLink()}
      </div>
      <div className={styles.socials}>
        {renderSocialMediaLinks()}
      </div>
    </footer>
  )
}
