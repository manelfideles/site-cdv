import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <a href='/'>
          <Image src='/assets/icons/logo.svg' height={115} width={150} />
        </a>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">People</a>
          </li>
          <li>
            <a href="/">Research</a>
          </li>
          <li>
            <a href="/">Publications</a>
          </li>
        </ul>
      </div>
      <div>
        <a href='https://www.google.com/maps/place/Departamento+de+Engenharia+Inform%C3%A1tica+-+FCTUC/@40.1859758,-8.4164071,17z/data=!4m7!1m4!3m3!1s0xd22f8c2c7cbeeb7:0x400ebbde49031d0!2sCoimbra!3b1!3m1!1s0x0:0xd3822ec1d359eb52'>
          <p>Departamento de Engenharia Informática</p>
          <p>Faculdade de Ciências e Tecnologia</p>
          <p>Universidade de Coimbra</p>
          <p>Pólo II - Pinhal de Marrocos</p>
          <p>3030-290 Coimbra</p>
        </a>
      </div>
      <div className={styles.socials}>
        <a href="https://www.facebook.com/cdvlaboratory/">
          <Image src='/assets/icons/facebook.svg' height={25} width={25} />
        </a>
        <a href="https://www.instagram.com/cdv.lab/">
          <Image src='/assets/icons/instagram.svg' height={25} width={25} />
        </a>
        <a href="https://vimeo.com/cdvlab">
          <Image src='/assets/icons/vimeo.svg' height={25} width={25} />
        </a>
      </div>
    </footer>
  )
}
