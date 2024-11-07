import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
