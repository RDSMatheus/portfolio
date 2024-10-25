import React from 'react';
import styles from './Skills.module.css';
const Skills = () => {
  return (
    <section className={styles}>
      <h2>Minhas habilidades</h2>
      <div>
        <p>
          Estou constantemente buscando aprimorar minhas habilidades e expandir
          meus conhecimentos. Estas são as tecnologias de front-end nas quais
          tenho sólido domínio:
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
    </section>
  );
};

export default Skills;
