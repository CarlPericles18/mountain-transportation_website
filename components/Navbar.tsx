'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Mountain <span className={styles.highlight}>Transportation</span>
                </Link>

                {/* Mobile Menu Button */}
                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>

                {/* Desktop & Mobile Links */}
                <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
                    <Link
                        href="/"
                        className={`${styles.link} ${isActive('/') ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className={`${styles.link} ${isActive('/services') ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/about"
                        className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={`${styles.link} ${styles.cta}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
