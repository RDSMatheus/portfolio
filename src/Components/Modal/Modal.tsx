import React from 'react';
import style from './Modal.module.css';
import close from '../../assets/close-button-svgrepo-com.svg';
import ok from '../../assets/ok-svgrepo-com.svg';
import erro from '../../assets/error-svgrepo-com.svg';

interface ModalI {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  message: string;
  img: boolean;
}

const Modal = ({ setOpenModal, openModal, message, img }: ModalI) => {
  return (
    <div className={style.modalBg}>
      <div className={style.modal}>
        <img src={img ? ok : erro} className={style.imgConfirm} />
        <button onClick={() => setOpenModal(!openModal)}>
          <img src={close} />
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
