import React from 'react';
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () =>{
    const test = useContext(CartContext);
    return(
        <>
            <div className='containerCartWidgetNav'>
                <Badge  className='shop-cart' badgeContent={test.calcItemsQty(0)} color="error">
                    <ShoppingCartIcon />
                </Badge>
                <div className='containerCartNav'>
                    {
                        test.cartList.length > 0 ? (<p>${test.calcTotal()}</p>) : (<p>$0</p>)
                    }
                </div>
            </div>
        </>
    );
}

export default CartWidget;