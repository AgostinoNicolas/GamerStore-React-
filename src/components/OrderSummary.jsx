import { Button } from "@material-ui/core";
import { serverTimestamp, doc, collection, setDoc, increment, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import swal from "sweetalert";
import { CartContext } from "./CartContext";
import db from "./utils/firebaseConfig";

const OrderSummary = () =>{
    const test = useContext(CartContext)

    const createOrder = () => {
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });

    let order = {
        buyer: {
            nombre: "Darth Vader",
            email: "darth@vader.com",
            telefono: "123456789",
        },
        date: serverTimestamp(),
        items: test.cartList.map(item => ({
            id: item.idItem,
            marca: item.nameItem,
            precio: item.costItem,
            qty: item.qtyItem,
        })),
        total: test.calcTotal(),
    }
    console.log(order)

    const createOrderInFirestore = async () => {
        // Add a new document with a generated id
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
    }
        
    createOrderInFirestore()
        .then(result => swal('Su pedido ha sido creado. Tome nota del ID de su pedido.\n\n\nID del pedido: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
        
    test.removeCart();

    }

    return(
        <div className="containerOrderSummary">
            <div className="orderSummary">
                <h3 className="titleOrderSummary">Resumen de pedido</h3>
                <div className="order">
                    <p className="orderSubTotal">Subtotal</p>
                    <p className="orderPrice">${test.calcSubTotal()}</p>
                </div>
                <div className="order">
                    <p className="orderSubTotal">IVA 21%</p>
                    <p className="orderPrice">${test.calcTaxes()}</p>
                </div>
                <div className="order">
                    <p className="orderSubTotal">Descuento</p>
                </div>
                <div className="order">
                    <p className="orderTotal">Total</p>
                    <p className="orderPriceTotal">${test.calcTotal()}</p>
                </div>
                <div className="containerCheckoutNow">
                    <Button className="checkoutNow" onClick={createOrder} variant="contained" color="secondary">
                        Finalizar Compra
                    </Button>
                </div>  
            </div>                                             
        </div>
    );
}

export default OrderSummary;