import React, { Component } from 'react';
import './style.js';
import NavState from './context/navState';
import MainMenu from './components/Header/MainMenu.jsx';
import Footer from './components/Footer/Footer.jsx';
import { FooterGrid, Item, MainGrid, MainWrapp } from './style.js';
import Quizz from './pages/continents/Quizz.jsx';

class App extends Component {
  render() {
    return (
      <MainWrapp container>
        <NavState>
          <MainMenu />
        </NavState>
        <MainGrid item xs={12}>
          <Item>
            <Quizz />
          </Item>
        </MainGrid>
        <FooterGrid item xs={12}>
          <Footer />
        </FooterGrid>
      </MainWrapp>
    );
  }
}

export default App;
