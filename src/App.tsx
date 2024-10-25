import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import AboutMe from './AboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Intro />
      <AboutMe />
    </BrowserRouter>
  );
}

export default App;
