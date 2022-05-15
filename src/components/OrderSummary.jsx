import { Button } from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const OrderSummary = () =>{
    const test = useContext(CartContext)

    return(
        <div className="containerOrderSummary">
            <div className="orderSummary">
                <h3 className="titleOrderSummary">Resumen de pedido</h3>
                <div>
                    <p>Subtotal</p>
                    <p>${test.calcSubTotal()}</p>
                </div>
                <div>
                    <p>IVA 21%</p>
                    <p>${test.calcTaxes()}</p>
                </div>
                <div>
                    <p>Descuento</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>${test.calcTotal()}</p>
                </div>
                <div className="containerCheckoutNow">
                    <Button className="checkoutNow" onClick={checkoutNow} variant="contained" color="secondary">
                        Finalizar Compra
                    </Button>
                </div>  
            </div>                                             
        </div>
    );
}

export default OrderSummary;