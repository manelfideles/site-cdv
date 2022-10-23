import dynamic from 'next/dynamic';

const Image = dynamic(() => import('next/image'));
const Link = dynamic(() => import('next/link'));

import styles from './Footer.module.scss';

import logo from '../../../public/assets/icons/logo.svg';
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
          <Image
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
          <Image
            src={logo}
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
