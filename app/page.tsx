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

      {/* NEW: Destinations / Service Areas Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Service Areas</h2>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
              We provide premium transportation across the Southeast, connecting you to the region's best destinations.
            </p>
          </div>

          <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
            {/* Destination 1: Blue Ridge */}
            <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Blue Ridge Mountains"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Blue Ridge, GA</h3>
              </div>
            </div>

            {/* Destination 2: Atlanta */}
            <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Atlanta Skyline"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Atlanta, GA</h3>
              </div>
            </div>

            {/* Destination 3: TN/NC */}
            <div style={{ position: 'relative', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Scenic Highway"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>TN & NC</h3>
              </div>
            </div>
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
            {/* Authentic Company Vibe Image */}
            <div style={{
              height: '400px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                alt="Luxury Transport"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
