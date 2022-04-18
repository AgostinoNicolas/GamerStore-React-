import React from 'react';
import { Navbar, Container,Nav,} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () =>{
    return(
        <header>
            <Navbar className='bg-nav' expand="lg">
                <Container>
                    <Navbar.Brand className='logo'><Link className='linkNavLogo' to='/'>Gamer Store
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">            
                    <Nav className="me-auto">
                         <Nav.Link><Link className='linkNav' to='/'>Productos
                        </Link></Nav.Link>
                        <Nav.Link><Link className='linkNav' to='categoria/1'>Notebook
                        </Link></Nav.Link>
                        <Nav.Link><Link className='linkNav' to='categoria/2'>Mouse
                        </Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    );
}
export default NavBar;