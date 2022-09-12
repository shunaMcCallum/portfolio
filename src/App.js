import React from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import About from './containers/About';
import './App.css';
import GymProject from './components/IndividualProjects/GymProject';
import HelloWorld from './components/IndividualProjects/HelloWorld';
import MusicElephant from './components/IndividualProjects/MusicElephant';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/portfolio" element={<HomeContainer />} />
          <Route exact path="/portfolio/about" element={<About />} />
          <Route exact path="/portfolio/projects" element={<Projects />} />
          <Route exact path="/portfolio/projects/the_gym" element={<GymProject />} />
          <Route exact path="/portfolio/projects/hello_world" element={<HelloWorld />} />
          <Route exact path="/portfolio/projects/music_elephant" element={<MusicElephant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
