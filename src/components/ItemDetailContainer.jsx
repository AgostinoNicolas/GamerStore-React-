import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import customFetch from "./utils/customFetch";
import data from "./utils/data";


const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
    customFetch(2000, data.find(item => item.id === idItem))
        .then(result => setDatos(result))
        .catch(err => console.log(err))

        console.log(idItem)
     }, [idItem]);

    return(
        <ItemDetail items={datos} />
    );
}

export default ItemDetailContainer;