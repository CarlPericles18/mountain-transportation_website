import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Plan Your Next Trip with a <span className={styles.highlight}>Trustworthy</span> Travel Company
                </h1>
                <p className={styles.subtitle}>
                    Passenger Safety & Comfort is Our #1 Priority. Wherever you need to Go, we Go!
                </p>
                <div className={styles.actions}>
                    <Link href="/contact" className="btn btn-accent">Book Your Trip</Link>
                    <Link href="/services" className="btn btn-outline">Explore Services</Link>
                </div>
            </div>
        </section>
    );
}
