import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import separator1 from './imagens/separator1.svg';
import separator2 from './imagens/separator2.svg';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={separator1} alt="separador"/>
      <About />
      <img src={separator2} alt="separador"/>
      <Projects />
      <img src={separator1} alt="separador"/>
    </div>
  );
}

export default App;
