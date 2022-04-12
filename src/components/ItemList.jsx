import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            {
                items.length > 0
                ? items.map(item => <Item key={item.id} nombre={item.nombre} precio={item.precio} img={item.img} procesador={item.procesador} memoria={item.memoria} pantalla={item.pantalla} almacenamiento={item.almacenamiento} />)
                : <p>Cargando...</p>
            }
        </>
    );
}

export default ItemList;