import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import Checkout from "./Checkout";
import { CartContext } from "./CartContext";
import { Container, Col, Row } from "react-bootstrap";
import swal from "sweetalert";

const ItemDetail = ({ items }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);
 

    const onAdd = (qty) => {
        swal ( "Se agregaron " + qty + " articulos a Tu Carrito." , { 
            button: false,
            timer: "1500",
          } ) ;
        setItemCount(qty);
        test.addToCart(items, qty);
    }

    return(
        <Container>
            <Row className="containerItemDetail">
                <Col>
                    <img className="itemDetailImg" src={items.img} />
                </Col>
                <Col>
                    <div className="itemDetailDescription">
                        <h3>{items.nombre}</h3>
                        <p>{items.desc}</p>
                        <div className="itemDetail">
                            <p><b>Procesador:</b> {items.procesador}</p>
                            <p><b>Memoria:</b> {items.memoria}</p>
                            <p><b>Almacenamiento:</b> {items.almacenamiento}</p>
                            <p><b>Pantalla:</b> {items.pantalla}</p>
                        </div>
                        <p className="detailPriceTotal">Precio: ${items.precio}</p>
                        <p className="stock">Stock: {items.stock}</p>        
                    </div>
                </Col>
                <Col>
                    <div className="itemDetailCount">
                        {
                            itemCount === 0 ? <ItemCount stock={items.stock} initial={itemCount} onAdd={onAdd} /> : <Checkout />
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default ItemDetail;