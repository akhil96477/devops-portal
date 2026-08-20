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
      <h2 style={{ marginBottom: '2rem' }}>Active Resources</h2>
      
      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--panel-border)', color: 'var(--neon-accent)' }}>
              <th style={{ padding: '1rem' }}>Resource Name</th>
              <th style={{ padding: '1rem' }}>Type</th>
              <th style={{ padding: '1rem' }}>Region</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((res) => (
              <tr key={res.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', fontFamily: 'JetBrains Mono' }}>{res.name}</td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{res.type}</td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{res.region}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    color: res.status === 'Running' ? 'var(--success)' : 'var(--warning)',
                    display: 'flex', alignItems: 'center', gap: '0.5rem'
                  }}>
                    <span style={{ fontSize: '0.6rem' }}>{res.status === 'Running' ? '●' : '↻'}</span> {res.status}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <button className="btn-neon" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Logs</button>
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
