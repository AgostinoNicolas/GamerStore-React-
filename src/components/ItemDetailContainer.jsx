import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import db from '../components/utils/firebaseConfig';


const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        const firestoreFetchOne = async () => {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        firestoreFetchOne(idItem)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        
     }, [idItem]);

    return(
        <ItemDetail items={datos} />
    );
}

export default ItemDetailContainer;