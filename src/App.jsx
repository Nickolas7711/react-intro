import React from 'react';
import './style.js';
import NavState from './context/navState';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer.jsx';
import { FooterGrid, MainGrid, MainWrapp } from './style.js';
import MainContent from './components/MainContent.jsx';




function App() {

  return ( 
    <MainWrapp container>
    <NavState>
      <MainMenu />
    </NavState>
      < MainGrid item xs={8}>
        < MainContent />
      </MainGrid>
    < FooterGrid item xs={12}>
    <Footer />
    </FooterGrid>
        </ MainWrapp>   
    
  );
}

export default App;