import React from 'react';
import styles from './Skills.module.css';
import AnimateScroll from '../AnimateScroll/AnimateScroll';

const Skills = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  return (
    <section className={styles.skillsDivider}>
      <div className={`${styles.skillsGrid} container`} ref={ref}>
        <AnimateScroll divRef={ref} />
        <h2 data-set="left-anime">Minhas habilidades</h2>
        <div data-set="right-anime">
          <p>
            Estou constantemente buscando aprimorar minhas habilidades e
            expandir meus conhecimentos. Estas são as tecnologias de front-end
            nas quais tenho sólido domínio:
          </p>
          <ul>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>Scss</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
