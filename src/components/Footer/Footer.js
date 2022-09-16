import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.scss';

import logo from '../../../public/assets/icons/logo.svg';
import facebookLogo from '../../../public/assets/icons/facebook.svg';
import instagramLogo from '../../../public/assets/icons/instagram.svg';
import vimeoLogo from '../../../public/assets/icons/vimeo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <Link href='/'>
          <a>
            <Image
              src={logo}
              alt='CDV Lab Logo'
              height={115}
              width={150}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href='/'>
              <a >About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>People</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Research</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Publications</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href='https://www.google.com/maps/place/Departamento+de+Engenharia+Inform%C3%A1tica+-+FCTUC/@40.1859758,-8.4164071,17z/data=!4m7!1m4!3m3!1s0xd22f8c2c7cbeeb7:0x400ebbde49031d0!2sCoimbra!3b1!3m1!1s0x0:0xd3822ec1d359eb52'>
          <a>
            <p>Departamento de Engenharia Informática</p>
            <p>Faculdade de Ciências e Tecnologia</p>
            <p>Universidade de Coimbra</p>
            <p>Pólo II - Pinhal de Marrocos</p>
            <p>3030-290 Coimbra</p>
          </a>
        </Link>
      </div>
      <div className={styles.socials}>
        <Link href='https://www.facebook.com/cdvlaboratory/'>
          <a>
            <Image
              src={facebookLogo}
              alt='CDV Lab Facebook Page'
              height={25}
              width={25}
            />
          </a>
        </Link>
        <Link href='https://www.instagram.com/cdv.lab/'>
          <a>
            <Image
              src={instagramLogo}
              alt='CDV Lab Instagram Page'
              height={25}
              width={25}
            />
          </a>
        </Link>
        <Link href='https://vimeo.com/cdvlab'>
          <a>
            <Image
              src={vimeoLogo}
              alt='CDV Lab Vimeo Page'
              height={25}
              width={25}
            />
          </a>
        </Link>
      </div>
    </footer>
  )
}
