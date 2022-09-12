import React from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import About from './containers/About';
import './App.css';
import GymProject from './components/GymProject';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {

  const projectButtonClick = () => {
    window.location.pathname("/portfolio/gym_app")
  }

  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/portfolio" element={<HomeContainer />} />
          <Route exact path="/portfolio/about" element={<About />} />
          {/* <Route exact path="/portfolio/projects" element={<Projects projectButtonClick={projectButtonClick} />} /> */}
          {/* <Route exact path="/portfolio/gym_app" element={<GymProject />} /> */}
          {/* <Route exact path="/portfolio/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
