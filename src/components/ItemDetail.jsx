import { useEffect } from "react";
import ItemCount from "./ItemCount";
import { Button } from "bootstrap";

const ItemDetail = ({items}) => {
    const [itemCount, setItemCount] = useEffect(0);

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos");
        setItemCount(qty);
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
                        itemCount === 0 ? <ItemCount stock={items.stock} initial={itemCount} onAdd={onAdd} /> :  <Button className="btnCheckout" variant="outlined" color="primary">Checkout</Button>
                    }
                </div>
            </div>
        </div>
    );

}

export default ItemDetail;