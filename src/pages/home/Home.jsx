import React from 'react'
import NavBar from '../../components/nav/NavBar'
import ToggleProvider from '../../components/nav/toggle/ToggleContext'
import Hero from '../../components/hero/Hero'
import styles from './Home.module.css'
import Intro from '../../components/intro/Intro'
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
  return (
    <div className={styles.body}>
        <ToggleProvider>
        <NavBar/>
        </ToggleProvider>
        <Hero/>
        <Intro/>
        <Carousel/>
    </div>
  )
}

export default Home