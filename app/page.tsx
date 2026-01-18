import Hero from '@/components/Hero';
import Link from 'next/link';

// NOTE: We could extract these to a ServiceCard component later
const services = [
  { title: "Airport Pickups", icon: "✈️", desc: "Reliable transfers to and from major airports." },
  { title: "Weddings", icon: "💍", desc: "Elegant transportation for your special day." },
  { title: "Wine Tours", icon: "🍷", desc: "Relaxing tours of the region's best vineyards." },
  { title: "Corporate Travel", icon: "💼", desc: "Professional service for business meetings and events." },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Our Services</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
              We build trips to meet our clients’ needs. From day trips to wine tours, you can be sure we will provide the best transportation for you.
            </p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
            {services.map((s, i) => (
              <div key={i} style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'start',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{s.title}</h3>
                  <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Trust/About Highlight */}
      <section className="section" style={{ backgroundColor: 'var(--color-background-alt)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                Licensed & Insured Transport
              </h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Our company is a licensed and insured transportation company out of Blue Ridge, Georgia providing reliable travel services to Atlanta, Tennessee and North Carolina.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Our clients have trusted us with various travel matters since our establishment in 2008.
              </p>
              <Link href="/about" className="btn btn-outline" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                Learn More About Us
              </Link>
            </div>
            {/* Placeholder for an image */}
            <div style={{
              height: '400px',
              backgroundColor: '#e2e8f0',
              borderRadius: 'var(--radius-lg)',
              backgroundImage: 'url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
          </div>
        </div>
      </section>
    </>
  );
}
