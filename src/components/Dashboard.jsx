import React from 'react';

const Dashboard = () => {
  return (
    <div className="content-area">
      <div className="main-panel glass-panel" style={{ padding: '2rem' }}>
        <h2>Welcome to Core Portal</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
          Your self-service gateway to provision infrastructure within the AWS Free Tier.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button className="btn-neon primary">Quick Deploy</button>
          <button className="btn-neon">View Active Resources</button>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3>Recent Activity</h3>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid var(--success)' }}>
              <strong style={{ color: 'var(--success)' }}>Success</strong>: User <i>alex_dev</i> deployed <b>Serverless API Template</b> (2 hours ago)
            </div>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: '4px solid var(--warning)' }}>
              <strong style={{ color: 'var(--warning)' }}>Pending</strong>: Terraform provisioning for <b>Static S3 Site</b> (10 mins ago)
            </div>
          </div>
        </div>
      </div>
      
      <div className="side-panel glass-panel" style={{ padding: '1.5rem' }}>
        <h3>System Status</h3>
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>API Gateway</span>
            <span style={{ color: 'var(--success)', fontSize: '0.9em' }}>● Operational</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>GitHub Actions</span>
            <span style={{ color: 'var(--success)', fontSize: '0.9em' }}>● Idle</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>DynamoDB</span>
            <span style={{ color: 'var(--success)', fontSize: '0.9em' }}>● Connected</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)' }}>Free Tier Usage</span>
            <span style={{ color: 'var(--warning)', fontSize: '0.9em' }}>12%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
