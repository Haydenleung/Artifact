import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../../../public/image/Logo2_white.webp';


export default function Navbar() {

    const [isPage, setIsPage] = useState("Work");

    return (
        <div className={styles.container}>
            <Image className={styles.logo} src={logo} alt="logo" objectFit={'contain'} />
            <div className={styles.pages}>
                <Link href="/" className={isPage === "Work" ? styles.bold : styles.normal}>work</Link>
                <Link href="/" className={isPage === "about" ? styles.bold : styles.normal}>about</Link>
                <Link href="/" className={isPage === "resume" ? styles.bold : styles.normal}>resume</Link>
            </div>
        </div>
    )
}