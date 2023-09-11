import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MenuContext } from '../../context/navState';
import { Menu, MenuLink } from '../../style';

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink>Головна</MenuLink>
      <MenuLink>Вікторини</MenuLink>
      <MenuLink>Про сайт</MenuLink>
      <MenuLink>Контакт</MenuLink>
    </>
  ),
};
