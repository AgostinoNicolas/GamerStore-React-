import { Row , Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Cart = () =>{
    const test = useContext(CartContext)

    return(
        <Row>
            <Col className="containerContinueShop">
                <Link className="btnContinueShoplLink" to='/'>
                    <Button className="btnContinueShop" variant="contained" >
                        Continuar Comprando
                    </Button> 
                </Link>
            </Col>
            <Col className="containerRemoveCart">
                {
                    test.cartList.length > 0 &&(
                        <Button className="emptyCart" onClick={test.removeCart} variant="contained" color="secondary">
                            Vaciar Carrito
                        </Button>
                    )
                }
            </Col>
            <div>
                {
                    test.cartList.map(item =>
                        <Row className="containerItemCart" key={item.idItem}>
                            <Col>
                                <img className="imgCart" src={item.imgItem} /> 
                            </Col>
                            <Col>
                                <b>{item.nameItem}</b>
                            </Col>
                            <Col>
                                <div>
                                    <p>2 item</p>
                                    <p>Precio: ${item.costItem}</p>
                                </div>
                            </Col>
                            <Col>
                                <Button className="btnDeleteItem" onClick={()=> test.deleteItem(item.idItem)} variant="contained" color="secondary">
                                    Eliminar
                                </Button>
                            </Col>
                        </Row>    
                    )
                }       
            </div>
        </Row>
    );
}

export default Cart;