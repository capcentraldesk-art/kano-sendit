import Link from 'next/link';

export default function DashboardPage() {
  const drivers = [
    { name: 'Ali Sani', status: 'Available', zone: 'Sabon Gari' },
    { name: 'Zainab Yakubu', status: 'On trip', zone: 'Fagge' },
    { name: 'Musa Lawan', status: 'Available', zone: 'Nassarawa' },
  ];

  return (
    <main style={{ maxWidth: 980, margin: '40px auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <p style={{ margin: 0, color: '#16a34a', fontWeight: 700 }}>Operations</p>
          <h1 style={{ margin: '8px 0 0' }}>Driver dashboard</h1>
        </div>
        <Link href="/" style={{ textDecoration: 'none', color: '#111827', fontWeight: 700 }}>
          Back home
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
        {drivers.map((driver) => (
          <div
            key={driver.name}
            style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 18,
              padding: 20,
              boxShadow: '0 10px 20px rgba(0,0,0,0.03)',
            }}
          >
            <h3 style={{ margin: '0 0 10px' }}>{driver.name}</h3>
            <p style={{ margin: '0 0 8px', color: '#4b5563' }}>Zone: {driver.zone}</p>
            <span
              style={{
                display: 'inline-block',
                background: driver.status === 'Available' ? '#dcfce7' : '#fef3c7',
                color: driver.status === 'Available' ? '#166534' : '#92400e',
                padding: '6px 10px',
                borderRadius: 999,
                fontWeight: 700,
              }}
            >
              {driver.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
