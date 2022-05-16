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
                    <Nav className='navProductos'>
                        <Link className='linkNav' to='/'>Productos</Link>
                        <Link className='linkNav' to='categoria/notebook'>Notebook</Link>
                        <Link className='linkNav' to='categoria/mouse'>Mouse</Link>
                        <Link className='linkCart' to='cart'><CartWidget /></Link>          
                    </Nav>   
                    </Navbar.Collapse>
                            
                </Container>
            </Navbar>
        </header>
    );
}
export default NavBar;