import React from 'react';
import { Badge } from "@material-ui/core";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () =>{
    const test = useContext(CartContext);
    return(
        <>
            <div className='containerCartWidgetNav'>
                <Badge  className='shopCart' badgeContent={test.calcItemsQty(0)} color="error">
                    <LocalMallIcon />
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