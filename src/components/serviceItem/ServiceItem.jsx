import React from 'react'
import styles from './ServiceItem.module.css'

const ServiceItem = ({title, img, des}) => {
  return (
    <div className={styles.item}>
        <div className={styles.textHolder}>
            <h1 className={styles.heading1}>{title}</h1>
            <p className={styles.para1}>{des}</p>
        </div>
        <img src={img} className={styles.img}/>
    </div>
  )
}

export default ServiceItem