import React, { useRef, useContext } from 'react';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';
import { Logo, Navbar, Navigation } from './style';
import SearchAppBar from './SearhAppBar';
import { HeaderGrid } from '../../style';

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    < HeaderGrid item xs={12} ref={node}>
      < Navbar>
        <Navigation>
          < HamburgerButton />
          < Logo>QUIZZE</Logo>
        </Navigation>
        < SearchAppBar />
      </Navbar>
      < SideMenu />
    </HeaderGrid>
  );
};

export default MainMenu;
