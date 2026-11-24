import React, { useContext } from 'react'
import styles from './Product.module.css'
import { CartContext } from '../cartContext/CartContext'

const Product = ({ title, cost, img }) => {
  const { addToCart, cart } = useContext(CartContext)
  return (
    <div className={styles.productCard} onClick={() => { addToCart({title, cost, img}); console.log(cart) }}>
      <div className={styles.div}>
        <p className={styles.caption2}>{title}</p>
        <p className={styles.price}>${cost}/Bunch</p>
      </div>
      <img src={img} className={styles.image} />
    </div>
  )
}

export default Product