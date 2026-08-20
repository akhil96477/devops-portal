import React from 'react';

const ResourcesList = () => {
  // Mock data for now
  const resources = [
    { id: 'res-1', name: 'main-frontend-bucket', type: 'S3 Static Site', status: 'Running', region: 'us-east-1' },
    { id: 'res-2', name: 'user-auth-api', type: 'API Gateway', status: 'Running', region: 'us-east-1' },
    { id: 'res-3', name: 'reporting-worker', type: 'Lambda', status: 'Deploying', region: 'us-west-2' },
  ];

  return (
    <div className="content-area" style={{ height: 'calc(100vh - 70px)', paddingBottom: '2rem', display: 'block' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Active Resources</h2>
        <button className="btn primary">Deploy New</button>
      </div>
      
      <div className="panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
          <thead style={{ background: '#f8fafc' }}>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Resource Name</th>
              <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Type</th>
              <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Region</th>
              <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Status</th>
              <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((res, index) => (
              <tr key={res.id} style={{ borderBottom: index === resources.length - 1 ? 'none' : '1px solid var(--border-color)', transition: 'background 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f8fafc'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                <td style={{ padding: '1.25rem 1.5rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-main)', fontWeight: '500' }}>{res.name}</td>
                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)' }}>{res.type}</td>
                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)' }}>{res.region}</td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <span style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    background: res.status === 'Running' ? '#ecfdf5' : '#fffbeb',
                    color: res.status === 'Running' ? 'var(--success)' : 'var(--warning)'
                  }}>
                    <span style={{ fontSize: '0.5rem' }}>{res.status === 'Running' ? '●' : '↻'}</span> {res.status}
                  </span>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>View Logs</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourcesList;
