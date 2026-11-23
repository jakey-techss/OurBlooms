import React from 'react'
import styles from './Product.module.css'
const Product = ({title, cost, img}) => {
  return (
    <div className={styles.productCard}>
        <div className={styles.div}>
            <p className={styles.caption2}>{title}</p>
            <p className={styles.price}>${cost}/Bunch</p>
        </div>
        <img src={img} className={styles.image}/>
    </div>
  )
}

export default Product