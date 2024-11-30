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
import { useData } from '../Context';

const Projects = () => {
  const { lang, pageText } = useData();
  const ref = React.useRef<HTMLDivElement[]>([]);
  console.log(ref);
  if (pageText)
    return (
      <section id="projetos" className={styles.projecstDivider}>
        <div className={`container`}>
          <div className={styles.projectsTitle}>
            <h2>{pageText.projects.heading[lang]}</h2>
            <p>{pageText.projects.paragraph[lang]}</p>
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
              <h3>ZOÉ EXPRESS</h3>
              <p>{pageText.projects.zoe.description[lang]}</p>
              <h4>{pageText.projects.zoe.info[lang]}</h4>
              <ul>
                <li>
                  <span>{pageText.projects.zoe.stack[lang]}</span>
                  <div className={styles.stack}>
                    <img src={html} alt="HTML" />
                    <img src={css} alt="CSS" />
                    <img src={jssvg} alt="JavaScript" />
                  </div>
                </li>
                <li>
                  <span>{pageText.projects.zoe.role[lang]}</span>
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
              <h3>Brasa Gourmet Grill</h3>
              <p>{pageText.projects.brasa.description[lang]}</p>
              <h4>{pageText.projects.brasa.info[lang]}</h4>
              <ul>
                <li>
                  <span>{pageText.projects.brasa.stack[lang]}</span>
                  <div className={styles.stack}>
                    <img src={html} alt="HTML" />
                    <img src={sass} alt="Sass" />
                    <img src={tssvg} alt="Typescript" />
                  </div>
                </li>

                <li>
                  <span>{pageText.projects.brasa.role[lang]}</span>
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
            <AnimateScrollArray divRef={ref} />
            <div className={styles.projectsImg} data-set="left-anime">
              <img src={agnusDei} alt="website da Agnus Dei" />
            </div>
            <div className={styles.projectsContent} data-set="right-anime">
              <h3>Website Rede Agnus Dei</h3>
              <p>{pageText.projects.agnus.description[lang]}</p>
              <h4>{pageText.projects.agnus.info[lang]}</h4>
              <ul>
                <li>
                  <span>{pageText.projects.agnus.stack[lang]}</span>
                  <div className={styles.stack}>
                    <img src={html} alt="HTML" />
                    <img src={sass} alt="Sass" />
                    <img src={tssvg} alt="Typescript" />
                    <img src={reactsvg} alt="React" />
                  </div>
                </li>
                <li>
                  <span>{pageText.projects.agnus.role[lang]}</span>
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
              <img src={strongFit} alt="website StrongFit academia" />
            </div>
            <div className={styles.projectsContent} data-set="right-anime">
              <h3>StrongFit</h3>
              <p>{pageText.projects.strongfit.description[lang]}</p>
              <h4>{pageText.projects.strongfit.info[lang]}</h4>
              <ul>
                <li>
                  <span>{pageText.projects.strongfit.stack[lang]}</span>
                  <div className={styles.stack}>
                    <img src={html} alt="HTML" />
                    <img src={css} alt="CSS" />
                    <img src={reactsvg} alt="React" />
                    <img src={nodesvg} alt="Node" />
                    <img src={mongo} alt="MongoDB" />
                  </div>
                </li>
                <li>
                  <span>{pageText.projects.strongfit.role[lang]}</span>
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
