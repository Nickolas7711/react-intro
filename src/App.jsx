import React from 'react';
import './style.js';
import { HeaderGrid, Item, SideBarGrid, MainGrid, FooterGrid, MainWrapp } from './style.js';
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import BoxCardQuiz from './pages/BoxCardQuiz.jsx';




function App() {
 
  return (    
    <MainWrapp container>
  <HeaderGrid item xs={12}>  
    <Header />
  </HeaderGrid>
  <SideBarGrid item xs={3}>
   <SideBar />
  </SideBarGrid>
  <MainGrid item xs={9}>
    <BoxCardQuiz />
  </MainGrid>
  <FooterGrid item xs={12}>
    <Item>Footer</Item>
  </FooterGrid>
</MainWrapp>
  );
}

export default App;
