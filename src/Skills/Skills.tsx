import React from 'react';
import styles from './Skills.module.css';
import AnimateScroll from '../AnimateScroll/AnimateScroll';
import { useData } from '../Context';

const Skills = () => {
  const { pageText, lang } = useData();
  const ref = React.useRef<HTMLDivElement | null>(null);

  if (pageText)
    return (
      <section className={styles.skillsDivider}>
        <div className={`${styles.skillsGrid} container`} ref={ref}>
          <AnimateScroll divRef={ref} />
          <h2 data-set="left-anime">{pageText?.skills.heading[lang]}</h2>
          <div data-set="right-anime">
            <p>{pageText.skills.paragraph[lang]}</p>
            <ul>
              {pageText.skills.list[lang].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Skills;
