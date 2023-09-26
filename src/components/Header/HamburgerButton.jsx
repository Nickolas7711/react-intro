import React, { useContext } from 'react';
import { MenuContext } from '../../context/navState';
import { Bar, MenuButton } from './style';

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      className={isMenuOpen ? 'active' : ''}
      onClick={clickHandler}
    >
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

export default HamburgerButton;
