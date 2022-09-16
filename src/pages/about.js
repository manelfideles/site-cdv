import Link from 'next/link';

import styles from 'styles/About.module.scss';

export default function About() {
  return (
    <main className={styles.aboutWrapper}>
      <h3>About The Lab</h3>
      <p>
        The Computational Design and Visualization Lab. (CDV) is a
        research laboratory of the Cognitive and Media Systems Group (CMS)
        of the Centre of Informatics and Systems of the University of Coimbra
        (CISUC). Created in January of 2013 the CDV Lab. is a multidisciplinary
        research lab that brings together Computer Scientists, Graphic
        Designers, New Media Artists, Mathematicians and Biologists.
        Our areas of expertise include:
      </p>
      <ul>
        <li>
          <span>Nature Inspired Computing</span> — Genetic Programming;
          Evolutionary Computation; Swarm Intelligence; A-Life;
        </li>
        <li>
          <span>Computational Creativity</span> — Autonomous Creative Systems;
          Computer Aided Creativity;
        </li>
        <li>
          <span>Computational Aesthetics</span> — Aesthetic Measures;
          Feature Extraction; Style Identification;
          Content Based Image Retrieval;
        </li>
        <li>
          <span>Computer Art and Design</span> — Evolutionary Art and Design;
          Generative Art and Design; Dynamic Identities;
        </li>
        <li>
          <span>Information Visualization</span> — Storytelling;
          Information Aesthetics; Intervention Design;
          Visualization of traffic, Transport Systems and Networks;
          Visualization of Big Data;
        </li>
      </ul>

      <h3>Funded Projects</h3>
      <ul>
        <li>
          <span>ConCreTe</span> — Concept Creation Technology,
          7th Framework Programme - ICT, 3.215.960€,
          local budget 421.909€, 2013-2016.
        </li>
        <li>
          <span>VisualyzARt</span> — Ferramenta de programação visual para
          realidade aumentada e interfaces naturais de utilizador,
          QREN 23201, QREN, 1.327.380€, local budget 106.658€, 2013-2015.
        </li>
        <li>
          <span>RECARDI</span> — REde de Cultura e ARte DIgital, QREN 22997,
          QREN, 1.282.400€, local budget 104.943€, 2012-2015.
        </li>
        <li>
          <span>Sonae Viz</span> — Big Data Visualization for retail,
          Sonae, local budget 40.000€, 2013-2016.
        </li>
        <li>
          <span>SBIRC</span> — Style Based Image Classification and Aesthetics,
          PTDC/EIA EIA/115667/2009, FCT, 94.420€, 2011-2013.
        </li>
        <li>
          <span>HPCOLSI</span> — High-Performance Computing over the Large-Scale Internet,
          PTDC/EIA-EIA/102212/2008, 127.700€, 2010-2013.
        </li>
        <li>
          <span>iCIS</span> — Intelligent Computing in the Internet of Services,
          CENTRO-07-ST24-FEDER-002003, QREN,
          Programa Operacional Regional do Centro, 1.000.000€, 2013-2015.
        </li>
        <li>
          <span>COSMO</span> — COllaborative System for Mobility Optimization,
          PTDC/EIA-EIA/108785/2008, FCT, 85.380€, 2010-2013.
        </li>
        <li>
          <span>SUM</span> — Observação e compreensão da dinâmica do movimento humano,
          PTDC/EIA-EIA/113933/2009, FCT, 70.792€, 2010-2013.
        </li>
        <li>
          <span>CityMotion</span> — Platform for integrated mobility analysis
          using heterogeneous data about the city, Universidade de Coimbra,
          financiado através do Programa MIT Portugal — FCT, 110.000€, 2008-2010.
        </li>
      </ul>

      <h3>Collaborations</h3>
      <ul className={styles.collaborations}>
        <li>
          <Link href='https://www.r2design.pt/'>
            R2
          </Link>
        </li>
        <li>
          <Link href='https://www.fba.pt/'>
            Ferrand, Bicker & Associados (FBA.)
          </Link>
        </li>
        <li>
          <Link href='https://www.udc.es/'>
            Universidade da Coruña
          </Link>
        </li>
        <li>
          <Link href='https://web.mit.edu/'>
            Massachusetts Institute of Technology (MIT)
          </Link>
        </li>
        <li>
          <Link href='https://smart.mit.edu/'>
            Singapore-MIT Alliance for Research and Technology (SMART)
          </Link>
        </li>
        <li>
          <Link href='http://www.lnxresearch.com/'>
            Lnx Research
          </Link>
        </li>
        <li>
          <Link href='https://ydreamsglobal.com.br/site/'>
            YDreams
          </Link>
        </li>
        <li>
          <Link href='https://www.sonae.pt/pt/'>
            Sonae
          </Link>
        </li>
      </ul>

      <h3>Working with us</h3>
      <details>
        <summary>Are you a student?</summary>
        <p>
          Our door is always open to bright,
          hardworking and motivated students.
          If you want to join us, send us a short letter
          clearly identifying your motivation,
          intent and expertise.
        </p>
        <p>
          Open positions as well as PhD and
          MSc thesis proposals are announced in the news.
          We welcome your application.
          To apply send an e-mail to cdvlab[at]dei.uc.pt with
          the following subject line: 'CDV Lab.: Application'.
        </p>
      </details>
      <details>
        <summary>Are you a researcher, institution or company?</summary>
        <p>
          We are open to project proposals and ideas
          within our scope of intervention.
          Contact us by sending an e-mail to cdvlab[at]dei.uc.pt with
          the following subject line: 'CDV Lab.: Project Proposal'.
        </p>
      </details>
    </main>
  )
}
