import React from 'react'
import Button from '../button/Button'
import styles from './Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.section}>
        <caption className={styles.caption}>WHO WE ARE</caption>
        <h2 className={styles.heading2}>We're Our Blooms® and we're here to help you find your floral story.</h2>
        <Button title='ABOUT US'/>
    </div>
  )
}

export default Intro