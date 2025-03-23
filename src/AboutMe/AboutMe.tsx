import styles from './AboutMe.module.css';
import pic from '../assets/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home.jpg';
import React from 'react';
import AnimateScroll from '../AnimateScroll/AnimateScroll';
import { useData } from '../Context';

const AboutMe = () => {
  const { lang, pageText } = useData();
  const ref = React.useRef<HTMLDivElement | null>(null);

  if (pageText)
    return (
      <section className={styles.aboutMeDivider} id="sobre">
        <AnimateScroll divRef={ref} />
        <div ref={ref} className={`${styles.aboutMeGrid} container`}>
          <div className={styles.aboutMePic} data-set="left-anime">
            <img src={pic} alt="Homem codando" />
          </div>
          <div data-set="right-anime">
            <h2>{pageText.about.heading[lang]}</h2>
            <h3>{pageText.about.subheading[lang]}</h3>
            <p>{pageText.about.paragraph[lang]}</p>
            <a href="/Currículo Matheus Ramos - Tecnologia" target="_blank">
              {pageText.about.button[lang]}
            </a>
          </div>
        </div>
      </section>
    );
};

export default AboutMe;
