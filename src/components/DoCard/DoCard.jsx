import React from 'react'
import styles from '../whatWeDo/WhatWeDo.module.css'

const DoCard = ({num, src, title, description}) => {
  return (
    <>
    <div className={styles.doCard}>
        <h1 className={styles.heading1}>{num}</h1>
        <img src={src} className={styles.image}/>
        <div className={styles.textHolder}>
            <h1 className={styles.heading1}>{title}</h1>
            <p className={styles.subheading}>{description}</p>
        </div>
    </div>
    </>
  )
}

export default DoCard