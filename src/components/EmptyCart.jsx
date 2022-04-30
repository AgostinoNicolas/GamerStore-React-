import { Row , Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const EmptyCart = () => {
    return(
        <Row>
            <Col className="conatinerEmptyCart">
                <div>
                    <h2><b>¡Hay un carrito que llenar!</b></h2>
                    <h3>Actualmente no tenés productos en tu carrito.</h3>
                    <Link className="btnContinueShoplLink" to='/'>
                        <Button className="btnContinueShop" variant="contained" >
                            Buscar Prodcutos
                        </Button> 
                    </Link>
                </div>     
            </Col>
        </Row>
    );
}

export default EmptyCart;