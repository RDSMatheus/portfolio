import React from 'react';
import { useData } from '../../Context';
import brazil from '../../assets/flag-for-brazil-svgrepo-com.svg';
import usa from '../../assets/usa-svgrepo-com.svg';
import style from './BilingualButton.module.css';

const BilingualButton = () => {
  const [langChanger, setLangChanger] = React.useState(false);
  const { setLang } = useData();

  function handleClick() {
    console.log(langChanger);
    setLangChanger(!langChanger);
    if (langChanger) {
      setLang('pt');
    } else setLang('en');
  }
  return (
    <button onClick={handleClick} className={style.toggle}>
      <img src={langChanger ? brazil : usa} />
    </button>
  );
};

export default BilingualButton;
