import { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



const ItemCount = ( {stock = 0, initial = 1, onAdd} ) =>{
    const[rate, setRate] = useState(0);
    
    const increment = () =>{
        if (rate < stock) {
            setRate(rate+1);    
        }
        
    }

    const decrement = () =>{
        if (rate > initial) {
            setRate(rate-1)
            
        }  
    }

    return(
        <div className="productsBtn">
            <div className="btnContainerAddRemove">
                <Button  onClick={decrement}>
                    <RemoveIcon className="removeIcon" />
                </Button>
                <div className="count">
                    <p>{rate}</p>
                </div>
                <Button  onClick={increment}>
                    <AddIcon className="addIcon"/>
                </Button>
            </div>       
            <Button onClick={()=> onAdd(rate)} className="btnAddToCart" color="primary">Agregar al Carrito</Button>
        </div> 
    );
}

export default ItemCount;


