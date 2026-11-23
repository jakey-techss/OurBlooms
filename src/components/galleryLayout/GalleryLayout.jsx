import React from 'react'
import styles from './GalleryLayout.module.css'

const GalleryLayout = ({title, children}) => {
  return (
    <div className={styles.container}>
        <caption className={styles.caption}>{title}</caption>
        {children}
    </div>
  )
}

export default GalleryLayout