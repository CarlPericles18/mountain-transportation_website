import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <h3 className={styles.heading}>Mountain Transportation</h3>
                    <p className={styles.text}>Reliable travel services in Atlanta, GA and surrounding areas.</p>
                    <p className={styles.contact}>
                        <a href="tel:7068519465">(706) 851-9465</a>
                    </p>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.subheading}>Quick Links</h4>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/about" className={styles.link}>About Us</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.subheading}>Service Areas</h4>
                    <p className={styles.text}>Atlanta, GA</p>
                    <p className={styles.text}>Blue Ridge, GA</p>
                    <p className={styles.text}>North Carolina</p>
                    <p className={styles.text}>Tennessee</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="container">
                    &copy; {new Date().getFullYear()} Mountain Transportation. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
