import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import React from 'react';
import MenuHamburguer from './MenuHamburguer/MenuHamburguer';
import { debounce } from './../debounce';
import { useData } from '../Context';
import BilingualButton from '../Components/BilingualButton/BilingualButton';
import { throttle } from '../throttle';

const Header = () => {
  const header = React.useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = React.useState(false);
  const location = useLocation();
  const { lang, pageText } = useData();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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

    window.addEventListener('scroll', debounce(handleScroll, 500));
    window.addEventListener('scroll', throttle(handleScroll, 500));
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (pageText)
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
                <Link to="/#sobre">{pageText.header['about-nav'][lang]}</Link>
              </li>
              <li>
                <Link to="/#projetos">
                  {pageText.header['projects-nav'][lang]}
                </Link>
              </li>
              <li>
                <Link to="/#contato">
                  {pageText.header['contact-nav'][lang]}
                </Link>
              </li>
              <li>
                <BilingualButton />
              </li>
            </ul>
          </nav>
          <MenuHamburguer />
        </div>
      </header>
    );
};

export default Header;
