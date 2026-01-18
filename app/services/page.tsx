import Link from 'next/link';

const allServices = [
    { title: "Adventure Excursions", description: "Explore the great outdoors with comfortable transport to hiking trails and adventure spots.", icon: "activity" },
    { title: "Airport Pickups", description: "Punctual and reliable transfers to and from Atlanta and regional airports.", icon: "plane" },
    { title: "Business Travel", description: "Executive transport for meetings, conferences, and corporate events.", icon: "briefcase" },
    { title: "Casinos", description: "Fun trips to nearby casinos with safe return transport.", icon: "dollar-sign" },
    { title: "Medical Transport", description: "Compassionate and timely transport for medical appointments.", icon: "heart" },
    { title: "Shopping Excursions", description: "Day trips to premium outlets and shopping districts.", icon: "shopping-bag" },
    { title: "Travel Tours", description: "Sightseeing tours of the beautiful Georgia and Tennessee landscapes.", icon: "map" },
    { title: "Weddings", description: "Elegant shuttle services for wedding parties and guests.", icon: "users" },
    { title: "Wine Tours", description: "Safe and relaxing tours of North Georgia's finest vineyards.", icon: "wine" },
];

export default function ServicesPage() {
    return (
        <div className="section">
            <div className="container">
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)', textAlign: 'center' }}>Our Services</h1>
                <p style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
                    We build trips to meet our clients’ needs. Whether you need a ride to the airport or a full day wine tour, we provide private and pre-arranged door-to-door services.
                </p>

                <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                    {allServices.map((s, i) => (
                        <div key={i} style={{
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            border: '1px solid var(--color-border)',
                            transition: 'transform 0.2s',
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{s.title}</h3>
                            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{s.description}</p>
                            <Link href="/contact" style={{ color: 'var(--color-accent)', fontWeight: '600' }}>Book This Service &rarr;</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
