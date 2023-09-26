import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import AvatarFooter from './AvatarFooter';
import { Logo } from '../Header/style';
import { FooterContent, Telephone } from './styled';

function Footer() {
  return (
    <FooterContent>
        <AvatarFooter />
      <Telephone>
      <a href="tel:+380994902539">
      <FontAwesomeIcon icon={faPhone} /> +38(099)490-25-39</a>
      </Telephone>
      <Logo>QUIZZE</Logo>
    </FooterContent>
  );
}

export default Footer;
