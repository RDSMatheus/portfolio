import styles from './Intro.module.css';
import pic from '../assets/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home.jpg';
import linkedin from '../assets/bxl-linkedin.svg.svg';
import github from '../assets/bxl-github.svg.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import AnimateIntro from './AnimateIntro/AnimateIntro';

const Intro = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  return (
    <main className={`${styles.introGrid} container`}>
      <AnimateIntro divRef={ref} />
      <div ref={ref}>
        <h1>
          <span>Olá,</span>
          <span> eu sou matheus Ramos</span>
        </h1>
        <h2>Desenvolvedor front-end</h2>
        <p>
          Desenvolvedor front-end capixaba apaixonado por criar sites acessíveis
          e fáceis de usar.
        </p>
        <div className={styles.contactInfo}>
          <Link to="/#contato" className={styles.contactInfoButton}>
            Contato
          </Link>{' '}
          <a
            href="https://github.com/RDSMatheus"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-r-d-s/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
      <img src={pic} alt="Homem codando" />
    </main>
  );
};

export default Intro;
