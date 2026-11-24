import React from 'react'
import NavBar from '../../components/nav/NavBar'
import ToggleProvider from '../../components/nav/toggle/ToggleContext'
import Hero from '../../components/hero/Hero'
import styles from '../../pages/Pages.module.css'
import Intro from '../../components/intro/Intro'
import Carousel from '../../components/carousel/Carousel'
import WhatWeDo from '../../components/whatWeDo/WhatWeDo'
import ImageSection from '../../components/imageSection/ImageSection'
import sectionOne from '../../assets/sec1.png'
import footer from '../../assets/Footer-1.png'
const Home = () => {
  return (
    <div className={styles.body}>
        <ToggleProvider>
        <NavBar/>
        </ToggleProvider>
        <Hero/>
        <Intro title={"WHO WE ARE"} text={"We're Our Blooms® and we're here to help you find your floral story."}/>
        <Carousel/>
        <WhatWeDo/>
        <ImageSection src={sectionOne} customStyling={{marginTop:50+'px'}}/>
        <Intro title={"WORK WITH US"} text={"Discover how we can add a touch of natural beauty to your next event."}/>
        <ImageSection src={footer} customStyling={{marginTop:80+'px'}}/>
    </div>
  )
}

export default Home