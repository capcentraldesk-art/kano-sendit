import Link from 'next/link';

const features = [
  { title: 'Customers', text: 'Book same-day deliveries across Kano city.' },
  { title: 'Drivers', text: 'Accept jobs, track routes, and earn more.' },
  { title: 'Admins', text: 'Monitor dispatch, payments, and performance.' },
];

const stats = [
  { label: 'Cities covered', value: '3' },
  { label: 'Orders / day', value: '250+' },
  { label: 'Avg. arrival', value: '25 min' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Kano local delivery</span>
          <h1>Deliver faster across Kano with SendIt.</h1>
          <p>
            A Bolt-style delivery app for local errands, food orders, packages, and urgent city mobility.
          </p>
          <div className="hero-actions">
            <Link href="#features" className="primary-btn">
              View Features
            </Link>
            <Link href="#ops" className="secondary-btn">
              Explore Flow
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="order-card">
            <div className="order-header">
              <span>Live order</span>
              <span className="badge success">On route</span>
            </div>
            <div className="route-row">
              <div className="dot pickup" />
              <span>Sabon Gari</span>
            </div>
            <div className="route-divider" />
            <div className="route-row">
              <div className="dot dropoff" />
              <span>Kano Municipal</span>
            </div>
            <div className="meta-row">
              <strong>₦3,200</strong>
              <span>12 mins ago</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="features" className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section id="ops" className="ops-panel">
        <h2>Delivery flow</h2>
        <div className="steps">
          <div>
            <span>1</span>
            <p>Customer creates order</p>
          </div>
          <div>
            <span>2</span>
            <p>Driver accepts request</p>
          </div>
          <div>
            <span>3</span>
            <p>Pickup and delivery</p>
          </div>
          <div>
            <span>4</span>
            <p>Payment and review</p>
          </div>
        </div>
      </section>
    </main>
  );
}
