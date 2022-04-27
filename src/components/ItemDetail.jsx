import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import Checkout from "./Checkout";
import { CartContext } from "./CartContext";

const ItemDetail = ({ items }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);
 

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos");
        setItemCount(qty);
        test.addToCart(items);
    }

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
                    {
                        itemCount === 0 ? <ItemCount stock={items.stock} initial={itemCount} onAdd={onAdd} /> : <Checkout />
                    }
                </div>
            </div>
        </div>
    );

}

export default ItemDetail;