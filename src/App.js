import React from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import About from './containers/About';
import Contact from './containers/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HomeContainer />
      <About />
      <Projects />
      <Contact />
      </div>
  );
}

export default App;
