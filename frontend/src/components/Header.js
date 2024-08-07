import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/Logo.svg';

const navbarStyle = {
  backgroundColor: '#EDF8FF',
};
//props
const Header = ({ title }) => {
  //deconstruct an object
  return (
    <Navbar data-testid="navbar" style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};
export default Header;
