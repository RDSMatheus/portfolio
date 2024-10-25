
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={`${style.header} container`}>
      <div className={style.logo}>Matheus Ramos</div>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link to="">Sobre</Link>
          </li>
          <li>
            <Link to="">Projetos</Link>
          </li>
          <li>
            <Link to="">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
