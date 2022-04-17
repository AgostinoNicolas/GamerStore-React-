import ItemCount from "./ItemCount";

const Item = ({img, nombre, procesador, memoria , almacenamiento, pantalla, precio, stock}) => {
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
            <ItemCount stock={stock} />
        </div>
    );

}

export default Item;