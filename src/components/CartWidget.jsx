import React from 'react';
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () =>{
    const test = useContext(CartContext);
    return(
        <>
            <Badge  className='shop-cart' badgeContent={test.calcItemsQty(0)} color="error">
                <ShoppingCartIcon />
            </Badge>
        </>
    );
}

export default CartWidget;