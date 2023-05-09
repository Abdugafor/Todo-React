import React, { useEffect, useState } from "react";
import bgDark from './images/bg-desktop-dark.jpg'
import bgLight from './images/bg-desktop-light.jpg'
import styles from'./bg.module.css'


export function BackgroundImage(mode) {
    const [image, setImage] = useState(bgDark)

    return (
        <img 
        className={styles.bgImg}
        src={image}
        alt="background"/>
    )
}