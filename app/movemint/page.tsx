import type { Metadata } from 'next';
import '../../styles/movemint.css';
import LedgerDemo from './demo';

export const metadata: Metadata = {
  title: 'MoveMint™ | Stageport — Professional Studio Management',
  description: 'MoveMint™ by Stageport: The ultimate ledger and management solution for dance studios, performing arts centers, and creative education facilities.',
};

export default function MoveMintPage() {
  return (
    <main className="container">
      {/* Hero Section */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">MoveMint™</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#products">Products</a>
            <a href="#demo">Demo</a>
            <a href="#contact" className="btn btn-nav">Get Started</a>
          </div>
        </nav>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Studio with <span className="gradient-text">MoveMint™</span>
          </h1>
          <p className="hero-subtitle">
            The complete ledger and management platform for dance studios and performing arts centers. 
            Track attendance, manage schedules, and streamline your operations with real-time insights.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Start Free Trial</a>
            <a href="#demo" className="btn btn-secondary">Watch Demo</a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="section features">
        <h2 className="section-title">Why Studio Owners Choose MoveMint™</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-Time Ledger</h3>
            <p>Track every class, student, and transaction with our powerful ledger system. Get instant insights into your studio&apos;s performance.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Smart Scheduling</h3>
            <p>Effortlessly manage class schedules, instructor availability, and room bookings in one intuitive interface.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Payment Processing</h3>
            <p>Accept payments, manage subscriptions, and track billing with seamless integration to popular payment providers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Student Management</h3>
            <p>Maintain comprehensive student profiles, attendance records, and progress tracking all in one place.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Ready</h3>
            <p>Access your studio dashboard from anywhere. Our responsive design works perfectly on all devices.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Enterprise-grade security keeps your data safe. 99.9% uptime guarantee ensures you&apos;re always connected.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section products">
        <h2 className="section-title">Stageport Product Suite</h2>
        <div className="products-grid">
          <div className="product-card featured">
            <div className="product-badge">Most Popular</div>
            <h3>MoveMint™ Pro</h3>
            <p className="product-price">$99<span>/month</span></p>
            <ul className="product-features">
              <li>✓ Unlimited students</li>
              <li>✓ Advanced ledger analytics</li>
              <li>✓ Multi-location support</li>
              <li>✓ Custom branding</li>
              <li>✓ Priority support</li>
              <li>✓ API access</li>
            </ul>
            <a href="#contact" className="btn btn-primary">Choose Pro</a>
          </div>
          <div className="product-card">
            <h3>MoveMint™ Starter</h3>
            <p className="product-price">$49<span>/month</span></p>
            <ul className="product-features">
              <li>✓ Up to 100 students</li>
              <li>✓ Basic ledger tracking</li>
              <li>✓ Single location</li>
              <li>✓ Email support</li>
              <li>✓ Standard reports</li>
            </ul>
            <a href="#contact" className="btn btn-secondary">Get Started</a>
          </div>
          <div className="product-card">
            <h3>Stageport Enterprise</h3>
            <p className="product-price">Custom</p>
            <ul className="product-features">
              <li>✓ Unlimited everything</li>
              <li>✓ White-label solution</li>
              <li>✓ Dedicated account manager</li>
              <li>✓ Custom integrations</li>
              <li>✓ SLA guarantee</li>
              <li>✓ On-premise option</li>
            </ul>
            <a href="#contact" className="btn btn-outline">Contact Sales</a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="section demo">
        <h2 className="section-title">Live Ledger Demo</h2>
        <p className="section-subtitle">Experience the power of MoveMint™ ledger logging in real-time</p>
        <LedgerDemo />
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <h2 className="section-title">Trusted by Studio Owners Worldwide</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>&quot;MoveMint has completely transformed how we manage our dance studio. The ledger feature alone saves us hours every week.&quot;</p>
            <div className="testimonial-author">
              <strong>Sarah Johnson</strong>
              <span>Owner, Rhythm & Grace Dance Academy</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>&quot;Finally, a management system that understands the unique needs of performing arts centers. The Stageport team is incredible.&quot;</p>
            <div className="testimonial-author">
              <strong>Michael Chen</strong>
              <span>Director, Pacific Arts Center</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>&quot;From attendance tracking to payment processing, everything just works. Our instructors and students love it.&quot;</p>
            <div className="testimonial-author">
              <strong>Emily Rodriguez</strong>
              <span>Founder, Urban Movement Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Studio?</h2>
          <p>Join thousands of studio owners who trust MoveMint™ for their daily operations.</p>
          <div className="cta-buttons">
            <a href="mailto:hello@stageport.io" className="btn btn-primary btn-large">
              Start Your Free 14-Day Trial
            </a>
            <a href="mailto:demo@stageport.io" className="btn btn-outline btn-large">
              Schedule a Demo
            </a>
          </div>
          <p className="cta-note">No credit card required • Free setup assistance • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">🌿</span>
              <span className="logo-text">MoveMint™</span>
            </div>
            <p>A Stageport Product</p>
            <p className="footer-tagline">Empowering creative education, one studio at a time.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#products">Pricing</a>
              <a href="#demo">Demo</a>
              <a href="/api/ledger">API Docs</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About Stageport</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">System Status</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Stageport Technologies. All rights reserved. MoveMint™ is a trademark of Stageport Technologies.</p>
        </div>
      </footer>
    </main>
  );
}
