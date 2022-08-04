import React from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import About from './containers/About';
import Contact from './containers/Contact';
import './App.css';
import GymProject from './components/GymProject';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HomeContainer />
      <About />
      <Projects />
      <Contact />
      <GymProject />
      </div>
  );
}

export default App;
