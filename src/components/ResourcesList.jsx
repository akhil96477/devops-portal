import React from 'react';

const ResourcesList = () => {
  // Mock data for now
  const resources = [
    { id: 'res-1', name: 'main-frontend-bucket', type: 'S3 Static Site', status: 'Running', region: 'us-east-1' },
    { id: 'res-2', name: 'user-auth-api', type: 'API Gateway', status: 'Running', region: 'us-east-1' },
    { id: 'res-3', name: 'reporting-worker', type: 'Lambda', status: 'Deploying', region: 'us-west-2' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Active Resources</h2>
      
      <div className="panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
          <thead style={{ background: '#f8fafc' }}>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>Resource Name</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>Type</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>Region</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>Status</th>
              <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((res, index) => (
              <tr key={res.id} style={{ borderBottom: index === resources.length - 1 ? 'none' : '1px solid var(--border-color)' }}>
                <td style={{ padding: '1rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-main)', fontWeight: '500' }}>{res.name}</td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{res.type}</td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{res.region}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    background: res.status === 'Running' ? '#ecfdf5' : '#fffbeb',
                    color: res.status === 'Running' ? 'var(--success)' : 'var(--warning)'
                  }}>
                    <span style={{ fontSize: '0.5rem' }}>{res.status === 'Running' ? '●' : '↻'}</span> {res.status}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <button className="btn" style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem' }}>Logs</button>
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
