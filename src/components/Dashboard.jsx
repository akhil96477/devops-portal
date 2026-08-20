import React from 'react';

const Dashboard = () => {
  return (
    <div className="content-area">
      <div className="panel" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome to the Developer Portal</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Your self-service gateway to provision infrastructure within the AWS Free Tier.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button className="btn primary">Quick Deploy</button>
          <button className="btn">View Active Resources</button>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '6px', borderLeft: '3px solid var(--success)', fontSize: '0.9rem' }}>
              <strong style={{ color: 'var(--text-main)' }}>Success</strong>: User <i>alex.dev</i> deployed <b>Serverless API Template</b> (2 hours ago)
            </div>
            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '6px', borderLeft: '3px solid var(--warning)', fontSize: '0.9rem' }}>
              <strong style={{ color: 'var(--text-main)' }}>Pending</strong>: Terraform provisioning for <b>Static S3 Site</b> (10 mins ago)
            </div>
          </div>
        </div>

        {/* Typographic filler for the bottom of main panel */}
        <div style={{ marginTop: 'auto', paddingTop: '3rem', borderTop: '1px dashed var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Infrastructure Footprint</h4>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
              <div><span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>4</span> <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Nodes</span></div>
              <div><span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>12</span> <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Functions</span></div>
              <div><span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>0.2s</span> <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Avg Latency</span></div>
            </div>
          </div>
          <div style={{ textAlign: 'right', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '250px' }}>
            "Automate everything. If a machine can do it, a machine should do it."
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>System Status</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>API Gateway</span>
              <span style={{ color: 'var(--success)', fontWeight: '500' }}>● Operational</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>GitHub Actions</span>
              <span style={{ color: 'var(--success)', fontWeight: '500' }}>● Idle</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>DynamoDB</span>
              <span style={{ color: 'var(--success)', fontWeight: '500' }}>● Connected</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>Free Tier Usage</span>
              <span style={{ color: 'var(--warning)', fontWeight: '500' }}>12%</span>
            </div>
          </div>
        </div>

        {/* Typographic filler for the bottom right */}
        <div className="panel" style={{ padding: '1.5rem', background: '#f8fafc' }}>
          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Active Architecture</h3>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--primary-color)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div>&gt; us-east-1 (Primary)</div>
            <div style={{ paddingLeft: '1rem', color: 'var(--text-muted)' }}>├─ API Gateway</div>
            <div style={{ paddingLeft: '1rem', color: 'var(--text-muted)' }}>├─ DynamoDB Table</div>
            <div style={{ paddingLeft: '1rem', color: 'var(--text-muted)' }}>└─ React Frontend (S3)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
