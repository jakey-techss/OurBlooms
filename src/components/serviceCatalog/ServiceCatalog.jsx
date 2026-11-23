import React from 'react'
import FI from '../../assets/serv01.png'
import NPA from '../../assets/NPA.png'
import CFC from '../../assets/CFC.png'
import ServiceItem from '../serviceItem/serviceItem'
let data = [
    {
        title: "FLORAL INSTALLATIONS",
        des: "We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.",
        img: FI
    },
    {
        title: "NATIVE PLANT ARRANGEMENTS",
        des: "Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.",
        img: NPA
    },
    {
        title: "CUSTOM FLORAL CONCEPTS",
        des: "Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.",
        img: CFC
    },

]
const ServiceCatalog = () => {
  return (
    <div>
        {data.map((item, index)=>{
            return <ServiceItem title={item.title} img={item.img} des={item.des} key={index}/>
        })}
    </div>
  )
}

export default ServiceCatalog