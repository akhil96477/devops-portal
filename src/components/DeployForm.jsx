import React, { useState } from 'react';

const DeployForm = () => {
  const [template, setTemplate] = useState('');
  const [resourceName, setResourceName] = useState('');

  const handleDeploy = (e) => {
    e.preventDefault();
    if (!template || !resourceName) return;
    alert(`Triggering GitOps workflow to deploy ${template} named ${resourceName}...`);
    // In the real app, this calls API Gateway
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem' }}>Provision New Resource</h2>
      
      <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px' }}>
        <form onSubmit={handleDeploy} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--neon-accent)' }}>Environment Name</label>
            <input 
              type="text" 
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
              placeholder="e.g., prod-api-gateway"
              style={{
                padding: '0.8rem',
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid var(--panel-border)',
                color: 'white',
                borderRadius: '4px',
                fontFamily: 'JetBrains Mono'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--neon-accent)' }}>Select Template (Free Tier)</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              
              <div 
                onClick={() => setTemplate('static-site')}
                style={{
                  padding: '1rem',
                  border: `1px solid ${template === 'static-site' ? 'var(--neon-accent)' : 'var(--panel-border)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: template === 'static-site' ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                  transition: 'all 0.2s'
                }}
              >
                <h4>🌐 Static Website (S3 + CloudFront)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Provisions an S3 bucket configured for static web hosting. 100% Free Tier eligible.</p>
              </div>

              <div 
                onClick={() => setTemplate('serverless-api')}
                style={{
                  padding: '1rem',
                  border: `1px solid ${template === 'serverless-api' ? 'var(--neon-accent)' : 'var(--panel-border)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: template === 'serverless-api' ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                  transition: 'all 0.2s'
                }}
              >
                <h4>⚡ Serverless API (API Gateway + Lambda)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Creates a REST API backed by a Node.js Lambda function. Highly scalable, costs $0 when idle.</p>
              </div>

            </div>
          </div>

          <button type="submit" className="btn-neon primary" style={{ marginTop: '1rem', padding: '1rem' }}>
            Initialize Deployment 🚀
          </button>

        </form>
      </div>
    </div>
  );
};

export default DeployForm;
