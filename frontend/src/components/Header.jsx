import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaUser, FaBars } from 'react-icons/fa'
import insightmhglogo from '../assets/insightmhglogo.jpg'

const Header = () => {
    return (
        <header>
            <Navbar variant='light' expand='md' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={insightmhglogo}
                            alt='Insight Mental Health Group'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'>
                        <FaBars />
                    </Navbar.Toggle>
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
