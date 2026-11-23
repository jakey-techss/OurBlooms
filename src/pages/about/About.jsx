import React from 'react'
import styles from '../../pages/Pages.module.css'
import pageStyling from '../gallery/Gallery.module.css'
import NavBar from '../../components/nav/NavBar'
import ToggleProvider from '../../components/nav/toggle/ToggleContext'
import GalleryLayout from '../../components/galleryLayout/GalleryLayout'
import ImageSection from '../../components/imageSection/ImageSection'
import footer from '../../assets/Footer-1.png'
import AboutContent from '../../components/aboutContent/AboutContent'
const About = () => {
    return (
        <div className={styles.body}>
            <ToggleProvider>
                <NavBar />
            </ToggleProvider>
            <h1 className={pageStyling.heading1}>ABOUT</h1>
            <GalleryLayout title={"OUR STORY"}>
                <AboutContent/>
            </GalleryLayout>
    
            <ImageSection src={footer} customStyling={{ marginTop: 80 + 'px' }} />
        </div>
    )
}

export default About