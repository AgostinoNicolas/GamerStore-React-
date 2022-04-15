import ItemCount from "./ItemCount";

const ItemDetail = ({items}) => {
    return(
        <div className="productsContainerDetail">
            <div className="containerProductsImgDetail">
                 <img className="productsImgDetail" src={items.img} />
            </div>
            <div className="containerDetail">
                <div className="productsDescriptionDetail">
                <h3>{items.nombre}</h3>
                <p>{items.desc}</p>
                <p>Procesador: {items.procesador}</p>
                <p>Memoria: {items.memoria}</p>
                <p>Almacenamiento: {items.almacenamiento}</p>
                <p>Pantalla: {items.pantalla}</p>
                <p>Precio: ${items.precio}</p>
                <p className="stock">Stock: {items.stock}</p>        
                </div>
                <div className="itemCountDetail">
                    <ItemCount />
                </div>
            </div>
        </div>
    );

}

export default ItemDetail;