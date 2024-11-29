import styles from './Projects.module.css';
import strongFit from '../assets/strongfit-gif-ezgif.com-optimize (1).gif';
import brasaGourmet from '../assets/brasa_gourmet_grill-ezgif.com-optimize.gif';
import agnusDei from '../assets/agnus-dei-gif-ezgif.com-optimize.gif';
import zoeExpress from '../assets/zoe-express-gif-ezgif.com-optimize (1).gif';
import arrow from '../assets/arrow.svg';
import github from '../assets/green-github.svg';
import reactsvg from '../assets/react-javascript-js-framework-facebook-svgrepo-com.svg';
import sass from '../assets/scss-svgrepo-com.svg';
import css from '../assets/css-3-svgrepo-com.svg';
import mongo from '../assets/mongodb-svgrepo-com.svg';
import nodesvg from '../assets/node-js-svgrepo-com.svg';
import tssvg from '../assets/typescript-icon-svgrepo-com.svg';
import jssvg from '../assets/javascript-svgrepo-com.svg';
import html from '../assets/html-5-svgrepo-com (1) 2.svg';
import React from 'react';
import AnimateScrollArray from '../AnimateScrollArray/AnimateScrollArray';

const Projects = () => {
  const ref = React.useRef<HTMLDivElement[]>([]);
  console.log(ref);
  return (
    <section id="projetos" className={styles.projecstDivider}>
      <div className={`container`}>
        <div className={styles.projectsTitle}>
          <h2>Meus projetos</h2>
          <p>
            Aqui estão alguns dos projetos selecionados que demonstram minha
            paixão pelo desenvolvimento front-end.
          </p>
        </div>
        <div
          className={styles.projectsGrid}
          ref={(element) => {
            if (element instanceof HTMLDivElement) ref.current?.push(element);
          }}
        >
          <AnimateScrollArray divRef={ref} />
          <div className={styles.projectsImg} data-set="left-anime">
            <img src={agnusDei} alt="website da Agnus Dei" />
          </div>
          <div className={styles.projectsContent} data-set="right-anime">
            <h3>Website Rede Agnus Dei</h3>
            <p>
              Projeto em que colaborei com um colega, responsável pelo back-end,
              enquanto desenvolvi o front-end e o design. O resultado foi uma
              interface totalmente responsiva e com um design limpo e moderno.
            </p>
            <h4>Informações do projeto</h4>
            <ul>
              <li>
                <span>tecnologia</span>
                <div className={styles.stack}>
                  <img src={html} alt="HTML" />
                  <img src={sass} alt="Sass" />
                  <img src={tssvg} alt="Typescript" />
                  <img src={reactsvg} alt="React" />
                </div>
              </li>
              <li>
                <span>função</span>
                <div>Front-end/Designer</div>
              </li>
            </ul>
            <a href="https://www.redeagnusdei.com.br" target="_blank">
              Projeto
              <img src={arrow} />
            </a>
          </div>
        </div>
        <div
          className={styles.projectsGrid}
          ref={(element) => {
            if (element instanceof HTMLDivElement) ref.current?.push(element);
          }}
        >
          <div className={styles.projectsImg} data-set="left-anime">
            <img src={zoeExpress} alt="website da ZOÉ Express" />
          </div>
          <div className={styles.projectsContent} data-set="right-anime">
            <h3>Projeto ZOÉ EXPRESS</h3>
            <p>
              Projeto para uma empresa de entregas, onde colaborei com um colega
              no desenvolvimento do back-end. Fiquei responsável pelo front-end
              e design. Foi o meu primeiro projeto real, mas acabou sendo
              descontinuado devido ao fechamento da empresa.
            </p>
            <h4>Informações do projeto</h4>
            <ul>
              <li>
                <span>tecnologia</span>
                <div className={styles.stack}>
                  <img src={html} alt="HTML" />
                  <img src={css} alt="CSS" />
                  <img src={jssvg} alt="JavaScript" />
                </div>
              </li>
              <li>
                <span>função</span>
                <div>Front-end/Designer</div>
              </li>
            </ul>
            <div className={styles.projectsContentLinks}>
              <a href="https://zoe-express.vercel.app/" target="_blank">
                Live Demo <img src={arrow} />
              </a>{' '}
              <a
                href="https://github.com/RDSMatheus/Zoe-publico"
                target="_blank"
              >
                github <img src={github} />
              </a>
            </div>
          </div>
        </div>
        <div
          className={styles.projectsGrid}
          ref={(element) => {
            if (element instanceof HTMLDivElement) ref.current?.push(element);
          }}
        >
          <div className={styles.projectsImg} data-set="left-anime">
            <img
              src={brasaGourmet}
              alt="website do restaurante Brasa Gourmet Grill"
            />
          </div>
          <div className={styles.projectsContent} data-set="right-anime">
            <h3>Projeto restaurante Brasa Gourmet Grill</h3>
            <p>
              Projeto de uma landing page de um restaurante, focando em uma
              interface atraente, responsiva e otimizada para a experiência do
              usuário.
            </p>
            <h4>Informações do projeto</h4>
            <ul>
              <li>
                <span>tecnologia</span>
                <div className={styles.stack}>
                  <img src={html} alt="HTML" />
                  <img src={sass} alt="Sass" />
                  <img src={tssvg} alt="Typescript" />
                </div>
              </li>

              <li>
                <span>função</span>
                <div>Front-end/Designer</div>
              </li>
            </ul>
            <div className={styles.projectsContentLinks}>
              <a href="https://brasagourmetgrill.vercel.app/" target="_blank">
                Live Demo <img src={arrow} />
              </a>{' '}
              <a
                href="https://github.com/RDSMatheus/brasagourmetgrill"
                target="_blank"
              >
                github <img src={github} />
              </a>
            </div>
          </div>
        </div>
        <div
          className={styles.projectsGrid}
          ref={(element) => {
            if (element instanceof HTMLDivElement) ref.current?.push(element);
          }}
        >
          <div className={styles.projectsImg} data-set="left-anime">
            <img src={strongFit} alt="website StrongFit academia" />
          </div>
          <div className={styles.projectsContent} data-set="right-anime">
            <h3>Projeto StrongFit Academia</h3>
            <p>
              Projeto fullstack desenvolvido para uma academia, com
              funcionalidades que permitem receber pré-matrículas e formulários
              de contato. O visual é envolvente, adaptado para diferentes
              dispositivos e focado em garantir uma experiência de navegação
              fluida.
            </p>
            <h4>Informações do projeto</h4>
            <ul>
              <li>
                <span>tecnologia</span>
                <div className={styles.stack}>
                  <img src={html} alt="HTML" />
                  <img src={css} alt="CSS" />
                  <img src={reactsvg} alt="React" />
                  <img src={nodesvg} alt="Node" />
                  <img src={mongo} alt="MongoDB" />
                </div>
              </li>
              <li>
                <span>função</span>
                <div>Desenvolvedor fullstack</div>
              </li>
            </ul>
            <div className={styles.projectsContentLinks}>
              <a href="https://strongfit.vercel.app/" target="_blank">
                Live Demo <img src={arrow} />
              </a>{' '}
              <a
                href="https://github.com/RDSMatheus/strong-fit"
                target="_blank"
              >
                github <img src={github} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
