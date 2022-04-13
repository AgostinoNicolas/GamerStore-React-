import ItemCount from "./ItemCount";

const ItemDetail = ({items}) => {
    return(
        <div className="productsContainerDetail">
            <div className="containerProductsImgDetail">
                 <img className="productsImg" src={items.img} />
            </div>
            <div className="containerDetail">
                <div className="productsDescription">
                <h3>{items.nombre}</h3>
                <p>Procesador: {items.procesador}</p>
                <p>Memoria: {items.memoria}</p>
                <p>Almacenamiento: {items.almacenamiento}</p>
                <p>Pantalla: {items.pantalla}</p>
                <p>Precio: ${items.precio}</p>        
                </div>
                <ItemCount />
            </div>
        </div>
    );

}

export default ItemDetail;