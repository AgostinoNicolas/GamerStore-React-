import { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCount = () =>{
    const[rate, setRate] = useState(0);

    const increment = () =>{
        if (rate < 5) {
            setRate(rate+1);    
        }
        
    }

    const decrement = () =>{
        if (rate > 0) {
            setRate(rate-1)
            
        }  
    }

    const addToCart = () =>{
        if (rate > 0) {
            alert("Se agrego al carrito")           
        }else{
            alert("No hay stock")
        }
    }

    return(
        <div className="productsBtn">
                <Button onClick={increment}>
                    <AddIcon/>
                </Button>
                <div className="count">
                    <p>{rate}</p>
                </div>
                <Button onClick={decrement}>
                    <RemoveIcon />
                </Button>
                <Button onClick={addToCart} className="btnAddToCart" variant="outlined" color="primary">
                    ADD TO CART
                </Button>
        </div> 
    );
}

export default ItemCount;


