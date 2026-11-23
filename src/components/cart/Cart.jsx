import React, { useContext } from 'react'
import styles from './Cart.module.css'
import { Link, NavLink } from 'react-router'

const Cart = () => {
    
    return (
        <div>
            <span className={styles.cartCount}>{cart.length}</span>
            <NavLink to='/contact' className={styles.navLink}>🛒 CART </NavLink>
        </div>
    )
}

export default Cart