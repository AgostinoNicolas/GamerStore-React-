import React from 'react';
import customFetch from './utils/customFetch';
import { useEffect, useState } from 'react';
import data from './utils/data';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(() => {
        if (idCategoria === undefined){
            customFetch(2000, data)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        } else {
            customFetch(2000, data.filter(item => item.categoria === parseInt(idCategoria)))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }

     }, [idCategoria]);

    return(
        <ItemList items={datos} />
    );
}

export default ItemListContainer;