import React from 'react'
import styles from './Carousel.module.css'

const Carousel = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgOne}></div>
        <div className={styles.imgTwo}></div>
        <div className={styles.imgThree}></div>
        <div className={styles.imgFour}></div>
        <div className={styles.imgFive}></div>
    </div>
  )
}

export default Carousel