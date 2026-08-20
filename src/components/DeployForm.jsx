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
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Provision New Resource</h2>
      
      <div className="panel" style={{ padding: '2rem', maxWidth: '650px' }}>
        <form onSubmit={handleDeploy} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-main)' }}>Environment Name</label>
            <input 
              type="text" 
              value={resourceName}
              onChange={(e) => setResourceName(e.target.value)}
              placeholder="e.g., prod-api-gateway"
              style={{
                padding: '0.75rem',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-main)' }}>Select Template (Free Tier)</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              
              <div 
                onClick={() => setTemplate('static-site')}
                style={{
                  padding: '1.25rem',
                  border: `2px solid ${template === 'static-site' ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: template === 'static-site' ? '#f0f9ff' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                <h4 style={{ marginBottom: '0.25rem' }}>🌐 Static Website (S3 + CloudFront)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Provisions an S3 bucket configured for static web hosting. 100% Free Tier eligible.</p>
              </div>

              <div 
                onClick={() => setTemplate('serverless-api')}
                style={{
                  padding: '1.25rem',
                  border: `2px solid ${template === 'serverless-api' ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: template === 'serverless-api' ? '#f0f9ff' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                <h4 style={{ marginBottom: '0.25rem' }}>⚡ Serverless API (API Gateway + Lambda)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Creates a REST API backed by a Node.js Lambda function. Highly scalable, costs $0 when idle.</p>
              </div>

            </div>
          </div>

          <button type="submit" className="btn primary" style={{ marginTop: '1rem', padding: '0.75rem', fontSize: '1rem' }}>
            Initialize Deployment 🚀
          </button>

        </form>
      </div>
    </div>
  );
};

export default DeployForm;
