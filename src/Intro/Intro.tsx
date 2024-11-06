import styles from './Intro.module.css';
import pic from '../assets/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home.jpg';
import linkedin from '../assets/bxl-linkedin.svg.svg';
import github from '../assets/bxl-github.svg.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <main className={`${styles.introGrid} container`}>
      <div>
        <h1>Olá, eu sou matheus Ramos</h1>
        <h2>Desenvolvedor front-end</h2>
        <p>
          Desenvolvedor front-end capixaba apaixonado por criar sites acessíveis
          e fáceis de usar.
        </p>
        <div className={styles.contactInfo}>
          <Link to="/#contato" className={styles.contactInfoButton}>
            Contato
          </Link>{' '}
          <a href="">
            <img src={github} alt="github" />
          </a>
          <a href="">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
      <img src={pic} alt="Homem codando" />
    </main>
  );
};

export default Intro;
