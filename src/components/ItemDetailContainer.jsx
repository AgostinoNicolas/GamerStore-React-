import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import customFetch from "./utils/customFetch";
import data from "./utils/data";


const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
    customFetch(2000, data[1])
        .then(result => setDatos(result))
        .catch(err => console.log(err))
     }, []);

    return(
        <ItemDetail items={datos} />
    );
}

export default ItemDetailContainer;