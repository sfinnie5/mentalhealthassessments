import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaUser} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <Navbar style={{backgroundColor: '#848b79'}} variant='dark' expand='md' collapseOnSelect >
            <Container>
                <Navbar.Brand href='/'>Insight Mental Health Group</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/login'>
                            <FaUser /> Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
