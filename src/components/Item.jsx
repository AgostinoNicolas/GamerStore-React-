import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const Item = ({id, img, nombre, procesador, memoria , almacenamiento, pantalla, precio, stock }) => {
    return(
        <Container>
            <Row className="containerProducts">
                <Col>
                    <div>
                        <img className="productsImg" src={img} />
                    </div>
                </Col>
                <Col>
                    <div className="productsDescription">
                        <h3 className="productsTitle">{nombre}</h3>
                        <p className="productsDes">Procesador: {procesador}</p>
                        <p className="productsDes">Memoria: {memoria}</p>
                        <p className="productsDes">Almacenamiento: {almacenamiento}</p>
                        <p className="productsDes">Pantalla: {pantalla}</p>
                        <p className="productsPrice">Precio: ${precio}</p>
                        <p className="stock">Stock: {stock}</p>        
                    </div>   
                </Col>
                <Col>
                    <div className="productsBtnContainer">
                        <Link className="btnDetailLink" to={`/item/${id}`}>
                            <Button className="btnDetail" variant="outlined" color="primary">
                                Detalle
                            </Button>
                        </Link>
                    </div>  
                </Col>
            </Row>
        </Container>
    );

}

export default Item;