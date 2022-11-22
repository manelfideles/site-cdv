import dynamic from 'next/dynamic';

const Link = dynamic(() => import('next/link'));
const Input = dynamic(() => import('components/Input'));

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
    const location = locationLink.info.map(
      (info, idx) => <p key={idx}>
        {info}
      </p>);
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
          <span>{link.name}</span>
        </a>
      </Link>
    )
  }

  return (
    <footer className={styles.footer}>
      <div>
        <Input />
        <div className={styles.navigation}>
          <p>{renderSocialMediaLinks()}</p>
          <p>
            <span>© 2022</span>
            <span>CDV Lab.</span>
            <span>CMS/CISUC</span>
          </p>
        </div>
      </div>
      <ul>
        {renderNavLinks()}
      </ul>
      <div>
        {renderLocationLink()}
      </div>
    </footer>
  )
}
