import { Row , Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const EmptyCart = () => {
    return(
        <Row>
            <Col className="conatinerEmptyCart">
                <div>
                    <AddShoppingCartIcon className="shopCartAdd" />
                    <h3><b>¡Hay un carrito que llenar!</b></h3>
                    <h4>Actualmente no tenés productos en tu carrito.</h4>
                    <p>Encontrarás muchos productos interesantes en nuestra página.</p>
                    <Link className="btnContinueShoplLink" to='/'>
                        <Button className="btnSearchProducts" variant="contained" >
                            Buscar Prodcutos
                        </Button> 
                    </Link>
                </div>     
            </Col>
        </Row>
    );
}

export default EmptyCart;