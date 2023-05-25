import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiMenu, BiX } from 'react-icons/bi';
import insightmhglogo from '../assets/insightmhglogo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

return (
  <header>
    <Navbar variant='light' expand={false} expanded={showMenu}>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={insightmhglogo} alt='Insight Mental Health Group' />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={toggleMenu}
          aria-controls='basic-navbar-nav'
          aria-expanded={showMenu}
        >
          {showMenu ? <BiX /> : <BiMenu />}
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/phq9form' style={{ fontWeight: 'bold' }} onClick={toggleMenu}>
              PHQ-9 Form
            </Nav.Link>
            <Nav.Link as={Link} to='/gad7form' style={{ fontWeight: 'bold' }} onClick={toggleMenu}>
              GAD-7 Form
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);
};

export default Header;