import ItemCount from "./ItemCount";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Item = ({id, img, nombre, procesador, memoria , almacenamiento, pantalla, precio, stock }) => {
    return(
        <div className="productsContainer">
            <div className="containerProductsImg">
                 <img className="productsImg" src={img} />
            </div>
            <div className="productsDescription">
                <h3>{nombre}</h3>
                <p>Procesador: {procesador}</p>
                <p>Memoria: {memoria}</p>
                <p>Almacenamiento: {almacenamiento}</p>
                <p>Pantalla: {pantalla}</p>
                <p>Precio: ${precio}</p>
                <p className="stock">Stock: {stock}</p>        
            </div>
            <div className="productsBtnContainer">
                <div className="btnDetailContainer">
                    <Button className="btnDetail" variant="outlined" color="primary">
                        <Link className="btnDetailLink" to={`/item/${id}`}>DETAIL</Link>
                    </Button>
                </div>
                <ItemCount stock={stock} />      
            </div>        
        </div>
    );

}

export default Item;