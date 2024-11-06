import { Link, useLocation } from 'react-router-dom';
import style from './MenuHamburguer.module.css';
import React from 'react';

const MenuHamburguer = () => {
  const [isActive, setIsActive] = React.useState(false);

  const location = useLocation();

  React.useEffect(() => {
    console.log(location.hash);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div className={style.menuContainer}>
      <button
        className={style.menuButtonWrapper}
        onClick={() => setIsActive(!isActive)}
      >
        <span
          className={`${style.menuHamburguerButton} ${
            isActive ? style.btnActive : ''
          }`}
        ></span>
      </button>

      <div
        className={`${style.menuWrapper} ${isActive ? style.menuActive : ''}`}
      >
        <nav>
          <Link to="/#sobre" onClick={() => setIsActive(!isActive)}>
            Sobre
          </Link>
          <Link to="/#projetos" onClick={() => setIsActive(!isActive)}>
            Projetos
          </Link>

          <Link to="/#contato" onClick={() => setIsActive(!isActive)}>
            Contato
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MenuHamburguer;