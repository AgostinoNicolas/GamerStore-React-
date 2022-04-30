import { Container, Row , Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import EmptyCart from "./EmptyCart";
import Cart from "./Cart"

const CartContainer = () =>{
    const test = useContext(CartContext)
    
    return(
        <Container fluid>
            <Row>
                <Col className="containerTitleCart">
                    <h3>TU CARRITO</h3>
                </Col>
            </Row>
            {
                test.cartList.length <= 0 ? (<EmptyCart />) : (<Cart />)      
            }
        </Container>
    );
}

export default CartContainer;