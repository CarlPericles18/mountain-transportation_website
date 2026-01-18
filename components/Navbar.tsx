'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Mountain <span className={styles.highlight}>Transportation</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>Home</Link>
                    <Link href="/services" className={`${styles.link} ${isActive('/services') ? styles.active : ''}`}>Services</Link>
                    <Link href="/about" className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}>About</Link>
                    <Link href="/contact" className={`${styles.link} ${styles.cta}`}>Book Now</Link>
                </div>
            </div>
        </nav>
    );
}
