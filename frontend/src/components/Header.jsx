import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import insightmhglogo from '../assets/insightmhglogo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <Navbar variant='light' expand=''>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={insightmhglogo} alt='Insight Mental Health Group' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={toggleMenu}
            aria-expanded={showMenu}
          >
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/phq9form'onClick={toggleMenu}
 style={{ fontWeight: 'bold' }}>
                PHQ-9 Form
              </Nav.Link>
              <Nav.Link as={Link} to='/gad7form'onClick={toggleMenu}
 style={{ fontWeight: 'bold' }}>
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