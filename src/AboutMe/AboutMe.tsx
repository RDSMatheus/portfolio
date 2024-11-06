import styles from './AboutMe.module.css';
import pic from '../assets/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home.jpg';
const AboutMe = () => {
  return (
    <section className={styles.aboutMeDivider} id="sobre">
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
          <a href="https://download1078.mediafire.com/ev44nslqozpg-fxNog8BNT7UZHwcjWQtfPostapbst9e8nMVRHtMdkbPbHXdsKdhYXtm1bbui8pS5NFCGN5UXeLx75p8YiJSIaV0uhg-OSdShZ2kcQNwnBowVuDqlH5gC1GTuc8X14M03yvdRdQQCBsZopgp5FEdrJf3qyFAZmuN/wa1sv17a9mi9dxn/Profile.pdf">
            currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
