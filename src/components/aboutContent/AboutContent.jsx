import React from 'react'
import owner from '../../assets/about.png'
import styles from './AboutContent.module.css'
import Carousel from '../carousel/Carousel'
import ImageSection from '../imageSection/ImageSection'
import center from '../../assets/08.png'
import Button from '../button/Button'
const AboutContent = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.top}>
                <img src={owner} className={styles.img} />
                <div className={styles.textHolder}>
                    <p className={styles.text}>LILY SMITH</p>
                    <p className={styles.tag}>Owner</p>
                </div>
            </div>
            <h1 className={styles.heading1}>Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</h1>
            <div className={styles.container}>
                    <div className={styles.imgOne}></div>
                    <div className={styles.imgTwo}></div>
                    <div className={styles.imgThree}></div>
                </div>
            <p className={styles.bodyText}>
                Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.
                <br />
                <br/>
                Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.
            </p>
            <div className={styles.flowerImage}></div>
            <p className={styles.bodyText}>
                From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.
                <br/>
                <br/>
                Discover how we can add a touch of natural beauty to your next event.
            </p>
            <Button title={"BOOK A CONSULTATION"}/>
        </div>
    )
}

export default AboutContent