import React from 'react'
import styles from './ImageSection.module.css'
const ImageSection = ({ src, customStyling}) => {
    return (
        <div className={styles.container} style={customStyling}>
            <div className={styles.body} style={{backgroundImage:`url(${src})`}}></div>
        </div>
    )
}

export default ImageSection