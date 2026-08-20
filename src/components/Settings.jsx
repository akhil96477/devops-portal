import React from 'react';

const Settings = () => {
  return (
    <div className="content-area" style={{ height: 'calc(100vh - 70px)', paddingBottom: '2rem', gridTemplateColumns: '1fr' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%', maxWidth: '900px' }}>
        
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Preferences & Configuration</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage your AWS connections, GitHub integrations, and portal settings here.</p>
        </div>

        <div className="panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>Cloud Provider Integration</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>AWS Free Tier Credentials</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Required for Terraform to provision resources.</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ padding: '0.35rem 0.75rem', background: '#ecfdf5', color: 'var(--success)', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500' }}>Connected via GitHub Secrets</span>
                <button className="btn">Update Keys</button>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>Default Region</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Where your infrastructure will be deployed by default.</p>
              </div>
              <select style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: '#f8fafc' }}>
                <option>us-east-1 (N. Virginia)</option>
                <option>us-west-2 (Oregon)</option>
                <option>eu-central-1 (Frankfurt)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>GitOps Engine (GitHub Actions)</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-main)' }}>Connected Repository</label>
              <input type="text" value="akhil96477/devops-portal" readOnly style={{ padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '6px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--text-muted)', background: '#f1f5f9' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-main)' }}>Workflow Target</label>
              <input type="text" value="terraform-deploy.yml" readOnly style={{ padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '6px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--text-muted)', background: '#f1f5f9' }} />
            </div>
          </div>
        </div>

        <div className="panel" style={{ padding: '2rem', borderLeft: '4px solid var(--danger)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--danger)' }}>Danger Zone</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Actions here cannot be undone. Be careful when destroying infrastructure.
          </p>
          <button className="btn" style={{ borderColor: 'var(--danger)', color: 'var(--danger)' }}>
            Run terraform destroy
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
