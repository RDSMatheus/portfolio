import styles from './Contact.module.css';
import github from '../assets/green-github.svg';
import linkedin from '../assets/bxl-linkedin.svg.svg';
import Input from '../Components/Input/Input';
import React from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../Components/Modal/Modal';
import { useData } from '../Context';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isActive, setIsActive] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');
  const [img, setImg] = React.useState(false);
  const form = React.useRef<HTMLFormElement | null>(null);
  const ref = React.useRef<HTMLElement | null>(null);
  const { lang, pageText } = useData();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setOpenModal(true);
      setImg(false);
      setModalMessage('Insira seu nome');
      return;
    }

    if (!subject) {
      setOpenModal(true);
      setImg(false);
      setModalMessage('Insira um assunto');
      return;
    }

    if (!email) {
      setOpenModal(true);
      setImg(false);
      setModalMessage('Insira seu email');
      return;
    }

    if (!message) {
      setOpenModal(true);
      setImg(false);
      setModalMessage('Insira sua messagem');
      return;
    }
    try {
      setLoading(true);
      if (form.current) {
        await emailjs
          .sendForm(
            import.meta.env.VITE_KEY,
            import.meta.env.VITE_TEMPLATE,
            form.current,
            {
              publicKey: import.meta.env.VITE_PUBLIC,
            },
          )
          .then(
            () => {
              setOpenModal(true);
              setModalMessage('Mensagem enviada com sucesso!');
              setImg(true);
              setName('');
              setEmail('');
              setSubject('');
              setMessage('');
            },
            (error) => {
              setModalMessage(error.text);
              setImg(false);
            },
          );
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  if (pageText)
    return (
      <footer
        className={`${styles.contactGrid} container`}
        id="contato"
        ref={ref}
      >
        <h2>{pageText.contact.heading[lang]}</h2>
        <div className={styles.contactInfo}>
          <div>
            <h3
              style={{
                maxWidth: `${lang === 'pt' ? '15ch' : '10ch'}`,
              }}
            >
              {pageText.contact.title.first[lang]}
              <span> {pageText.contact.title.detail[lang]} </span>
              {pageText.contact.title.last[lang]}
            </h3>
            <div className={styles.contactLinks}>
              <a
                href="https://www.linkedin.com/in/matheusramos-dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/RDSMatheus"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={github} alt="Github" />
              </a>
            </div>
          </div>
        </div>

        <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
          <Input
            id="name"
            label={pageText.contact.form.name[lang]}
            setValue={setName}
            value={name}
            name="from_name"
          />
          <Input
            id="email"
            label="Email"
            setValue={setEmail}
            value={email}
            name="email"
          />
          <Input
            id="subject"
            name="subject"
            label={pageText.contact.form.subject[lang]}
            setValue={setSubject}
            value={subject}
          />
          <div
            className={`${styles.contactTextArea} ${
              isActive ? styles.active : ''
            }`}
          >
            <textarea
              name="message"
              id="message"
              onChange={(e) => {
                setMessage(e.target.value);
                setIsActive(e.target.value !== '');
              }}
              onFocus={() => setIsActive(true)}
              onBlur={(e) => setIsActive(e.target.value !== '')}
              value={message}
            ></textarea>
            <label htmlFor="message">
              {pageText.contact.form.message[lang]}
            </label>
          </div>
          {loading ? (
            <button disabled>Enviando...</button>
          ) : (
            <button>{pageText.contact.form.button[lang]}</button>
          )}
        </form>
        <p>© 2024 Matheus Ramos</p>
        {openModal && (
          <Modal
            img={img}
            message={modalMessage}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </footer>
    );
};

export default Contact;
