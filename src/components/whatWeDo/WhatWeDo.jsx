import React from 'react'
import styles from './WhatWeDo.module.css'
import floral from '../../assets/floral_Installations.png'
import npa from '../../assets/NPA.png'
import cfc from '../../assets/CFC.png'
import DoCard from '../DoCard/DoCard'
const data = [
    {
        num: 1,
        imag: floral, 
        title: "FLORAL INSTALLATIONS", 
        des: "Living art for homes, businesses, and events."
    },
    {
        num: 2,
        imag: npa, 
        title: "NATIVE PLANT ARRANGEMENTS", 
        des: "Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations."
    },
    {
        num: 3,
        imag: cfc, 
        title: "CUSTOM FLORAL CONCEPTS", 
        des: "Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations."
    },
]
const WhatWeDo = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.heading1}>WHAT WE DO</h1>
                <p className={styles.subheading}>We bring a touch of that simple magic into your world.</p>
            </div>
            {data.map((item, index)=>{
                return <DoCard num={item.num} src={item.imag} title={item.title} description={item.des} key={index}/>
            })}
        </>
    )
}

export default WhatWeDo