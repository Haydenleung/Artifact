import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>hayden leung</div>
            <div className={styles.pages}></div>
        </div>
    )
}