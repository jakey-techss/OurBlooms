import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { Link, NavLink } from 'react-router'
import { CartContext } from '../cartContext/CartContext'

const Cart = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <span className={styles.cartCount}>{cart.length}</span>
            <NavLink to='/cart' className={styles.navLink}>🛒 CART </NavLink>
        </div>
    )
}

export default Cart