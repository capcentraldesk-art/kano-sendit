import Link from 'next/link';

export default function OrdersPage() {
  const orders = [
    { id: 'ord_1001', status: 'Pending', route: 'Sabon Gari → Kano Municipal' },
    { id: 'ord_1002', status: 'Accepted', route: 'Fagge → Nassarawa' },
    { id: 'ord_1003', status: 'Delivered', route: 'Bompai → Tarauni' },
  ];

  return (
    <main style={{ maxWidth: 960, margin: '40px auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <p style={{ margin: 0, color: '#2563eb', fontWeight: 700 }}>Orders</p>
          <h1 style={{ margin: '8px 0 0' }}>Delivery dashboard</h1>
        </div>
        <Link href="/" style={{ textDecoration: 'none', color: '#111827', fontWeight: 700 }}>
          Back home
        </Link>
      </div>

      <div style={{ display: 'grid', gap: 16 }}>
        {orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: 16,
              padding: 20,
              boxShadow: '0 10px 20px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <strong style={{ fontSize: 18 }}>{order.id}</strong>
                <p style={{ margin: '8px 0 0', color: '#4b5563' }}>{order.route}</p>
              </div>
              <span
                style={{
                  background: '#dbeafe',
                  color: '#1d4ed8',
                  borderRadius: 999,
                  padding: '8px 12px',
                  fontWeight: 700,
                  alignSelf: 'center',
                }}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
