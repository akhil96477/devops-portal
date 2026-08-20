import React from 'react';

const Dashboard = () => {
  return (
    <div className="content-area" style={{ height: 'calc(100vh - 70px)', paddingBottom: '2rem' }}>
      
      {/* LEFT COLUMN - MAIN */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
        
        {/* Top Welcome Panel */}
        <div className="panel" style={{ padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>Welcome back, Alex.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px' }}>
            Your infrastructure is operating normally. You have provisioned 4 resources this month, saving an estimated $142.00 using the AWS Free Tier.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <button className="btn primary" style={{ padding: '0.75rem 1.5rem' }}>Quick Deploy</button>
            <button className="btn" style={{ padding: '0.75rem 1.5rem' }}>View Active Resources</button>
          </div>
        </div>

        {/* Middle Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          <div className="panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Total Deployments</span>
            <span style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: '1' }}>124</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>↑ 12% this week</span>
          </div>
          <div className="panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Avg Build Time</span>
            <span style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: '1' }}>32s</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>↓ 4s faster</span>
          </div>
          <div className="panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Error Rate</span>
            <span style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-main)', lineHeight: '1' }}>0.0%</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Last 30 days</span>
          </div>
        </div>

        {/* Bottom Activity Panel (Stretches to fill) */}
        <div className="panel" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Recent Activity log</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', cursor: 'pointer', fontWeight: '500' }}>View All →</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
            {[
              { status: 'Success', color: 'var(--success)', msg: 'Terraform applied successfully for Static S3 Site.', time: '10 mins ago' },
              { status: 'Info', color: 'var(--primary-color)', msg: 'User alex.dev triggered workflow manually.', time: '12 mins ago' },
              { status: 'Pending', color: 'var(--warning)', msg: 'DynamoDB state locked for provisioning.', time: '12 mins ago' },
              { status: 'Success', color: 'var(--success)', msg: 'Serverless API Gateway deployed to us-east-1.', time: '2 hours ago' },
            ].map((log, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', borderLeft: `3px solid ${log.color}` }}>
                <div style={{ flex: 1 }}>
                  <span style={{ color: 'var(--text-main)', fontWeight: '600', marginRight: '0.5rem', fontSize: '0.9rem' }}>{log.status}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{log.msg}</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{log.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* RIGHT COLUMN - SIDEBAR */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
        
        <div className="panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>System Status</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>API Gateway</span>
              <span style={{ color: 'var(--success)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.35rem' }}><span style={{fontSize: '0.5rem'}}>●</span> Operational</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>GitHub Actions</span>
              <span style={{ color: 'var(--success)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.35rem' }}><span style={{fontSize: '0.5rem'}}>●</span> Idle</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>DynamoDB</span>
              <span style={{ color: 'var(--success)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.35rem' }}><span style={{fontSize: '0.5rem'}}>●</span> Connected</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>Free Tier Quota</span>
              <div style={{ width: '100px', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '12%', height: '100%', background: 'var(--warning)' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ padding: '1.5rem', background: '#f8fafc', flex: 1 }}>
          <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Active Architecture</h3>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
            <div style={{ color: 'var(--primary-color)', fontWeight: '600' }}>&gt; AWS / us-east-1</div>
            <div style={{ paddingLeft: '1rem', display: 'flex', gap: '0.5rem' }}><span style={{color: '#94a3b8'}}>├─</span> <span>API Gateway</span></div>
            <div style={{ paddingLeft: '1rem', display: 'flex', gap: '0.5rem' }}><span style={{color: '#94a3b8'}}>├─</span> <span>DynamoDB Table</span></div>
            <div style={{ paddingLeft: '1rem', display: 'flex', gap: '0.5rem' }}><span style={{color: '#94a3b8'}}>├─</span> <span>Lambda Exec Role</span></div>
            <div style={{ paddingLeft: '1rem', display: 'flex', gap: '0.5rem' }}><span style={{color: '#94a3b8'}}>└─</span> <span>React Frontend (S3)</span></div>
          </div>
          
          <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--primary-color)', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Need more power?</h4>
            <p style={{ fontSize: '0.85rem', opacity: '0.9', marginBottom: '1rem' }}>Upgrade to a paid AWS tier to unlock EC2 and Kubernetes clusters.</p>
            <button className="btn" style={{ width: '100%', color: 'var(--primary-color)' }}>View Plans</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
