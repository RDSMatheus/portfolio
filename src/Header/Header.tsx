import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import React from 'react';
import MenuHamburguer from './MenuHamburguer/MenuHamburguer';

const Header = () => {
  const header = React.useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = React.useState(false);
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
  console.log(header);

  React.useEffect(() => {
    const handleScroll = () => {
      if (header.current) {
        const headerScrollTop = header.current?.getBoundingClientRect().height;
        const windowHeight = window.scrollY - headerScrollTop;
        const triggerHeight = windowHeight - headerScrollTop > 0;
        if (triggerHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={` ${style.headerBg} ${isSticky ? style.headerSticky : ''} `}
      ref={header}
    >
      <div
        className={`${style.header} 
       container`}
      >
        <div>
          <Link to="/" className={style.logo}>
            Matheus Ramos
          </Link>
        </div>
        <nav className={style.nav}>
          <ul>
            <li>
              <Link to="/#sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/#projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/#contato">Contato</Link>
            </li>
          </ul>
        </nav>
        <MenuHamburguer />
      </div>
    </header>
  );
};

export default Header;
