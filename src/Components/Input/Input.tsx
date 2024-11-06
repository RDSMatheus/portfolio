import React from 'react';
import styles from './Input.module.css';

interface InputI {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  label: string;
  name: string;
}

const Input = ({ value, setValue, id, label, name }: InputI) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={`${styles.input} ${isActive ? styles.inputActive : ''} `}>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsActive(e.target.value !== '');
        }}
        onFocus={() => setIsActive(true)}
        onBlur={(e) => setIsActive(e.target.value !== '')}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
