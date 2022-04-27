import { useContext } from "react";
import { Container, Row , Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Button } from "@material-ui/core";

const Cart = () =>{
    const test = useContext(CartContext)

    return(
        <Container fluid>
            <Row>
                <Col><h3>YOU CART</h3></Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={test.removeCart} variant="contained" color="secondary">
                        Delete Carts
                    </Button>
                </Col>
            </Row>
            {
                test.cartList.length > 0 && (
                    <div>
                        {
                            test.cartList.map(item =>
                                <Row key={item.idItem}>
                                    <Col>
                                        <img src={item.imgItem} /> 
                                    </Col>
                                    <Col>
                                        <p>Producto: {item.nameItem}</p>
                                    </Col>
                                    <Col>
                                        <div>
                                            <p>2 item</p>
                                            <p>Precio: ${item.costItem}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Button onClick={()=> test.deleteItem(item.idItem)} variant="contained" color="secondary">
                                            Delete Item
                                        </Button>
                                    </Col>
                                </Row>    
                            )
                        }
                            
                    </div>       
                )
            }
            
        </Container>
    );
}

export default Cart;