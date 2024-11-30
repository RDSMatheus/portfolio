import React from 'react';
import { useData } from '../../Context';
import brazil from '../../assets/flag-for-brazil-svgrepo-com.svg';
import usa from '../../assets/usa-svgrepo-com.svg';
import style from './BilingualButton.module.css';

const BilingualButton = () => {
  const [langChanger, setLangChanger] = React.useState(false);
  const { setLang } = useData();

  function handleClick() {
    setLangChanger(!langChanger);
    if (langChanger) {
      setLang('en');
    } else setLang('pt');
  }
  return (
    <button
      onClick={handleClick}
      className={`${style.toggle} ${langChanger ? style.toggled : ''}`}
    >
      <span>
        <img src={brazil} alt="portugues" />
      </span>
      <span>
        <img src={usa} alt="inglês" />
      </span>
    </button>
  );
};

export default BilingualButton;
