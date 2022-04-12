import React from 'react';
import { Navbar, Container,Nav,} from 'react-bootstrap';
import CartWidget from './CartWidget';


const NavBar = () =>{
    return(
        <header>
            <Navbar className='bg-nav' expand="lg">
                <Container>
                    <Navbar.Brand className='logo' href="#home">Gamer Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">            
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Categoría 1</Nav.Link>
                        <Nav.Link href="#link">Categoría 2</Nav.Link>
                        <Nav.Link href="#link">Categoría 3</Nav.Link>
                        <Nav.Link href="#link">Categoría 4</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    );
}
export default NavBar;