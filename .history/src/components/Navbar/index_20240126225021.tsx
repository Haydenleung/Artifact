import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {

    const [isWork, setIsWork] = useState();

    return (
        <div className={styles.container}>
            <div className={styles.logo}>hayden leung</div>
            <div className={styles.pages}>
                <div className={isWork === "Work" ? styles.bold : styles.bold}>work</div>
                <div className={isWork === "Resume" ? styles.bold : styles.bold}>work</div>
                <div className={isWork === "Contact" ? styles.bold : styles.bold}>work</div>
            </div>
        </div>
    )
}