import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MenuContext } from '../../context/navState';
import { Menu, MenuLink, MenuLinkWrapp } from './style';

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <MenuLinkWrapp>
      <MenuLink>
        <Link to='/quizz'>Вікторини</Link>
      </MenuLink>
      <MenuLink>
        <Link to='/quizz/create-quizz'>Створити вікторину</Link>
      </MenuLink>
      <MenuLink>
        <Link to='/quizz/favorite-quizzes'>Улюблені вікторини</Link>
      </MenuLink>
      <MenuLink>
        <Link to='/quizz/contact-developer'>Контакти розробника</Link>
      </MenuLink>
    </MenuLinkWrapp>
  ),
};
