import styles from './AboutMe.module.css';
import pic from '../assets/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home.jpg';
import React from 'react';
import AnimateScroll from '../AnimateScroll/AnimateScroll';
const AboutMe = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  return (
    <section className={styles.aboutMeDivider} id="sobre">
      <AnimateScroll divRef={ref} />
      <div ref={ref} className={`${styles.aboutMeGrid} container`}>
        <div className={styles.aboutMePic} data-set="left-anime">
          <img src={pic} alt="Homem codando" />
        </div>
        <div data-set="right-anime">
          <h2>sobre mim</h2>
          <h3>Quem sou eu?</h3>
          <p>
            Sou Matheus Ramos, atualmente cozinheiro em uma lanchonete, mas em
            transição para o mundo da tecnologia, com foco em desenvolvimento
            front-end. Nos meus momentos livres, sou apaixonado por jogos e
            estou sempre explorando novas ferramentas e tecnologias.
          </p>
          <a href="/Profile.pdf" target="_blank">
            currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
