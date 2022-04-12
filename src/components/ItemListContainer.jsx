import React from 'react';
import customFetch from './utils/customFetch';
import { useEffect, useState } from 'react';
import data from './utils/data';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
    customFetch(2000, data)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
     }, []);

    return(
        <ItemList items={datos} />
    );
}

export default ItemListContainer;