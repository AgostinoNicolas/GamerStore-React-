import { useState, createContext } from "react";


 export const CartContext = createContext();


 const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);

    const addToCart = (items, qty)=>{
        let found = cartList.find(product => product.idItem === items.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: items.id,
                    imgItem: items.img,
                    nameItem: items.nombre,
                    costItem: items.precio,
                    qtyItem: qty
                }
            ]);
        }else {
            found.qtyItem += qty;
        }
    }



    const removeCart = () =>{
        setCartList([]);
    }

    const deleteItem = (id) =>{
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
        
    }

     return(
        <CartContext.Provider value={{cartList, addToCart, removeCart, deleteItem}}>
            {children}
        </CartContext.Provider>

     );
 }

 export default CartContextProvider;


