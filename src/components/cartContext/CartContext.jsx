import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (itm) => setCart([...cart, itm])
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
 
export default CartProvider