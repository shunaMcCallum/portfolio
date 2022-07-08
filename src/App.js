import React from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HomeContainer />
      </div>
  );
}

export default App;
