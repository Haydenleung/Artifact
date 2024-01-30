import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {

    const [isPage, setIsPage] = useState();

    return (
        <div className={styles.container}>
            <div className={styles.logo}>hayden leung</div>
            <div className={styles.pages}>
                <div className={isPage === "Work" ? styles.bold : styles.bold}>work</div>
                <div className={isPage === "Resume" ? styles.bold : styles.bold}>work</div>
                <div className={isPage === "Contact" ? styles.bold : styles.bold}>work</div>
            </div>
        </div>
    )
}