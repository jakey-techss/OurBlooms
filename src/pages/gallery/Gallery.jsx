import React from 'react'
import styles from '../../pages/Pages.module.css'
import pageStyling from './Gallery.module.css'
import NavBar from '../../components/nav/NavBar'
import ToggleProvider from '../../components/nav/toggle/ToggleContext'
import GalleryLayout from '../../components/galleryLayout/GalleryLayout'
import Catalog from '../../components/catalog/Catalog'
import ServiceCatalog from '../../components/serviceCatalog/ServiceCatalog'
import Intro from '../../components/intro/Intro'
import ImageSection from '../../components/imageSection/ImageSection'
import footer from '../../assets/Footer-1.png'
const Gallery = () => {
    return (
        <div className={styles.body}>
            <ToggleProvider>
                <NavBar />
            </ToggleProvider>
            <h1 className={pageStyling.heading1}>Gallery</h1>
            <GalleryLayout title={"Seasonal Arrangements"}>
                <Catalog/>
            </GalleryLayout>
            <GalleryLayout title={"Services"}>
                <ServiceCatalog/>
            </GalleryLayout>
            <Intro title={"WORK WITH US"} text={"Discover how we can add a touch of natural beauty to your next event."}/>
            <ImageSection src={footer} customStyling={{marginTop:80+'px'}}/>
        </div>
    )
}

export default Gallery