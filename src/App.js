import React from 'react';
import './App.css'
import HeaderContainer from './components/Header'
import NavbarContainer from './components/Navbar'
import PortfolioItem from './components/PortfolioItem'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <HeaderContainer />
      <PortfolioItem />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
