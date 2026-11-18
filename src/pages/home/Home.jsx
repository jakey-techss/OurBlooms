import React from 'react'
import NavBar from '../../components/nav/NavBar'
import ToggleProvider from '../../components/nav/toggle/ToggleContext'
import Hero from '../../components/hero/Hero'
import styles from './Home.module.css'
import Intro from '../../components/intro/Intro'

const Home = () => {
  return (
    <div className={styles.body}>
        <ToggleProvider>
        <NavBar/>
        </ToggleProvider>
        <Hero/>
        <Intro/>
    </div>
  )
}

export default Home