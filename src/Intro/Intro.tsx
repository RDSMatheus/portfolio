import styles from './Intro.module.css';
import pic from '../assets/Profile picture (2).webp';
import linkedin from '../assets/bxl-linkedin.svg.svg';
import github from '../assets/bxl-github.svg.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import AnimateIntro from '../AnimateIntro/AnimateIntro';
import { useData } from '../Context';

const Intro = () => {
  const { lang, pageText } = useData();
  const ref = React.useRef<HTMLDivElement | null>(null);
  if (pageText)
    return (
      <main className={`${styles.introGrid} container`}>
        <AnimateIntro divRef={ref} />
        <div ref={ref}>
          <h1>
            <span>{pageText.intro.greeting[lang]}</span>
            <span>{pageText.intro.name[lang]}</span>
          </h1>
          <h2>{pageText.intro.name[lang]}</h2>
          <p>{pageText.intro.paragraph[lang]}</p>
          <div className={styles.contactInfo}>
            <Link to="/#contato" className={styles.contactInfoButton}>
              {pageText.intro.button[lang]}
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
