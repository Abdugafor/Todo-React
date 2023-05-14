import React from 'react'
import bgDark from './images/bg-desktop-dark.jpg'
import bgLight from './images/bg-desktop-light.jpg'
import styles from'./bg.module.css'


export function BackgroundImage({img}) {
    let bg = bgDark
    if (!img) {
        bg = bgLight
    }
    return (
        <img 
        className={styles.bgImg}
        src={bg}
        alt="background"/>
    )
}