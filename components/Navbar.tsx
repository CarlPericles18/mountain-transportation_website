'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
                    Mountain <span className={styles.highlight}>Transportation</span>
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className={styles.mobileToggle}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Links */}
                <div className={styles.desktopLinks}>
                    <NavLinks isActive={isActive} setIsMenuOpen={setIsMenuOpen} />
                </div>

                {/* Mobile Fullscreen Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <div className={styles.mobileLinksContainer}>
                        <NavLinks isActive={isActive} setIsMenuOpen={setIsMenuOpen} mobile />
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLinks({ isActive, setIsMenuOpen, mobile = false }: { isActive: (p: string) => boolean, setIsMenuOpen: (v: boolean) => void, mobile?: boolean }) {
    const baseClass = mobile ? styles.mobileLink : styles.link;

    return (
        <>
            <Link
                href="/"
                className={`${baseClass} ${isActive('/') ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
            >
                Home
            </Link>
            <Link
                href="/services"
                className={`${baseClass} ${isActive('/services') ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
            >
                Services
            </Link>
            <Link
                href="/about"
                className={`${baseClass} ${isActive('/about') ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
            >
                About
            </Link>
            <Link
                href="/contact"
                className={`${baseClass} ${styles.cta}`}
                onClick={() => setIsMenuOpen(false)}
            >
                Book Now
            </Link>
        </>
    );
}
