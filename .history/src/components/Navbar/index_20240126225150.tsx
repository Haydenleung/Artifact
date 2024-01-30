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
                <Link href="/" className={isPage === "Work" ? styles.bold : styles.normal}>work</Link>
                <Link href="/" className={isPage === "Resume" ? styles.bold : styles.normal}>resume</Link>
                <Link href="/" className={isPage === "Contact" ? styles.bold : styles.normal}>contact</Link>
            </div>
        </div>
    )
}