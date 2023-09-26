import React from 'react';
import { Outlet } from 'react-router-dom';
import NavState from '../../context/navState';
import MainMenu from '../Header/MainMenu';
import Footer from '../Footer/Footer';
import {
  FooterGrid,
  Item,
  MainGrid,
  MainWrapp,
} from '../../style';

function Template() {
  return (
    <MainWrapp container>
      <NavState>
        <MainMenu />
      </NavState>
      < MainGrid item xs={12}>
        <Item>
          <Outlet />
        </Item>
      </MainGrid>
      < FooterGrid item xs={12}>
        <Footer />
      </FooterGrid>
    </ MainWrapp>
  );
}

export default Template;
