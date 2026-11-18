import React, { useContext } from 'react'
import { ToggleContext } from './ToggleContext'
import styles from './Toggle.module.css'

const Toggle = () => {
    const {toggleOpen, opened} = useContext(ToggleContext)
  return (
    <button onClick={()=>toggleOpen()} className={styles.toggle}>{opened ? 'x' : '☱'}</button>
  )
}

export default Toggle