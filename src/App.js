import React from 'react';
import './App.css'
import HeaderContainer from './components/Header'
import NavbarContainer from './components/Navbar'
import PortfolioItem from './components/PortfolioItem'

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <HeaderContainer />
      <PortfolioItem />

    </div>
  );
}

export default App;
