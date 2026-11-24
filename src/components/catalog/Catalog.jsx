import React from 'react'
import DB from '../../assets/09.png'
import SS from '../../assets/01.png'
import WG from '../../assets/02.png'
import CP from '../../assets/03.png'
import RS from '../../assets/04.png'
import MM from '../../assets/05.png'
import EL from '../../assets/06.png'
import SB from '../../assets/07.png'
import SW from '../../assets/08.png'
import Product from '../product/Product'
import styles from './Catalog.module.css'


let data = [
  { title: "Dawn Bloom", price: 55, src: DB },
  { title: "Solstice Stems", price: 30, src: SS },
  { title: "Whisper Greens", price: 120, src: WG },
  { title: "Clarity Petals", price: 55, src: CP },
  { title: "River Stone", price: 30, src: RS },
  { title: "Moonlit Meadow", price: 120, src: MM },
  { title: "Ember Leaf", price: 55, src: EL },
  { title: "Skyline Bloom", price: 75, src: SB },
  { title: "Still Waters", price: 250, src: SW },
]
const Catalog = () => {
  return (
    <div className={styles.grid}>
        {data.map((item, index) => {
          return <Product title={item.title.toUpperCase()} cost={item.price} img={item.src} key={index} />
        })}
    </div>
  )
}

export default Catalog