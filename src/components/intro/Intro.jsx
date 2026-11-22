import React from 'react'
import Button from '../button/Button'
import styles from './Intro.module.css'

const Intro = ({text, title}) => {
  return (
    <div className={styles.section}>
        <caption className={styles.caption}>{title}</caption>
        <h2 className={styles.heading2}>{text}</h2>
        <Button title='● ABOUT US'/>
    </div>
  )
}

export default Intro