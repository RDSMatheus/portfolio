
import styles from './AboutMe.module.css';
import pic from '../assets/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home.jpg';
const AboutMe = () => {
  return (
    <section className={styles.aboutMeDivider}>
      <div className={`${styles.aboutMeGrid} container`}>
        <div className={styles.aboutMePic}>
          <img src={pic} alt="Homem codando" />
        </div>
        <div>
          <h2>sobre mim</h2>
          <h3>Quem sou eu?</h3>
          <p>
            Sou Matheus Ramos, atualmente cozinheiro em uma lanchonete, mas em
            transição para o mundo da tecnologia, com foco em desenvolvimento
            front-end. Nos meus momentos livres, sou apaixonado por jogos e
            estou sempre explorando novas ferramentas e tecnologias.
          </p>
          <button>currículo</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
