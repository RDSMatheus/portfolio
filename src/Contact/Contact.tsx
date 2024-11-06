import styles from './Contact.module.css';
import github from '../assets/green-github.svg';
import linkedin from '../assets/bxl-linkedin.svg.svg';
import Input from '../Components/Input/Input';
import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isActive, setIsActive] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const form = React.useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (form.current) {
        await emailjs
          .sendForm('service_77o5bpg', 'template_fez8llk', form.current, {
            publicKey: 'kqMSsBvVV3PAYAjTY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className={`${styles.contactGrid} container`} id="contato">
      <h2>contato</h2>
      <div className={styles.contactInfo}>
        <div>
          <h3>
            Vamos <span>trabalhar </span>
            juntos!
          </h3>
          <div className={styles.contactLinks}>
            <a href="">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="">
              <img src={github} alt="Github" />
            </a>
          </div>
        </div>
      </div>

      <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
        <Input
          id="name"
          label="Nome"
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
          label="Assunto"
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
          <label htmlFor="message">Mensagem</label>
        </div>
        {loading ? (
          <button disabled>Enviando...</button>
        ) : (
          <button>Enviar</button>
        )}
      </form>
      <p>© 2024 Matheus Ramos</p>
    </footer>
  );
};

export default Contact;
