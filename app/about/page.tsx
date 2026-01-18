import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="section">
            <div className="container">
                <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>About Us</h1>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                            Mountain Transportation is a licensed and insured transport company based in <strong>Blue Ridge, Georgia</strong>.
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                            We provide reliable travel services to <strong>Atlanta, Tennessee, and North Carolina</strong>. Our clients have trusted us with various travel matters since our establishment in 2008.
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                            We focus on handling all your travel needs on your timetable. Wherever you need to Go, we Go!
                        </p>

                        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--color-background-alt)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent)' }}>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Policies</h4>
                            <p>Please note that all our vehicles have a <strong>no smoking/no vaping policy</strong> to ensure the comfort of all our passengers.</p>
                        </div>
                    </div>

                    <div>
                        <div style={{
                            height: '500px',
                            backgroundColor: '#e2e8f0',
                            borderRadius: 'var(--radius-lg)',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            boxShadow: 'var(--shadow-xl)'
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
