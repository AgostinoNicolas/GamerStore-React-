import React from 'react';
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWidget = () =>{
    return(
        <>
            <Badge  className='shop-cart' badgeContent={4} color="error">
                <ShoppingCartIcon />
            </Badge>
        </>
    );
}

export default CartWidget;