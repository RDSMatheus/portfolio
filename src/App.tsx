import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { GlobalContext } from './Context';

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Header />
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
