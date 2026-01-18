'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Failed to submit');

            setStatus('success');
            // Reset form after 3 seconds or redirect
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', message: '' });
                setStatus('idle');
            }, 3000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className="section">
            <div className="container">
                <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-primary)' }}>Contact Us</h1>

                <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Get In Touch</h2>
                        <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                            Give us a call or text so we can plan your next trip. We focus on handling all your travel needs on your timetable.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Phone</h3>
                            <a href="tel:7068519465" style={{ fontSize: '1.5rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>(706) 851-9465</a>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Service Areas</h3>
                            <ul style={{ listStyle: 'none', color: 'var(--color-text-light)' }}>
                                <li>Blue Ridge, GA</li>
                                <li>Atlanta, GA</li>
                                <li>Tennessee</li>
                                <li>North Carolina</li>
                            </ul>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Book a Trip</h2>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone</label>
                                <input
                                    type="tel"
                                    required
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Trip Details</label>
                                <textarea
                                    rows={4}
                                    required
                                    placeholder="Tell us where you need to go and when..."
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontFamily: 'inherit' }}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                            </button>

                            {status === 'success' && (
                                <p style={{ marginTop: '1rem', color: 'green', textAlign: 'center' }}>Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p style={{ marginTop: '1rem', color: 'red', textAlign: 'center' }}>Failed to send. Please call us directly.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
