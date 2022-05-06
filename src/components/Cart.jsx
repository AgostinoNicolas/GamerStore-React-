import { Row , Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import OrderSummary from "./OrderSummary";


const Cart = () =>{
    const test = useContext(CartContext)

    return(
        <>
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
            </Row>
            <div className="containerCart" >
                    <div className="containerItemCart">
                        {
                            test.cartList.map(item =>
                                <Row className="itemCart" key={item.idItem}>
                                    <Col>
                                        <img className="imgCart" src={item.imgItem} /> 
                                    </Col>
                                    <Col>
                                        <b>{item.nameItem}</b>
                                    </Col>
                                    <Col>
                                        <div className="containerprice">
                                            <p>{item.qtyItem} item(s) / ${item.costItem} each</p>
                                            <p>${test.calcTotalPerItem(item.idItem)}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Button className="btnDeleteItem" onClick={()=> test.deleteItem(item.idItem)} variant="contained" color="secondary">
                                            <DeleteForeverIcon className="DeleteForeverIcon" />
                                        </Button>
                                    </Col>
                                </Row>    
                            )
                        }       
                    </div>
                    {
                        test.cartList.length > 0 && (<OrderSummary />)
                    }
            </div>
        </>
        
    );
}

export default Cart;