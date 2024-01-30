import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <ul className="md:flex gap-x-6 text-white">
                <li>
                    <Link href="/about">
                        <p>About Us</p>
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        <p>Services</p>
                    </Link>
                </li>
                <li>
                    <Link href="/contacts">
                        <p>Contacts</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}