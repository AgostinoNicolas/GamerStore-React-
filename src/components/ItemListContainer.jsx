import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from './utils/firestoreFetch';



const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategoria} = useParams();

    useEffect(() => {
        firestoreFetch(idCategoria)
        .then(result => setDatos(result))
        .catch(err => console.log(err));
        
     }, [idCategoria]);

    return(
        <ItemList items={datos} />
    );
}

export default ItemListContainer;