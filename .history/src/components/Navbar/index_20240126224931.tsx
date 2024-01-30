import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {

    const [isWork, setIsWork] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.logo}>hayden leung</div>
            <div className={styles.pages}>
                <div className={isWork ? styles.bold || styles.bold}>work</div>
                <div>resume</div>
                <div>contact</div>
            </div>
        </div>
    )
}